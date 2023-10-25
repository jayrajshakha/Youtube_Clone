import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../Index";
import axios from "axios";
import { YOUTUBE_API_URL } from "../../utils/constant";

const API_KEY = "AIzaSyA2vZvE-p9hJh-Fmi2AuXsj5HF84Y3mwUE";

export const GetHomePageVideos = createAsyncThunk(
  "youtubeApp/HomePageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, video },
    } = getState() as RootState;

    const {
      data: { items, nextPageToken },
    } = await axios.get(
      `${YOUTUBE_API_URL}/search?maxResults=20&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""
      }`
    );

    return {
      items,
      nextPageToken,
    };
  }
);
