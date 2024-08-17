import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    inter_Regular: Inter_400Regular,
    inter_Bold: Inter_700Bold,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <ImageBackground
      source={require("./assets/light-bg.png")}
      style={{ flex: 1 }}
    >
      {/* container */}
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginTop: 32,
          paddingHorizontal: 12,
        }}
      >
        {/* top Part */}
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text
              style={{
                fontFamily: "inter_Regular",
                fontSize: 12,
                color: "#FFFFFF",
              }}
            >
              “The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value.”
            </Text>
            <Text
              style={{
                fontFamily: "inter_Bold",
                color: "#FFFFFF",
                fontSize: 12,
                marginTop: 8,
              }}
            >
              - Ada Lovelace
            </Text>
          </View>
          <Image source={require("./assets/refresh.png")} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
