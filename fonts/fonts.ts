import { Asset, Phudu } from "next/font/google";

export const phuduSans = Phudu({
    weight: "variable",
    subsets: ["latin"]
  });

export const asset = Asset({
    weight:"400",
    subsets:["latin"]
}) 