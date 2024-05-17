const container = document.querySelector(".container");
const rows = 4;
const cols = 3;

function ramdomNumber() {
  return Math.floor(Math.random() * 500);
}
for (let i = 0; i < rows * cols; i++) {
  //ภาพ
  const url = `https://source.unsplash.com/random/${ramdomNumber()}`;
  //พื้รที่แสดงภาพ
  const imagEl = document.createElement("img");
  imagEl.src = url;
  container.appendChild(imagEl);
}
