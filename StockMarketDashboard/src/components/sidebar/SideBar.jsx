import "../../styles/sidebar/SideBar.css";
import TopContainer from "./TopContainer";
import MiddleContainer from "./middleContainer";
import BottomContainer from "./BottomContainer";

export default function SideBar() {
  return (
    <div className='side--menu'>
      <TopContainer></TopContainer>
      <MiddleContainer></MiddleContainer>
      <BottomContainer></BottomContainer>
    </div>
  );
}
