import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch } from "react-native";
import { Theme } from "./context/Theme";
import { appColors } from "./src/components/styles/appColors";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <Theme.Provider value={theme}>
      <View
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "#1E1F22" }]
        }
      >
        <StatusBar style="auto" />
        <Switch
          value={theme === "light"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </View>
    </Theme.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.light,
    alignItems: "center",
    justifyContent: "center",
  },
});
