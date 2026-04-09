import React from "react";
import { View, Text } from "react-native";
import {Link} from "expo-router";

const SignUp = () => {
    return (
        <View>
            <Text>SignUp</Text>
            <Link href="/(auth)/sign-in">Login</Link>
        </View>
    );
}

export default SignUp