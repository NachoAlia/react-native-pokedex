import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
    passwordRepeat: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("El email ingresado no es correcto")
      .required("El campo email es obligatorio"),
    password: Yup.string().required("El campo contraseña es obligatorio"),
    passwordRepeat: Yup.string()
      .required("El campo repetir contraseña es obligatorio")
      .oneOf([Yup.ref("password")], "Las contraseñas deben coincidir"),
  });
}
