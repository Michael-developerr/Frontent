import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "utility-types";
import { getLoginError } from "./getLoginError";

describe("getLoginError.test", () => {
  test("should reurn error", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        
        error: "error",
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual("error");
  });
    test("should work with emty state", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
