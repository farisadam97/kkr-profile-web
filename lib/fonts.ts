import { Lato, Playfair_Display } from "next/font/google";

export const lato = Lato({
  weight: ["300", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});
