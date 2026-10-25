
import ThemeToggle from "./ThemeToggle";

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="brand">Theme<span>Manager</span></h2>

            <ThemeToggle />
        </nav>
    );
}

export default Navbar;
