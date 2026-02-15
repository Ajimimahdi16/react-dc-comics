
export const navLinks = [
  { text: "CHARACTERS", url: "#", active: false },
  { text: "COMICS", url: "#", active: true },
  { text: "MOVIES", url: "#", active: false },
  { text: "TV", url: "#", active: false },
  { text: "GAMES", url: "#", active: false },
  { text: "COLLECTIBLES", url: "#", active: false },
  { text: "VIDEOS", url: "#", active: false },
  { text: "FANS", url: "#", active: false },
  { text: "NEWS", url: "#", active: false },
  { text: "SHOP", url: "#", active: false },
];

const NavBar = () => {
  return (
    <div className="navbar">
      <img src="" alt="DC Logo" className="logo" />
      <nav>
        <ul>
          {navLinks.map((nav, index) => (
            <li key={index} className={nav.active ? "active" : ""}>
              <a href={nav.url}>{nav.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;