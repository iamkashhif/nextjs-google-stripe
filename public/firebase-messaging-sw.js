importScripts(
  "https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDMshXDB0XMmWw5AWMGALhlNfFlkN2tql0",
  authDomain: "notification-313.firebaseapp.com",
  projectId: "notification-313",
  storageBucket: "notification-313.appspot.com",
  messagingSenderId: "413685101546",
  appId: "1:413685101546:web:98cf0921ff884b838af893",
  measurementId: "G-HYH1Z6WTLZ"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});