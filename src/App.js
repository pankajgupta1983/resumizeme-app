import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./pages/sidebar";
import PersonalInfo from "./pages/information-page";

function App() {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <PersonalInfo />
    </div>
  );
}

export default App;
