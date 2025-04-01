import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFound() {
    return (
        <>
            <Stack.Screen options={{ title: "Page Not Found" }} />

            <View>
                <Link href={"/"}> Go Back to Home Screen </Link>
            </View>
        </>
    );
}
