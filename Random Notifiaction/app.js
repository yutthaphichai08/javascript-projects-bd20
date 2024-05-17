const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const message = [
  "สวัสดีตอนเช้า",
  "Hello World",
  "Good Morning",
  "ราตรีสวัสดิ์",
  "Good Night",
  "ManYutthaphichai",
  "สบายดีไหม",
];

btn.addEventListener("click", () => createNotification());

function createNotification() {
  const notificationEl = document.createElement("div");
  notificationEl.classList.add("notification");
  notificationEl.innerText = randomMessage();
  container.appendChild(notificationEl);
  setTimeout(() => {
    notificationEl.remove();
  }, 3000);
}

function randomMessage() {
  return message[Math.floor(Math.random() * message.length)];
}
