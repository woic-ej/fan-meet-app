import { useState } from "react";
import "./App.css";
import ApplyForm from "./components/ApplyForm";
import Poster from "./components/Poster";
import Header from "./components/header";
import CompletePage from "./components/CompletePage";

function App() {
  const [step, setStep] = useState(0);
  const [user, setUser] = useState({
    secondName: "",
    firstName: "",
    membership: "",
    email: "",
    wantedDate: "sat",
  });
  return (
    <div className="container">
      <Header />
      <div className="main-container">
        <Poster />
        {step === 0 && (
          <ApplyForm user={user} setUser={setUser} setStep={setStep} />
        )}
        {step === 1 && <CompletePage user={user} />}
      </div>
    </div>
  );
}

export default App;
