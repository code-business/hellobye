import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import VideoCard from "./components/video-card";
import SonicImg from  "./components/sonic.jpg";
import ChannelImg from "./components/channel.jpg";
function App() {
  
  return (
    <>
    <div className="position-fixed w-100" style={{zIndex:"10"}}> 
    <Navbar/>
    <Sidebar />
    </div>
    <div className="d-flex flex-wrap justify-content-center video-body" style={{zIndex:"1"}}>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      <VideoCard thumbNailLink={SonicImg} channelImgLink={ChannelImg} watchLink={"watch"} channelLink={"channel"}/>
      </div>
    </>
  )
}
export default App;
