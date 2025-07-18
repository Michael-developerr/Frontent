import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "utility-types";
import { getLoginPassword } from "./getLoginPassword";


describe("getLoginPassword.test", () => {
  test("should return password", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123123',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123123');
  });
  test("should work with emty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
