import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Button, Icon, Input, Text } from "react-native-elements";

import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./LoginForm.styles";

import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.data";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState();

  const navigation = useNavigation();

  const goToRegisterScreen = () => {
    navigation.navigate(screen.account.register);
  };

  const goToApp = () => {
    navigation.navigate(screen.account.index);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
        goToApp();
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al iniciar sesion, intentelo mas tarde",
        });
      }
    },
  });

  return (
    <View style={styles.content}>
      <View style={styles.formContainer}>
        <Input
          placeholder="Correo electronico"
          placeholderTextColor="#777777"
          rightIcon={{
            type: "material-community",
            name: "at",
            color: "#828282",
          }}
          cursorColor="red"
          style={styles.inputEmail}
          onChangeText={(text) => {
            formik.setFieldValue("email", text);
          }}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Contraseña"
          placeholderTextColor="#777777"
          cursorColor="red"
          secureTextEntry={!showPassword}
          rightIcon={
            <Icon
              type="material-community"
              name={!showPassword ? "eye-outline" : "eye-off-outline"}
              color="#828282"
              onPress={toggleShowPassword}
            />
          }
          onChangeText={(text) => {
            formik.setFieldValue("password", text);
          }}
          errorMessage={formik.errors.password}
        />
        <Button
          title="Iniciar Sesion"
          containerStyle={styles.buttonContainerSignIn}
          buttonStyle={styles.buttonSignIn}
          titleStyle={styles.buttonTitleSignIn}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        />
        <TouchableOpacity style={styles.tcontainerGoogle} activeOpacity={0.8}>
          <Image
            source={require("../../../../assets/icons/google.png")}
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
              marginLeft: 20,
            }}
          />
          <Text style={styles.textTContainerGoogle}>Continuar con google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tcontainerFacebook} activeOpacity={0.8}>
          <Image
            source={require("../../../../assets/icons/facebook.png")}
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
              marginLeft: 15,
            }}
          />
          <Text style={styles.textTContainerFacebook}>
            Continuar con facebook
          </Text>
        </TouchableOpacity>

        <Text style={styles.textSignUp}>
          ¿No tienes una cuenta?
          <Text style={styles.buttonSignUp} onPress={goToRegisterScreen}>
            {" "}
            Registrate
          </Text>
        </Text>
      </View>
    </View>
  );
}
