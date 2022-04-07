const webpush = require("web-push");

const vapidKeys = {
  publicKey:
    "BPqIXpNucQYvuISc8pMWT8nMheQIhU6I9BypzMbGv9Rs-QJNMCofr4INj2IPAHorxdacvW0wvmII00gM3ejXH_Y",
  privateKey: "bEqNYmfiILEACL0LIoMLd3Eazjr4M2hzyEc9O0hpQgs",
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fOq4DviClSc:APA91bGY7Mxb7qd-NDffP3sHa0L_gNOncYJedHjLGpZiBR6xoHCcNkEQKNy4hv7hQnLeeIuV9gRCrXu6j9ijqNdPHPdeq4Zr7y-OkEuuXVM4fJNFoSOS63aukk2anh6qSk70-LjVjnxr",
  expirationTime: null,
  keys: {
    p256dh:
      "BNGUQmWSvmCXAvVkCEBA2ODqoZw-r1fSf8epjmsYkW55jTNTwZnFP09OUIszFKmCdEc0bLZ_eMOYguxava2QzBI",
    auth: "9mSAlc_WKNMch2bB1byONA",
  },
};

const notificationData = {
  title: "I'm sending you an SMS",
  body: "Please read me it's important plz"
}

webpush.sendNotification(pushSubscription, JSON.stringify(notificationData));
