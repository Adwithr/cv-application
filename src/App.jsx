import Navbar from "./components/Navbar/Navbar";
import GenInfo from "./components/GenInfo/GenInfo";
import EduExp from "./components/EduExp/EduExp";
import PractInfo from "./components/PractExp/PractExp";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <GenInfo />
      <EduExp />
      <PractInfo />
    </div>
  );
}

export default App;
