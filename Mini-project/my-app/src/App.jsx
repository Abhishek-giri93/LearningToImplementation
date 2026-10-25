import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function ThemeContent() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />

      <main className="main-content">
        <h1>Theme Manager</h1>
        <p className="subtitle">
          One click. A completely different experience.
        </p>
        <ProfileCard />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeContent />
    </ThemeProvider>
  );
}

export default App;