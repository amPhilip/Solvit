import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Theme } from "../../../context/Theme";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    
}