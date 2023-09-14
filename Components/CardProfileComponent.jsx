import { View,Image,Text,TouchableOpacity } from "react-native";
import { s } from "./CardProfileStyle";
import {FontAwesome} from "@expo/vector-icons";



export function CardProfileComponent(){
    return (
        <View style={s.container}>
            <View style={s.header}>
                <Image style={s.avatar} source={{ uri: "https://i.pravatar.cc/300" }} />
            </View>
            <View style={s.body}>
                <Text style={s.name}>Daheng inbitor</Text>
                <Text style={s.info}>Frontend Developer</Text>
                <View style={s.social}>
                < TouchableOpacity Style={s.btnSocial}>
                <FontAwesome name="twitter" size={24} color="blue" />
                </TouchableOpacity>
                < TouchableOpacity Style={s.btnSocial}>
                <FontAwesome name="linkedin-square" size={24} color="black" />
                </TouchableOpacity>
                < TouchableOpacity Style={s.btnSocial}>
                <FontAwesome name="github" size={24} color="red" />
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}