import React, { useState, useEffect } from "react";
import { ApolloProvider } from "react-apollo-hooks";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import client from "./apollo";
import Chat from "./chat";

export default function App() {
  const [notificationStatus, setNotificationStatus] = useState(false);
  const ask = async () => {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    setNotificationStatus(status as any);
    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
  };
  useEffect(() => {
    ask();
  }, []);
  return (
    <ApolloProvider client={client}>
      <Chat />
    </ApolloProvider>
  );
}
