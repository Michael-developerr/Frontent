import { DeepPartial } from "utility-types";
import { LoginSchema } from "../types/loginSchema";
import { loginAction, loginReduser } from "./loginSlice";
import { StateSchema } from "app/providers/StoreProvider";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";

describe("loginSlice.test", () => {
  test("test set username", () => {
    const state: DeepPartial<LoginSchema> = { username: "123" };

    expect(
      loginReduser(state as LoginSchema, loginAction.setUsername("123123"))
    ).toStrictEqual({ username: "123123" });
  });


  test("test set password", () => {
    const state: DeepPartial<LoginSchema> = { password: "123" };

    expect(
      loginReduser(state as LoginSchema, loginAction.setPassword("123123"))
    ).toStrictEqual({ password: "123123" });
  });
});
