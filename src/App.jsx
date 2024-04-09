import "./App.css";
import ApplyForm from "./components/ApplyForm";
import Poster from "./components/Poster";
import Header from "./components/header";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-container">
        <Poster />
        <ApplyForm />
      </div>
    </div>
  );
}

export default App;
