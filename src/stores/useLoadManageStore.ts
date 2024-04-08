import { create } from "zustand";

type ILoadStore = {
  load: number;
  loaded: boolean;
  percent: number;
  setPercentage: (p: number) => void;
  registerLoad: () => void;
  unRegisterLoad: () => void;
};

const useLoadManageStore = create<ILoadStore>()((set) => ({
  load: 0,
  percentage: 0,
  loaded: false,
  percent: 0,
  setPercentage: (percentage: number): void => set({ percent: percentage }),
  registerLoad: (): void =>
    set((state) => {
      const newLoad = state.load + 1;
      return { load: newLoad };
    }),
  unRegisterLoad: (): void =>
    set((state) => {
      const newLoad = state.load - 1;
      return { load: newLoad, loaded: newLoad <= 0 };
    }),
}));

export default useLoadManageStore;
