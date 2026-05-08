import { create } from "zustand";
type AuthState = { accessToken?: string; refreshToken?: string; setTokens: (accessToken: string, refreshToken: string) => void; logout: () => void };
export const useAuthStore = create<AuthState>((set) => ({
  accessToken: localStorage.getItem("accessToken") ?? undefined,
  refreshToken: localStorage.getItem("refreshToken") ?? undefined,
  setTokens: (accessToken, refreshToken) => { localStorage.setItem("accessToken", accessToken); localStorage.setItem("refreshToken", refreshToken); set({ accessToken, refreshToken }); },
  logout: () => { localStorage.removeItem("accessToken"); localStorage.removeItem("refreshToken"); set({ accessToken: undefined, refreshToken: undefined }); }
}));
