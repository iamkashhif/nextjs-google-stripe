// import { initializeApp } from "firebase/app";
// import { getToken, getMessaging, onMessage } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyDMshXDB0XMmWw5AWMGALhlNfFlkN2tql0",
//   authDomain: "notification-313.firebaseapp.com",
//   projectId: "notification-313",
//   storageBucket: "notification-313.appspot.com",
//   messagingSenderId: "413685101546",
//   appId: "1:413685101546:web:98cf0921ff884b838af893",
//   measurementId: "G-HYH1Z6WTLZ",
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// export const requestForToken = () => {
//   return getToken(messaging, {
//     vapidKey:
//       "BOQargQZIu1c7GAEM-BuLAMJ3WMqPjCkzNlk6wE8VE9yY6lqWohAkAsb1JjNgU_NeujZTrZW8CUUYpXh-FX-c8s",
//   })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log("token >> ", currentToken);
//         alert(currentToken)
//       } else {
//         console.log("else error");
//       }
//     })
//     .catch((err) => {
//       console.log("catch error", err);
//     });
// };

// // export const onMessageListener = () =>
// //   new Promise((resolve) => {
// //     onMessage(messaging, (payload) => {
// //       console.log("data >>>>", payload);
// //       resolve(payload);
// //     });
// //   });


// export const setupMessageListener = () => {
//   onMessage(messaging, (payload) => {
//     console.log("Message received: ", payload);
//     // Handle the message payload as needed
//   });
// };