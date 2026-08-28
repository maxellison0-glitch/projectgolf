import { ImageResponse } from "next/og";

export const alt = "House of Par — Golf training aids for home practice";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f4f1e8",
          color: "#131c33",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div style={{ color: "#013292", fontSize: 28, letterSpacing: 8, textTransform: "uppercase" }}>
          House of Par
        </div>
        <div style={{ fontFamily: "serif", fontSize: 72, lineHeight: 1.05, marginTop: 42, maxWidth: 960 }}>
          Home practice, held to a standard.
        </div>
        <div style={{ color: "#a6874e", fontSize: 24, marginTop: 42 }}>
          Premium golf training aids · Free UK tracked delivery
        </div>
      </div>
    ),
    size,
  );
}
