import { SigninSchema } from "@schemas/auth";
import { object, type InferType } from "yup";

const signinSchema = object(SigninSchema);
export type SigninValues = InferType<typeof signinSchema>;
