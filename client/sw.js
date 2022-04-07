self.addEventListener("push", (event) => {
  console.log(self.registration);
  try {
    const data = JSON.parse(event.data);
    self.registration.showNotification(data.title, {
      body: data.body
    });

  } catch (err) {
    self.registration.showNotification("Sample notification", {});
  }
});
