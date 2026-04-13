import "@/global.css"
import { Text } from "react-native";
import {Link} from "expo-router";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import {styled} from "react-native-css";


const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
    return (
        <SafeAreaView className="flex-1 p-5 bg-background ">
            <Text className="text-xl font-bold text-success">
                Welcome to Native wind Prince!
            </Text>
            <Link href="/onbording" className=" mt-4 rounded bg-primary text-white p-4">Go to Onboarding</Link>
            <Link href="/(auth)/sign-in" className=" mt-4 rounded bg-primary text-white p-4">Go to Sign In</Link>
            <Link href="/(auth)/sign-up" className=" mt-4 rounded bg-primary text-white p-4">Go to Sign Up</Link>
            <Link href="/(tabs)/subscriptions" className=" mt-4 rounded bg-primary text-white p-4">Spotify Subscription</Link>
            <Link href={{ pathname: "/subscriptions/[id]", params: { id: 'Claude' }}}  className=" mt-4 rounded bg-primary text-white p-4">Subscriptions detail</Link>
        </SafeAreaView>
    );
}