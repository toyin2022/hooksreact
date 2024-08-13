import "./navbar.css";
const Navbar = ({ bgcolor, textcolor }) => {
  return (
    <div
      style={{ backgroundColor: bgcolor, color: textcolor }}
      className="navbar"
    >
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <ul className="navlink">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
