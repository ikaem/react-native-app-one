import React from "react";
import { StyleSheet, Text, Button, View, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import Center from "../../components/UI/center.component";

import Colors from "../../constants/colors.constants";

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  return (
    <Center>
      <View style={styles.loginBox}>
        <Image
          style={styles.loginLogo}
          source={require("../../assets/images/login-logo.png")}
        />
        <View style={styles.loginForm}>
          <Text style={styles.loginLabel}>Korisničko ime</Text>
          <View style={styles.loginInput}>
            <TextInput />
          </View>
          <Text style={styles.loginLabel}>Lozinka</Text>
          <View style={styles.loginInput}>
            <TextInput />
          </View>
          <View style={styles.loginAction}>
          <Button title="Prijava" onPress={onLogin} />
          </View>
        </View>
      </View>
    </Center>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginBox: {
    width: 200,
  },
  loginLogo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 50,
  },
  loginForm: {},
  loginLabel: {},
  loginInput: {
      borderColor: Colors.darkBlue,
      borderWidth: 1,
      marginTop: 3,
      marginBottom: 10,
      borderRadius: 7,
  },
  loginAction: {
      marginTop: 25
  }
});
