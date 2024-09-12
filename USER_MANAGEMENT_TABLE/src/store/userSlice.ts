import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/User';



interface UsersState {
  users: User[];
  loading: boolean;
}

const initialState: UsersState = {
  users: [],
  loading: false,
};

export const fetchUsers = createAsyncThunk<User[]>('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { deleteUser } = userSlice.actions;
export default userSlice.reducer;
