import * as yup from "yup";

export const schema = {
  signin: () =>
    yup.object().shape({
      email: yup.string().email().required(),
      password: yup
        .string()
        .test(
          "password",
          "Password must be at least 8 characters long and contain at least one number, one lowercase and one uppercase letter",
          (password) => {
            if (!password) return false;
            const regex =
              /^(?=.*[a-zA-Z])(?=.*[!@#$%&^*+=-\d])(?=.*[0-9]).{8,20}$/;
            if (password.match(regex)) {
              return true;
            }
            return false;
          }
        )
        .required(),
    }),
};
