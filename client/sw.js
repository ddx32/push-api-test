self.addEventListener("push", () => {
  console.log(self.registration);
  self.registration.showNotification("This is not a drill", {});
});
