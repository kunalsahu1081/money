import { Tabs } from "expo-router";
import { Dimensions } from "react-native";

const window_dimensions = Dimensions.get("window");
const screen_dimensions = Dimensions.get("screen");

export default function TabLayout() {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarStyle: {
                        display:
                            window_dimensions.width > 1024 ? "none" : "flex",
                    },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                    }}
                />

                <Tabs.Screen name="about" options={{ title: "About" }} />
            </Tabs>
        </>
    );
}
