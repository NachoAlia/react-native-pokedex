import React, { useState } from "react";
import { View, Text } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./RegisterForm.styles";
import { screen } from "../../../utils";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./RegisterForm.data";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(
          auth,
          formValues.email,
          formValues.password
        );
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al registrarse, intentelo mas tarde",
        });
      }
    },
  });

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const toggleShowPasswordRepeat = () => {
    setShowPasswordRepeat((prevState) => !prevState);
  };
  const goToApp = () => {
    navigation.navigate(screen.account.index);
  };

  return (
    <View style={styles.content}>
      <View style={styles.formContainer}>
        <Input
          placeholder="Correo electronico"
          placeholderTextColor="#777777"
          cursorColor="red"
          rightIcon={{
            type: "material-community",
            name: "at",
            color: "#828282",
          }}
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
        <Input
          placeholder="Repetir contraseña"
          placeholderTextColor="#777777"
          cursorColor="red"
          secureTextEntry={!showPasswordRepeat}
          rightIcon={
            <Icon
              type="material-community"
              name={!showPasswordRepeat ? "eye-outline" : "eye-off-outline"}
              color="#828282"
              onPress={toggleShowPasswordRepeat}
            />
          }
          onChangeText={(text) => {
            formik.setFieldValue("passwordRepeat", text);
          }}
          errorMessage={formik.errors.passwordRepeat}
        />
        <Button
          title="Registrarse"
          containerStyle={styles.buttonSignIn}
          onPress={formik.handleSubmit}
          loading={formik.isSubmitting}
        />
      </View>
    </View>
  );
}
