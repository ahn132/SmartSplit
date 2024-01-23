import {Button, Text, View} from "react-native";

function LoginScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.push('Home')}
            />
        </View>
    )
}

export default LoginScreen