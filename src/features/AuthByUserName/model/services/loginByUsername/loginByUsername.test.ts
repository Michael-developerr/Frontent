// import axios from "axios";
// import { loginByUsername } from "./loginByUsername";
// import { Dispatch } from "@reduxjs/toolkit";
// import { StateSchema } from "app/providers/StoreProvider";
// import { ThunkExtraArg } from "app/providers/StoreProvider/config/ThunkExtraArg";
// import { userAction } from "entities/User";
// import { TestAsyncThunk } from "shared/lib/TestAsyncThunk/TestAsyncThunk";

// // jest.mock("axios");

// // const mockedAxios = jest.mocked(axios, { shallow: false });
// jest.mock("axios");

// const mockedAxios = axios as jest.Mocked<typeof axios>;
// describe("loginByUsername.test", () => {
//     let dispatch: Dispatch;
//     let getState: () => StateSchema;
//     const api: ThunkExtraArg = {
//       api: mockedAxios,
//     };
//     beforeEach(() => {
//       dispatch = jest.fn();
//       getState = jest.fn();
//     });

//     test("fulfilled", async () => {
//       const userValue = { username: "123", id: "1" };

//       mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
//       const action = loginByUsername({ username: "123", password: "123" });
//       const result = await action(dispatch, getState, api);
//       expect(dispatch).toHaveBeenCalledWith(userAction.setAuthData(userValue));
//       expect(dispatch).toHaveBeenCalledTimes(3);
//       expect(mockedAxios.post).toHaveBeenCalled();
//       expect(result.meta.requestStatus).toBe("fulfilled");
//       expect(result.payload).toBe(userValue);
//     });

//     test("error login", async () => {
//       mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
//       const action = loginByUsername({ username: "123", password: "123" });
//       const result = await action(dispatch, getState, api);

//       expect(dispatch).toHaveBeenCalledTimes(2);
//       expect(mockedAxios.post).toHaveBeenCalled();
//       expect(result.meta.requestStatus).toBe("rejected");
//       expect(result.payload).toBe("error");
//     });
// })
import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { userAction } from "entities/User";
import { TestAsyncThunk } from "shared/lib/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("loginByUsername.test", () => {
  const mockedApi = {
    api: mockedAxios,
  };

  test("fulfilled", async () => {
    const userValue = { username: "123", id: "1" };
    mockedAxios.post.mockResolvedValue({ data: userValue });

    const thunk = new TestAsyncThunk(loginByUsername, mockedApi);
    const result = await thunk.callThunk({ username: "123", password: "123" });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: userAction.setAuthData.type,
        payload: userValue,
      })
    );
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(userValue);
  });

  test("error login", async () => {
    mockedAxios.post.mockRejectedValue({ response: { status: 403 } });

    const thunk = new TestAsyncThunk(loginByUsername, mockedApi);
    const result = await thunk.callThunk({ username: "123", password: "123" });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });
});
