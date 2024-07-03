import { Image, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import IllustrationImg from '../../assets/illustration.png';
import { StatusBar } from "expo-status-bar";
import { ButtoIcon } from "../../components/ButtonIcon";

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar 
        backgroundColor="transparent"
        translucent
      />
        <Image source={IllustrationImg} style={styles.image} resizeMode="stretch" />
        <View style={styles.content}>
          <Text style={styles.title}>Organize {'\n'}Suas jogatinas {'\n'}facilment</Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          <ButtoIcon />
        </View>
    </View>
  )
}