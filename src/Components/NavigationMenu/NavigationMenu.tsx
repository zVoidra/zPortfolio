import './NavigationMenu.css'

export default function NavigationMenu () {
  return (
    <div className="NavigationMenu">
      <div className="NavigationCard">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="3em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/>
        </svg>
        <div>My Portfolio</div>
        <button>Expander</button>
      </div>
    </div>
  );
}