import NavigationCard from "./NavigationCard/NavigationCard";
import "./NavigationMenu.css";

export default function NavigationMenu() {
  return (
    <div className="NavigationMenu">
      <NavigationCard title="My Portfolio" navigateTo="/" />
      <NavigationCard title="My Projects" navigateTo="/projects" />
      <NavigationCard title="My Interests" navigateTo="/interests" />
    </div>
  );
}
