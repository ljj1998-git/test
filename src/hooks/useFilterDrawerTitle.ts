export const useFilterDrawerTitle = computed(() => {
  return (type) => {
    const instance = getCurrentInstance();
    return instance?.proxy?.$enums.EDrawerTitleType[type];
  };
});
