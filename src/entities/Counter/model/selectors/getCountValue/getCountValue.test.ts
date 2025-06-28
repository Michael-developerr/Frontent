import { DeepPartial } from "utility-types";
import { getCountValue } from "./getCountValue";
import { StateSchema } from "app/providers/StoreProvider";




describe("getCountValue.test", () => {
  test("", () => {
 const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };


    expect(getCountValue(state as StateSchema)).toEqual(10);
  });
});