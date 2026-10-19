
function Header({ currentView, setCurrentView, darkMode, setDarkMode }) {
  return (
    <header className="header">
      <h1>Student Dashboard</h1>

      <nav>
        <button onClick={() => setCurrentView("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setCurrentView("about")}>
          About
        </button>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
