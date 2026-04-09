import React from "react";
import { View, Text } from "react-native";
import {Link, useLocalSearchParams} from "expo-router";

const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams<{id: string}>();
    console.log(id);
    return (
        <View>
            <Text>Subscription Details: {id}</Text>
            <Link href="/">Go Back</Link>
        </View>
    );
}

export default SubscriptionDetails