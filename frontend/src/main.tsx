import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import confetti from "canvas-confetti";
import { Bell, LogOut, Paperclip, Plus, Trash2, Upload } from "lucide-react";
import { io } from "socket.io-client";
import { api, endpoints, Todo } from "./api";
import { useAuthStore } from "./store";
import "./index.css";

const qc = new QueryClient();
const authSchema = z.object({ email: z.string().email(), password: z.string().min(8), username: z.string().optional() });
function Auth({ mode }: { mode: "login" | "register" }) {
  const nav = useNavigate(); const setTokens = useAuthStore((s) => s.setTokens);
  const form = useForm({ resolver: zodResolver(authSchema) });
  const mutation = useMutation({ mutationFn: (data: any) => mode === "login" ? endpoints.login(data) : endpoints.register(data), onSuccess: async (res, vars: any) => {
    if (mode === "register") { const login = await endpoints.login({ email: vars.email, password: vars.password }); res = login; }
    setTokens(res.data.data.accessToken, res.data.data.refreshToken); nav("/");
  }});
  return <main className="grid min-h-screen place-items-center bg-slate-100"><form onSubmit={form.handleSubmit((d) => mutation.mutate(d))} className="w-full max-w-sm rounded-lg bg-white p-6 shadow-sm">
    <h1 className="mb-5 text-2xl font-semibold">{mode === "login" ? "Login" : "Register"}</h1>
    {mode === "register" && <input className="mb-3 w-full rounded border p-3" placeholder="Username" {...form.register("username")} />}
    <input className="mb-3 w-full rounded border p-3" placeholder="Email" {...form.register("email")} />
    <input className="mb-3 w-full rounded border p-3" type="password" placeholder="Password" {...form.register("password")} />
    <button className="w-full rounded bg-slate-900 p-3 text-white">{mode === "login" ? "Login" : "Create account"}</button>
    <Link className="mt-4 block text-sm text-blue-700" to={mode === "login" ? "/register" : "/login"}>{mode === "login" ? "Need an account?" : "Already registered?"}</Link>
  </form></main>;
}
function Notifications() {
  const token = useAuthStore((s) => s.accessToken); const client = useQueryClient();
  React.useEffect(() => { if (!token) return; const s = io(import.meta.env.VITE_SOCKET_URL ?? "http://localhost:3004", { auth: { token } }); s.on("notification", () => client.invalidateQueries({ queryKey: ["notifications"] })); return () => { s.close(); }; }, [token]);
  const q = useQuery({ queryKey: ["notifications"], queryFn: () => endpoints.notifications().then((r) => r.data.data), enabled: !!token });
  const unread = (q.data ?? []).filter((n: any) => !n.read).length;
  return <div className="relative"><Bell /><span className="absolute -right-2 -top-2 rounded-full bg-red-600 px-1 text-xs text-white">{unread}</span></div>;
}
function Dashboard() {
  const [filters, setFilters] = useState({ status: "", priority: "", search: "" }); const client = useQueryClient();
  const todos = useQuery({ queryKey: ["todos", filters], queryFn: () => endpoints.todos(filters).then((r) => r.data.data) });
  const create = useMutation({ mutationFn: () => endpoints.createTodo({ title: "New todo", priority: "MEDIUM", tags: [] }), onSuccess: () => client.invalidateQueries({ queryKey: ["todos"] }) });
  const update = useMutation({ mutationFn: ({ id, data }: any) => endpoints.updateTodo(id, data), onMutate: async ({ id, data }) => {
    await client.cancelQueries({ queryKey: ["todos"] }); const prev = client.getQueryData(["todos", filters]);
    client.setQueryData(["todos", filters], (old: Todo[] = []) => old.map((t) => t.id === id ? { ...t, ...data } : t)); return { prev };
  }, onSuccess: (_r, v) => { if (v.data.status === "DONE") confetti(); }, onSettled: () => client.invalidateQueries({ queryKey: ["todos"] }) });
  const del = useMutation({ mutationFn: endpoints.deleteTodo, onSuccess: () => client.invalidateQueries({ queryKey: ["todos"] }) });
  const items: Todo[] = todos.data ?? []; const stats = { total: items.length, done: items.filter((t) => t.status === "DONE").length, overdue: items.filter((t) => t.dueDate && new Date(t.dueDate) < new Date()).length, high: items.filter((t) => ["HIGH","URGENT"].includes(t.priority)).length };
  const onDragEnd = (_event: DragEndEvent) => client.invalidateQueries({ queryKey: ["todos"] });
  return <div className="min-h-screen"><header className="flex items-center justify-between border-b bg-white px-6 py-4"><Link to="/" className="text-xl font-semibold">Todos</Link><div className="flex gap-4"><SearchBox /><Notifications /><button onClick={() => useAuthStore.getState().logout()}><LogOut /></button></div></header>
    <main className="mx-auto max-w-6xl p-6"><section className="grid grid-cols-4 gap-3">{Object.entries(stats).map(([k,v]) => <div className="rounded bg-white p-4 shadow-sm" key={k}><div className="text-sm uppercase text-slate-500">{k}</div><div className="text-3xl font-semibold">{v}</div></div>)}</section>
    <section className="mt-5 flex gap-3"><select className="rounded border p-2" onChange={(e) => setFilters({...filters, status: e.target.value})}><option value="">All status</option><option>TODO</option><option>IN_PROGRESS</option><option>DONE</option></select><select className="rounded border p-2" onChange={(e) => setFilters({...filters, priority: e.target.value})}><option value="">All priority</option><option>LOW</option><option>MEDIUM</option><option>HIGH</option><option>URGENT</option></select><button className="ml-auto flex items-center gap-2 rounded bg-slate-900 px-3 text-white" onClick={() => create.mutate()}><Plus size={16}/>New</button></section>
    <DndContext onDragEnd={onDragEnd}><table className="mt-5 w-full border-separate border-spacing-y-2"><tbody>{items.map((t) => <tr key={t.id} className="bg-white shadow-sm"><td className="rounded-l p-3"><input defaultValue={t.title} className="w-full font-medium" onBlur={(e) => update.mutate({ id: t.id, data: { title: e.target.value } })}/><div className="text-sm text-slate-500">{t.tags?.join(", ")}</div></td><td><select value={t.priority} onChange={(e) => update.mutate({ id: t.id, data: { priority: e.target.value } })} className="rounded border p-2"><option>LOW</option><option>MEDIUM</option><option>HIGH</option><option>URGENT</option></select></td><td><select value={t.status} onChange={(e) => update.mutate({ id: t.id, data: { status: e.target.value } })} className="rounded border p-2"><option>TODO</option><option>IN_PROGRESS</option><option>DONE</option><option>ARCHIVED</option></select></td><td><Link to={"/todos/" + t.id} className="text-blue-700">Open</Link></td><td className="rounded-r p-3"><button onClick={() => del.mutate(t.id)}><Trash2 /></button></td></tr>)}</tbody></table></DndContext></main></div>;
}
function SearchBox() {
  const [q, setQ] = useState(""); const query = useQuery({ queryKey: ["search", q], queryFn: () => endpoints.search(q).then((r) => r.data.data), enabled: q.length > 1 });
  return <div className="relative"><input className="rounded border px-3 py-2" placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} />{query.data && <div className="absolute right-0 top-11 z-10 w-80 rounded bg-white p-2 shadow">{query.data.map((r: any) => <Link className="block p-2 hover:bg-slate-100" key={r.id} to={"/todos/" + r.id}>{r.title}</Link>)}</div>}</div>;
}
function Detail() {
  const { id = "" } = useParams(); const client = useQueryClient();
  const todo = useQuery({ queryKey: ["todo", id], queryFn: () => api.get("/todos/" + id).then((r) => r.data.data) });
  const files = useQuery({ queryKey: ["files", id], queryFn: () => endpoints.files(id).then((r) => r.data.data) });
  const update = useMutation({ mutationFn: (data: any) => endpoints.updateTodo(id, data), onSuccess: () => client.invalidateQueries({ queryKey: ["todo", id] }) });
  const upload = useMutation({ mutationFn: (file: File) => { const f = new FormData(); f.append("todoId", id); f.append("file", file); return endpoints.upload(f, () => undefined); }, onSuccess: () => client.invalidateQueries({ queryKey: ["files", id] }) });
  if (!todo.data) return null; return <div><header className="border-b bg-white p-4"><Link to="/">Back</Link></header><main className="mx-auto max-w-3xl p-6"><input className="w-full text-3xl font-semibold" defaultValue={todo.data.title} onBlur={(e) => update.mutate({ title: e.target.value })}/><textarea className="mt-5 h-48 w-full rounded border p-3" defaultValue={todo.data.description} onBlur={(e) => update.mutate({ description: e.target.value })}/><section className="mt-6 rounded bg-white p-4"><h2 className="mb-3 flex gap-2 font-semibold"><Paperclip/>Attachments</h2><label className="flex cursor-pointer items-center gap-2 rounded border border-dashed p-6"><Upload/>Drop or choose file<input type="file" className="hidden" onChange={(e) => e.target.files?.[0] && upload.mutate(e.target.files[0])}/></label>{(files.data ?? []).map((f: any) => <button key={f.id} className="mt-2 block text-blue-700" onClick={async () => { const r = await endpoints.download(f.id); location.href = r.data.data.url; }}>{f.filename}</button>)}</section></main></div>;
}
function Private({ children }: { children: React.ReactNode }) { return useAuthStore((s) => s.accessToken) ? <>{children}</> : <Navigate to="/login" />; }
ReactDOM.createRoot(document.getElementById("root")!).render(<React.StrictMode><QueryClientProvider client={qc}><BrowserRouter><Routes><Route path="/login" element={<Auth mode="login"/>}/><Route path="/register" element={<Auth mode="register"/>}/><Route path="/" element={<Private><Dashboard/></Private>}/><Route path="/todos/:id" element={<Private><Detail/></Private>}/></Routes></BrowserRouter></QueryClientProvider></React.StrictMode>);
