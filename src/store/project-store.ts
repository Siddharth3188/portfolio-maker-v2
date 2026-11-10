import { create } from "zustand";

export type GenerationMode = "guided" | "ai";
export type ProjectDraft = {
  name: string;
  profession: string;
  mode: GenerationMode;
  prompt: string;
  style: string;
};

type ProjectStore = {
  draft: ProjectDraft;
  setDraft: (patch: Partial<ProjectDraft>) => void;
  resetDraft: () => void;
};

const initialDraft: ProjectDraft = {
  name: "",
  profession: "Developer",
  mode: "guided",
  prompt: "",
  style: "Premium minimal",
};

export const useProjectStore = create<ProjectStore>((set) => ({
  draft: initialDraft,
  setDraft: (patch) => set((state) => ({ draft: { ...state.draft, ...patch } })),
  resetDraft: () => set({ draft: initialDraft }),
}));
