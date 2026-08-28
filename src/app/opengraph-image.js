import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#000000",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", width: 64, height: 8, background: "#FF5E14", marginBottom: 40 }} />
        <div style={{ display: "flex", fontSize: 72, fontWeight: 800, letterSpacing: "-0.02em" }}>
          Babitha Constructions
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#C6D2E4", marginTop: 20 }}>
          Construction — Bangalore
        </div>
      </div>
    ),
    { ...size },
  );
}
