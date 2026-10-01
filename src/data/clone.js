// Digital clone demo. One fictional product (drawn as SVG in
// ProductClone.jsx) placed in different scenes and flavours, plus the shots
// of a short product film made with the same clone.

export const CLONE_PRODUCT = {
  brand: "BOLEADORA",
  line: "MATE COLD BREW",
  size: "355 ML",
};

export const CLONE_FLAVORS = [
  {
    id: "original",
    name: "Original",
    body: "#1f3d2e",
    accent: "#d9cda6",
    ink: "#eee8d8",
  },
  {
    id: "pomelo",
    name: "Pomelo",
    body: "#b9644f",
    accent: "#f1e3d6",
    ink: "#f6ece2",
  },
  {
    id: "menta",
    name: "Menta",
    body: "#86b3a2",
    accent: "#1f3d2e",
    ink: "#1f3d2e",
  },
];

export const CLONE_SCENES = [
  {
    id: "estudio",
    name: "Estudio",
    background:
      "linear-gradient(180deg, #6d6a63 0%, #4b4943 64%, #34322d 100%)",
    rim: "#e9e4d8",
    shadow: "#00000070",
  },
  {
    id: "golden",
    name: "Golden hour",
    background:
      "radial-gradient(circle at 72% 30%, #e8c48e 0 7%, #d9a36a33 12%, transparent 30%), linear-gradient(180deg, #b98357 0%, #8a4d35 58%, #3b2319 100%)",
    rim: "#e8bf86",
    shadow: "#1a080488",
  },
  {
    id: "hielo",
    name: "Hielo",
    background:
      "linear-gradient(180deg, #9dbac6 0%, #4f7a8e 60%, #1f3a48 100%)",
    rim: "#dcf1f7",
    shadow: "#06182188",
    props: "ice",
    droplets: true,
  },
  {
    id: "neon",
    name: "Neón",
    background:
      "radial-gradient(circle at 50% 44%, #2e1a47 0 26%, #110d1b 72%)",
    rim: "#e27dc8",
    shadow: "#00000099",
    props: "neon",
  },
  {
    id: "bar",
    name: "Bar",
    background:
      "radial-gradient(circle at 18% 24%, #e0b77a55 0 5%, transparent 6%), radial-gradient(circle at 80% 18%, #d9a06044 0 7%, transparent 8%), radial-gradient(circle at 62% 34%, #e6c88a33 0 4%, transparent 5%), linear-gradient(180deg, #261b15 0%, #3e2b1f 64%, #6e4a30 64%, #533826 100%)",
    rim: "#e6c490",
    shadow: "#12080388",
  },
];

// A 10-second product film: same clone, five shots.
export const CLONE_SHOTS = [
  { tc: "00:00", scene: "hielo", frame: { zoom: 2.5, y: -18 } },
  { tc: "00:02", scene: "golden", frame: { zoom: 0.9, x: -14, y: 4, rot: -9 } },
  { tc: "00:04", scene: "estudio", frame: { zoom: 2.8, y: 50 } },
  { tc: "00:06", scene: "neon", trio: true },
  { tc: "00:08", scene: "estudio" },
];
