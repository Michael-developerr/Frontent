import { AsyncThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { ThunkExtraArg } from "app/providers/StoreProvider/config/ThunkExtraArg";


type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<
  Return,
  Arg,
  {
    rejectValue: RejectedValue;
    extra: ThunkExtraArg;
    state: StateSchema;
  }
>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<ThunkDispatch<StateSchema, ThunkExtraArg, any>>;
  getState: () => StateSchema;
  api: ThunkExtraArg;
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    api: ThunkExtraArg
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.api = api;
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, this.api);
    return result;
  }
}