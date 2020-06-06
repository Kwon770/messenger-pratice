import React, { Suspense } from "react";
import { View, ActivityIndicator } from "react-native";

export default function withSuspense(Component: Function) {
  return class extends React.Component {
    render() {
      return (
        <Suspense
          fallback={
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator />
            </View>
          }
        >
          <Component />
        </Suspense>
      );
    }
  };
}
