self.addEventListener("push", (event) => {
  console.log(self.registration);
  try {
    const data = event.data.json();
    self.registration.showNotification(data.title, {
      body: data.body
    });

  } catch (err) {
    self.registration.showNotification("Sample notification", {});
  }
});
