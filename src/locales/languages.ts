import { ELayout } from "@/constants";
import { flattenLocales } from "@/utils/dealLocals";

/**
 * @description 语言包
 * 约定格式,数组位数
 * 第一个为中文
 * 第二个为英文
 */
const locales = {
  /** 公共 */
  common: {
    /** 按钮 */
    button: {
      add: ["新增", "add"],
      edit: ["编辑", "edit"],
      expand: ["展开", "expand"],
      collapse: ["收起", "collapse"],
    },
  },
  layout: {
    fullScreen: ["全屏", "full screen"],
    primaryColor: ["主题色", "primary color"],
    layout: ["布局", "layout"],
    [ELayout.default]: ["默认布局", "default"],
    [ELayout.simple]: ["简约布局", "simple"],
    [ELayout.full]: ["全面布局", "full"],
  },
  /** 首页 */
  home: {
    title: ["首页", "home"],
  },
};

// 执行转换
export const messages = flattenLocales(locales);
