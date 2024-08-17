import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

const RoleView = ({ label, view }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: "Inter-Regular",
            color: "#303030",
            fontSize: 10,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {label}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: "Inter-Bold",
            fontSize: 20,
            color: "#303030",
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

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
        {/* top portion*/}
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
        {/* BOTTOM PORTION */}

        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("./assets/sun.png")} />
            <Text
              style={{
                fontFamily: "Inter_Regular",
                fontSize: 15,
                color: "#FFFFFF",
                marginLeft: 8,
                letterSpacing: 3,
              }}
            >
              GOOD MORNING
            </Text>
          </View>
          <View>
            <Text>
              <Text
                style={{
                  fontFamily: "Inter_Bold",
                  fontSize: 100,
                  color: "#FFFFFF",
                }}
              >
                11:37
              </Text>
              <Text
                style={{
                  fontFamily: "inter_Regular",
                  fontSize: 15,
                  color: "#FFFFFF",
                }}
              >
                BST
              </Text>
            </Text>
          </View>
          {/* Location */}
          <View style={{ marginTop: 16 }}>
            <Text
              style={{
                fontFamily: "Inter_Bold",
                fontSize: 15,
                color: "#FFFFFF",
                letterSpacing: 3,
              }}
            >
              IN LONDON, UK
            </Text>
          </View>

          {/* BUTTON */}
          <TouchableOpacity
            onPress={() => {}}
            style={{
              flexDirection: "row",
              height: 40,
              width: 115,
              backgroundColor: "#fff",
              borderRadius: 30,
              marginTop: 50,
              justifyContent: "space-between",
              paddingLeft: 16,
              paddingRight: 4,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "inter_Bold",
                fontSize: 12,
                color: "#000",
                letterSpacing: 3,
              }}
            >
              MORE
            </Text>
            <Image source={require("./assets/arrow-down.png")} />
          </TouchableOpacity>
        </View>
      </View>
      {/* EXPANDED View */}
      <View
        style={{
          backgroundColor: "#fff",
          opacity: 0.8,
          paddingVertical: 48,
          paddingHorizontal: 26,
        }}
      >

        <RoleView label={"Current Timezone"} value="Europe/London"/>
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
