import { useEffect } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { GetHomePageVideos } from "../store/reducers/GetHomePageVideos";

const Home = () => {

  const dispatch = useAppDispatch()
  const videos = useAppSelector(state => state.youtubeApp.video)
  // console.log(videos);
  


  useEffect(() => {
      dispatch(GetHomePageVideos(false))
  },[dispatch])

  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-[7.5vh]">
        <Navbar />
      </div>
      <div className=" flex h-[92.5vh]">
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
