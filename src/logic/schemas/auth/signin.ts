import { string } from "yup";

import type { SigninValues } from "@typing/services/auth";

export const SigninSchema = {
  name: string().required("required"),
  email: string().email("invalid email").required("required"),
};

export const DEFAULT_SIGNIN_VALUES: SigninValues = {
  name: "",
  email: "",
}
