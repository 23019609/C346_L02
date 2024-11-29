import React from "react";
import { Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import {
    useFonts,
    ArbutusSlab_400Regular,
} from "@expo-google-fonts/arbutus-slab";
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";

const Boat = ({ name, description, picture }) => {
    useFonts({
        Arbutus_Slab: ArbutusSlab_400Regular,
        DM_Sans: DMSans_400Regular,
    });

    return (
        <View>
            <Text
                style={{
                    textTransform: "uppercase",
                    fontFamily: "Arbutus_Slab",
                    fontSize: 20,
                    marginTop: 20,
                    color: "dimgrey",
                }}
            >
                <Icon name="sait-boat" size={20} color="dimgrey" /> {name}
            </Text>
            <Text
                style={{
                    marginBottom: 7,
                    marginTop: 2,
                    fontFamily: "DM_Sans",
                    fontSize: 16,
                    color: "grey",
                }}
            >
                {description}
            </Text>
            <Image source={picture} style={{ marginBottom: 20 }} />
        </View>
    );
};

export default Boat;
