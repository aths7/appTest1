import { View, StyleSheet, Text } from "react-native";
import { Link, Stack } from "expo-router";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff",
    }
});

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops! Not Found' }} />
            <View style={styles.container} >
                <Text style={{ color: "#fff", fontSize: 20, marginBottom: 20 }}>404 - Page Not Found</Text>
                <Link href="/" style={styles.button}>Go to Home</Link>
            </View>
        </>
    )
}   