import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "House of Par",
    short_name: "House of Par",
    description: "Premium golf training aids for home practice in the UK.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f1e8",
    theme_color: "#013292",
    icons: [{ src: "/icon.png", sizes: "any", type: "image/png" }],
  };
}
