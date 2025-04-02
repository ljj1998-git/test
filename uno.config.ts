import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetWind3,
} from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";
import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders";
import { globSync } from "fs";

export default defineConfig({
  presets: [
    presetWind3(), // 类似 Tailwind 的原子化工具类
    presetAttributify(), // 支持属性化模式（如 `<div text-red>`）
    presetWebFonts({
      provider: "bunny",
      fonts: {
        mono: "DM Mono",
        sans: "DM Sans",
        strong: "Rubik Iso",
        fast: "Ubuntu",
        hand: "Caveat",
        display: "Tourney",
        blackboard: "Walter Turncoat",
        flower: "Indie Flower",
      },
    }),
    presetIcons({
      warn: true,
      prefix: ["i-"],
      extraProperties: {
        display: "inline-block",
        width: "1em",
        height: "1em",
      },
      collections: {
        c: FileSystemIconLoader("./src/assets/svg/c"),
      },
    }),
    presetRemToPx({ baseFontSize: 16 }),
  ],
  shortcuts: [
    ["wh-full", "w-full h-full"],
    ["f-c-c", "flex justify-center items-center"],
    ["flex-col", "flex flex-col"],
    ["auto-bg", "bg-white dark:bg-dark"],
    ["auto-bg2", "bg-[#f0f2f5] dark:bg-[#363c4e]"],
    // 动画类
    /** 旋转180° */
    [
      "rotate-to-180",
      "rotate-180 transition-transform duration-300 ease-in-out",
    ],
    ["rotate-to-0", "rotate-0 transition-transform duration-300 ease-in-out"],
  ],
  rules: [
    ...globSync("src/assets/images/c/*.png").map((path) => {
      const name = path.split("\\").pop()?.replace(".png", "");
      return [
        `icon-c-${name}`,
        { "background-image": `url(${path.replace(/\\/g, "/")})` },
      ] as any;
    }),
  ],
  theme: {
    colors: {
      primary: "var(--primary-color)",
      dark: "#18181c",
      light_border: "#efeff5",
      dark_border: "#2d2d30",
    },
  },
});
