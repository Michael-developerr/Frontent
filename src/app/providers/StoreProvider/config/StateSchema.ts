import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUserName";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSchema;
}
