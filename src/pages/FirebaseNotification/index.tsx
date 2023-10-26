import React, { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getToken, getMessaging, onMessage } from "firebase/messaging";
import { Alert, AlertTitle, Box } from "@mui/material";

const firebaseConfig = {
  apiKey: "AIzaSyDMshXDB0XMmWw5AWMGALhlNfFlkN2tql0",
  authDomain: "notification-313.firebaseapp.com",
  projectId: "notification-313",
  storageBucket: "notification-313.appspot.com",
  messagingSenderId: "413685101546",
  appId: "1:413685101546:web:98cf0921ff884b838af893",
  measurementId: "G-HYH1Z6WTLZ",
};

const app = initializeApp(firebaseConfig);

const FirebaseMessaging = () => {
  const [notificationMsg, setNotificationMsg] = React.useState<any>();
  const [token, setToken] = React.useState<any>();

  useEffect(() => {
    const messaging = getMessaging(app);

    const requestForToken = async () => {
      try {
        const currentToken = await getToken(messaging, {
          vapidKey: `${process.env.NEXT_PUBLIC_VAPI_KEY}`,
        });
        if (currentToken) {
          setToken(currentToken);
        } else {
          setToken("No Token Available");
        }
      } catch (err) {
        console.error("Error getting token", err);
      }
    };

    const setupMessageListener = () => {
      onMessage(messaging, (payload) => {
        console.log({ payload });
        setNotificationMsg(payload);
      });
    };

    requestForToken();
    setupMessageListener();
  }, []);

  console.log({ token });

  return (
    <Box>
      <Alert
        severity={token === "No Token Available" ? "info" : "success"}
        className="mx-32"
      >
        <AlertTitle>FCM Token</AlertTitle>
        {token}
      </Alert>
    </Box>
  );
};

export default FirebaseMessaging;
