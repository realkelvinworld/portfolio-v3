import { create } from "zustand";

interface pageProps {
  page: string;
  setPage: (slug: string) => void;
}

export const usePageStore = create<pageProps>((set) => ({
  page: "me",
  setPage: (slug) => set({ page: slug }),
}));
