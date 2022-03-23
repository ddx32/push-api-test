import urlBase64ToUint8Array from "./utils/urlBase64ToUint8Array.mjs";

const publicVapidKey =
  "BPqIXpNucQYvuISc8pMWT8nMheQIhU6I9BypzMbGv9Rs-QJNMCofr4INj2IPAHorxdacvW0wvmII00gM3ejXH_Y";

const subscribe = async () => {
  if (!("serviceWorker" in navigator)) return;
  const registration = await navigator.serviceWorker.ready;
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  });

  console.log(subscription.toJSON());
};

window.addEventListener("load", async () => {
  const subButton = document.getElementById("subscribe");
  subButton.addEventListener("click", subscribe);

  if ("serviceWorker" in navigator) {
    let serviceWorker = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
    });
    console.log(serviceWorker);
  }

  const socket = new WebSocket("ws://localhost:8080");
  socket.addEventListener("open", (event) => socket.send("Wytaj serveri"));

  socket.addEventListener("message", (event) =>
    console.log("Servir prawi: ", event.data)
  );

  fetch("http://localhost:8090/insecure").then((response) =>
    console.log(response)
  );
});
