import "./MyPortfolio.css";
import blackhole from "../../assets/blackhole.mp4";

export default function MyPortfolio() {
  return (
    <div className="MyPortfolio">
      <video autoPlay loop muted className="background-video">
        <source src={blackhole} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>My Portfolio</h1>
    </div>
  );
}
