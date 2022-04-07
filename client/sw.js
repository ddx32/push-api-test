self.addEventListener("push", (event) => {
  console.log(self.registration);
  let data = {}
  if (event.data) {
    data = event.data.json()
  }
  self.registration.showNotification("Sample notification", {});

  // var notification = new self.Notification(title, {
  //   body: data.message || 'Default message',
  //   tag: 'sample notification'
  // })
  
  // notification.addEventListener('click', function() {
  //   if (clients.openWindow) {
  //     clients.openWindow('https://connect.prusa3d.com');
  //   }
  // })
});
