import { Image, Text, TouchableOpacity, View } from 'react-native'
import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

export const ButtoIcon = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>Entrar com Discord</Text>
        </TouchableOpacity>
    )
}