import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "utility-types";
import { getLoginIsLoading } from "./getLoginIsLoading";

describe("getLoginIsLoading.test", () => {
  test("should reurn error", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });
  test("should work with emty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
