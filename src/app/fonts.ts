// src/app/fonts.ts
import { Sora } from "next/font/google";

export const sora = Sora({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"], // include all weights you need
});
