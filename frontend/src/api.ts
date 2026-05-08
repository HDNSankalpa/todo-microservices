import axios from "axios";
import { useAuthStore } from "./store";

export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000/api" });
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) config.headers.Authorization = "Bearer " + token;
  return config;
});
api.interceptors.response.use(undefined, async (error) => {
  const store = useAuthStore.getState();
  const original = error.config;
  if (error.response?.status === 401 && store.refreshToken && !original._retry) {
    original._retry = true;
    const res = await axios.post((import.meta.env.VITE_API_URL ?? "http://localhost:3000/api") + "/auth/refresh", { refreshToken: store.refreshToken });
    store.setTokens(res.data.data.accessToken, res.data.data.refreshToken);
    original.headers.Authorization = "Bearer " + res.data.data.accessToken;
    return api(original);
  }
  throw error;
});
export type Todo = { id: string; title: string; description: string; priority: "LOW"|"MEDIUM"|"HIGH"|"URGENT"; status: "TODO"|"IN_PROGRESS"|"DONE"|"ARCHIVED"; dueDate?: string; tags: string[]; position: number };
export const endpoints = {
  login: (data: unknown) => api.post("/auth/login", data),
  register: (data: unknown) => api.post("/auth/register", data),
  todos: (params?: unknown) => api.get("/todos", { params }),
  createTodo: (data: unknown) => api.post("/todos", data),
  updateTodo: (id: string, data: unknown) => api.patch("/todos/" + id, data),
  deleteTodo: (id: string) => api.delete("/todos/" + id),
  bulk: (data: unknown) => api.patch("/todos/bulk", data),
  undo: (id: string) => api.post("/todos/" + id + "/undo"),
  files: (todoId: string) => api.get("/files/" + todoId),
  upload: (form: FormData, onUploadProgress: (e: ProgressEvent) => void) => api.post("/files/upload", form, { onUploadProgress: onUploadProgress as any }),
  download: (fileId: string) => api.get("/files/" + fileId + "/download"),
  notifications: () => api.get("/notifications"),
  readNotification: (id: string) => api.patch("/notifications/" + id + "/read"),
  search: (q: string) => api.get("/search", { params: { q } })
};
