import { useState } from "react";
import "./App.css";
import ApplyFormSection from "./components/ApplyFormSection";
import Poster from "./components/Poster";
import Header from "./components/common/header";
import CompleteInfoSection from "./components/CompleteInfoSection";

function App() {
  const stepInitial = {
    apply: 0,
    complete: 1,
  };
  const [step, setStep] = useState(stepInitial.apply);
  const userInitial = {
    secondName: "",
    firstName: "",
    membership: "",
    email: "",
    wantedDate: "sat",
  };
  const [user, setUser] = useState(userInitial);
  return (
    <div className="container">
      <Header />
      <div className="main-container">
        <Poster />
        {step === stepInitial.apply && (
          <ApplyFormSection user={user} setUser={setUser} setStep={setStep} />
        )}
        {step === stepInitial.complete && <CompleteInfoSection user={user} />}
      </div>
    </div>
  );
}

export default App;
