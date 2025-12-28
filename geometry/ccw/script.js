const canvas = document.getElementById("scene");
const ctx = canvas.getContext("2d");
const coordsEl = document.getElementById("coords");
const resultEl = document.getElementById("result");
const pointEls = {
  A: document.querySelector('.point[data-point="A"]'),
  B: document.querySelector('.point[data-point="B"]'),
  C: document.querySelector('.point[data-point="C"]'),
};

const presets = {
  reset: {
    A: { x: -160, y: -80 },
    B: { x: 160, y: -40 },
    C: { x: -40, y: 160 },
  },
  ccw: {
    A: { x: -140, y: -80 },
    B: { x: 160, y: 10 },
    C: { x: -40, y: 170 },
  },
  line: {
    A: { x: -160, y: -80 },
    B: { x: 0, y: 40 },
    C: { x: 160, y: 160 },
  },
  cw: {
    A: { x: -140, y: 120 },
    B: { x: 140, y: 40 },
    C: { x: -40, y: -140 },
  },
};

const state = {
  A: { ...presets.reset.A },
  B: { ...presets.reset.B },
  C: { ...presets.reset.C },
};

let size = { width: 0, height: 0 };
let dragging = null;

function resize() {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = size.width * dpr;
  canvas.height = size.height * dpr;
  canvas.style.width = `${size.width}px`;
  canvas.style.height = `${size.height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  drawScene();
}

function screenFromWorld(point) {
  return {
    x: size.width / 2 + point.x,
    y: size.height / 2 - point.y,
  };
}

function worldFromScreen(x, y) {
  return {
    x: x - size.width / 2,
    y: size.height / 2 - y,
  };
}

function drawGrid() {
  ctx.clearRect(0, 0, size.width, size.height);
  ctx.fillStyle = "#050608";
  ctx.fillRect(0, 0, size.width, size.height);

  const minor = 40;
  const startX = (size.width / 2) % minor;
  const startY = (size.height / 2) % minor;

  let column = 0;
  for (let x = startX; x < size.width; x += minor, column += 1) {
    ctx.strokeStyle =
      column % 5 === 0 ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.16)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, size.height);
    ctx.stroke();
  }

  let row = 0;
  for (let y = startY; y < size.height; y += minor, row += 1) {
    ctx.strokeStyle =
      row % 5 === 0 ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.16)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(size.width, y);
    ctx.stroke();
  }
}

function drawArrow(start, end, color) {
  const angle = Math.atan2(end.y - start.y, end.x - start.x);
  const headLength = 12;

  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(end.x, end.y);
  ctx.lineTo(
    end.x - headLength * Math.cos(angle - Math.PI / 6),
    end.y - headLength * Math.sin(angle - Math.PI / 6)
  );
  ctx.lineTo(
    end.x - headLength * Math.cos(angle + Math.PI / 6),
    end.y - headLength * Math.sin(angle + Math.PI / 6)
  );
  ctx.closePath();
  ctx.fill();
}

function drawLabel(text, start, end) {
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  const angle = Math.atan2(end.y - start.y, end.x - start.x);
  const offset = 14;
  const labelX = midX - Math.sin(angle) * offset;
  const labelY = midY + Math.cos(angle) * offset;

  ctx.font = "700 14px 'Palatino Linotype', 'Book Antiqua', Palatino, serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.fillText(text, labelX, labelY);
}

function drawShapes() {
  const a = screenFromWorld(state.A);
  const b = screenFromWorld(state.B);
  const c = screenFromWorld(state.C);
  const dWorld = {
    x: state.B.x + (state.C.x - state.A.x),
    y: state.B.y + (state.C.y - state.A.y),
  };
  const d = screenFromWorld(dWorld);

  ctx.fillStyle = "rgba(186, 153, 255, 0.4)";
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.lineTo(c.x, c.y);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "rgba(140, 255, 170, 0.4)";
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.lineTo(d.x, d.y);
  ctx.lineTo(c.x, c.y);
  ctx.closePath();
  ctx.fill();

  drawArrow(a, b, "#ffa8e1");
  drawArrow(a, c, "#b5ffa8");
  drawLabel("u", a, b);
  drawLabel("v", a, c);
}

function drawScene() {
  drawGrid();
  drawShapes();
  updatePoints();
  updateHud();
}

function updatePoints() {
  for (const key of Object.keys(pointEls)) {
    const el = pointEls[key];
    const pos = screenFromWorld(state[key]);
    const size = 28;
    el.style.left = `${pos.x - size / 2}px`;
    el.style.top = `${pos.y - size / 2}px`;
  }
}

function formatPoint(point) {
  return `(${point.x.toFixed(1)}, ${point.y.toFixed(1)})`;
}

function updateHud() {
  const u = {
    x: state.B.x - state.A.x,
    y: state.B.y - state.A.y,
  };
  const v = {
    x: state.C.x - state.A.x,
    y: state.C.y - state.A.y,
  };
  const cross = u.x * v.y - u.y * v.x;
  const ccw =
    cross > 0 ? "CCW (counter-clockwise)" : cross < 0 ? "CW (clockwise)" : "Collinear";

  coordsEl.innerHTML = `
    <div><strong>A</strong> ${formatPoint(state.A)}</div>
    <div><strong>B</strong> ${formatPoint(state.B)}</div>
    <div><strong>C</strong> ${formatPoint(state.C)}</div>
  `;

  resultEl.innerHTML = `
    <div><strong>u × v</strong> ${cross.toFixed(2)}</div>
    <div><strong>Result</strong> ${ccw}</div>
  `;
}

function handlePointerDown(event) {
  const pointKey = event.currentTarget.dataset.point;
  dragging = pointKey;
  event.currentTarget.setPointerCapture(event.pointerId);
}

function handlePointerMove(event) {
  if (!dragging) return;
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  state[dragging] = worldFromScreen(x, y);
  drawScene();
}

function handlePointerUp(event) {
  if (!dragging) return;
  event.currentTarget.releasePointerCapture(event.pointerId);
  dragging = null;
}

function bindPoints() {
  Object.values(pointEls).forEach((el) => {
    el.addEventListener("pointerdown", handlePointerDown);
    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerup", handlePointerUp);
    el.addEventListener("pointercancel", handlePointerUp);
  });
}

function bindButtons() {
  document.querySelectorAll("button[data-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      const preset = presets[button.dataset.preset];
      if (!preset) return;
      state.A = { ...preset.A };
      state.B = { ...preset.B };
      state.C = { ...preset.C };
      drawScene();
    });
  });
}

bindPoints();
bindButtons();
window.addEventListener("resize", resize);
resize();
