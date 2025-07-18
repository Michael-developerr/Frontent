import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "utility-types";
import { getLoginUsername } from "./getLoginUsername";



describe("getLoginPassword.test", () => {
  test("should return username", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '123123',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('123123');
  });
  test("should work with emty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
