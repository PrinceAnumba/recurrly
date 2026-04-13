import "@/global.css"
import { Text } from "react-native";
import {Link} from "expo-router";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import {styled} from "react-native-css";


const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
    return (
        <SafeAreaView className="flex-1 p-5 bg-background ">
            <Text className="text-5xl font-sans-extrabold text-primary">
                Home
            </Text>
            <Link href="/onbording" className=" mt-4 rounded bg-primary text-white p-4 font-sans-bold">Go to Onboarding</Link>
            <Link href="/(auth)/sign-in" className=" mt-4 rounded bg-primary text-white p-4 font-sans-bold">Go to Sign In</Link>
            <Link href="/(auth)/sign-up" className=" mt-4 rounded bg-primary text-white p-4 font-sans-bold">Go to Sign Up</Link>
        </SafeAreaView>
    );
}