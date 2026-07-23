import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#F6F2EC",
          color: "#1F2B1D",
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        <div>NatureGren</div>
        <div style={{ fontSize: 28, marginTop: 20 }}>
          Inspired by Nature
        </div>
      </div>
    )
  );
}