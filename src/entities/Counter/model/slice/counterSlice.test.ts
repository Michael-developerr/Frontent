import { counterAction, counterReduser } from "./counterSlice";
import { CounterSchema } from "../type/counterSchema";

describe("counterSlice.test", () => {
  test("decrement", () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReduser(state, counterAction.decrement())).toEqual({
      value: 9,
    });
  });
  test("increment", () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReduser(state, counterAction.increment())).toEqual({
      value: 11,
    });
  });

  test("should work with empty state", () => {
    expect(counterReduser(undefined, counterAction.increment())).toEqual({
      value: 1,
    });
  });
});
