import { defineStore } from "pinia";
import _ from "lodash";

export const useDictionaryStore = defineStore("dictionary", {
  state: () => ({
    dictionarys: new Map(),
  }),
  getters: {},
  actions: {
    /** 获取所有字典值 */
    async getDictionarys() {
      try {
        const res = [
          {
            key: "status",
            label: "状态",
            children: [
              { value: "1", label: "启用" },
              { value: "0", label: "启用" },
            ],
          },
        ];
        res.forEach((item) => {
          this.dictionarys.set(
            item.key,
            _.isEmpty(item.children) ? [] : item.children
          );
        });
      } catch (e) {
        console.error(e);
      }
    },
    /** 获取指定字典值 */
    getDictionary(key: string) {
      return this.dictionarys.get(key) || [];
    },
  },
});
