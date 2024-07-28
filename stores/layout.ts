import { defineStore } from "pinia";

export const useLayoutStore = defineStore("layoutStore", () => {
  const systemBar = ref(true);
  const appBarTop = ref(true);
  const appBarBottom = ref(true);
  const navigationDrawerLeftOne = ref(true);
  const navigationDrawerLeftTwo = ref(true);
  const navigationDrawerRight = ref(true);

  return {
    systemBar,
    appBarTop,
    appBarBottom,
    navigationDrawerLeftOne,
    navigationDrawerLeftTwo,
    navigationDrawerRight,
  };
});
