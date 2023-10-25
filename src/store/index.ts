import { configureStore, createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../Types";
import { GetHomePageVideos } from "./reducers/GetHomePageVideos";

const initialState: InitialState = {
  video: [],
  recommendedVideos: [],
  searchResults: [],
  curruntPlaying: null,
  searchTerm: "",
  nextPageToken: null,
};

const youtubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(GetHomePageVideos.fulfilled, (state, action) => {
          state.video = action.payload.items
          
      })
  },
});

export const store = configureStore({
  reducer: {
    youtubeApp: youtubeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
