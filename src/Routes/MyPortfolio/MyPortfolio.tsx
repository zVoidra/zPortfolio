import CodingAnimation from "./CodingAnimation/CodingAnimation";
import "./MyPortfolio.css";
// import blackhole from "../../assets/blackhole.mp4";
// import { useRive } from "@rive-app/react-canvas";
import RiveComponent from "@rive-app/react-canvas";

export default function MyPortfolio() {
  // const { rive, RiveComponent } = useRive({
  //   src: "coding_anim.riv",
  //   stateMachines: "bumpy",
  //   autoplay: true,
  // });

  return (
    <div className="MyPortfolio">
      {/* <video autoPlay loop muted className="background-video">
        <source src={blackhole} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <h1>My Portfolio</h1>
      {/* <div style={{ width: "300px", height: "300px" }}>
        <RiveComponent src="coding_anim.riv" />
      </div> */}
      <CodingAnimation />
    </div>
  );
}
