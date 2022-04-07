self.addEventListener("push", (event) => {
  console.log(self.registration);
  let data = {}
  if (event.data) {
    data = event.data
  }

  var notification = new self.Notification(data.title || 'Default title', {
    body: data.message || 'Default message',
    tag: 'sample notification'
  })
  
  notification.addEventListener('click', function() {
    if (clients.openWindow) {
      clients.openWindow('https://connect.prusa3d.com');
    }
  })
});
