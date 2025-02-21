import { create } from "zustand";

const useSearchStore = create((set) => ({
    results: [],
    setResults: (p) => {
        set((state) => ({
            results: p,
        }))
    }
}));

export default useSearchStore;