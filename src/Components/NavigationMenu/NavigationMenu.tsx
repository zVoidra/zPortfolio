import NavigationCard from "./NavigationCard/NavigationCard";
import "./NavigationMenu.css";

export default function NavigationMenu() {
  return (
    <div className="NavigationMenu">
      <NavigationCard title="zPortfolio" navigateTo="/" />
      <NavigationCard title="Works" navigateTo="/mywork" />
      <NavigationCard title="About Me" navigateTo="/about" />
    </div>
  );
}
