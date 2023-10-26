import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const getUser = createAsyncThunk("getUser", async () => {
  const res = await fetch(`${baseUrl}/api/users`);
  const data = await res.json();
  return data;
});

export const postUser = createAsyncThunk("postUser", async (props: any) => {
  const { data, dispatch } = props;
  try {
    const options = {
      credential: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(`${baseUrl}/api/users`, options);
    const data1 = await res.json();

    if (data1) {
      dispatch(getUser());
      return data1;
    }
  } catch (error) {
    console.log("error in add : catch");
  }
});

export const deleteUser = createAsyncThunk("deleteUser", async (props: any) => {
  const { userId, dispatch } = props;
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    };

    const res = await fetch(
      `${baseUrl}/api/users/${userId}`,
      options
    );
    const data1 = await res.json();

    if (data1) {
      dispatch(getUser());
      return data1;
    }
  } catch (error) {
    console.log("error in delete : catch");
  }
});

export const updateUser = createAsyncThunk("updateUser", async (props: any) => {
  const { data, userId, dispatch } = props;
  try {
    const options = {
      credential: "include",
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(
      `${baseUrl}/api/users/${userId}`,
      options
    );
    const data1 = await res.json();

    if (data1) {
      dispatch(getUser());
      return data1;
    }
  } catch (error) {
    console.log("error in update : catch");
  }
});

export const searchUser = createAsyncThunk("searchUser", async (props: any) => {
  const { search } = props;
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(
      `${baseUrl}/api/users/${search}`,
      options
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error in delete : search");
  }
});

const initialState: any = {
  addUserLoading: false,
  addUserData: [],

  getUserLoading: false,
  getUserData: [],

  updateUserLoading: false,
  updateUserData: [],

  deleteUserLoading: false,
  deleteUserData: [],
};

export const usersReducer = createSlice({
  name: "usersReducer",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // post user
      .addCase(postUser.pending, (state: any) => {
        state.getDataLoading = true;
      })
      .addCase(postUser.fulfilled, (state: any, action: any) => {
        state.addUserLoading = false;
        state.addUserData = action.payload;
      })

      // Get user
      .addCase(getUser.pending, (state: any) => {
        state.getDataLoading = true;
      })
      .addCase(getUser.fulfilled, (state: any, action: any) => {
        state.getUserLoading = false;
        state.getUserData = action.payload;
      })

      // delete user
      .addCase(deleteUser.pending, (state: any) => {
        state.deleteUserLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state: any, action: any) => {
        state.deleteUserLoading = false;
        state.deleteUserData = action.payload;
      })

      // update user
      .addCase(updateUser.pending, (state: any) => {
        state.updateUserLoading = true;
      })
      .addCase(updateUser.fulfilled, (state: any, action: any) => {
        state.updateUserLoading = false;
        state.updateUserData = action.payload;
      })

      // search user
      .addCase(searchUser.pending, (state: any) => {
        state.getUserLoading = true;
      })
      .addCase(searchUser.fulfilled, (state: any, action: any) => {
        state.getUserLoading = false;
        state.getUserData = action.payload;
      });
  },
});

export default usersReducer.reducer;
