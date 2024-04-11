import { useState } from "react";
import "../styles/ApplyForm.css";

const UserInputItem = ({ label, name, handleInputChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        required
        onChange={handleInputChange}
      ></input>
    </div>
  );
};

const ApplyForm = ({ user, setUser, setStep }) => {
  const [Error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    event.preventDefault();
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setUser({
      ...user,
      [inputName]: inputValue,
    });
  };

  const isValidEmail = () => {
    const email = user.email;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      alert("올바른 이메일 주소를 입력하십시오");
      return false;
    }
    return true;
  };

  const addBtnClassName = () => {
    document.getElementById("applyBtn").className += " clicked";
  };

  const postUserData = async () => {
    try {
      const response = await fetch("http://localhost:3001/user", {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify(user),
      });
      if (!response.ok) throw new Error("에러가 발생하였습니다.");
      setStep(1);
    } catch (error) {
      setError(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidEmail()) return;

    addBtnClassName();
    setTimeout(postUserData, 3000);
  };

  return (
    <div className="form-container">
      <div className="info-text">
        <div className="title">
          <h1>LESSERAFIM FAN MEETING</h1>
          <h4>2024 S/S - SEOUL</h4>
        </div>
        <div className="place">
          <p>일시: 2024.5.11 SAT 6PM / 2024 5.12 SUN 5PM</p>
          <a
            href="https://www.google.com/maps/place/%EC%9E%A0%EC%8B%A4%EC%8B%A4%EB%82%B4%EC%B2%B4%EC%9C%A1%EA%B4%80/data=!4m6!3m5!1s0x357ca451397f664d:0x82edb56cd4a74e2d!8m2!3d37.5162016!4d127.0759248!16zL20vMGJyNzYz?entry=ttu"
            target="_blank"
          >
            <p>장소: 잠실 실내 체육관 (위치 보기)</p>
          </a>
        </div>
      </div>
      <hr></hr>
      <div className="apply-form">
        <form onSubmit={handleSubmit}>
          <UserInputItem
            label="이름"
            name="secondName"
            handleInputChange={handleInputChange}
          />
          <UserInputItem
            label="성"
            name="firstName"
            handleInputChange={handleInputChange}
          />
          <UserInputItem
            label="멤버쉽 번호"
            name="membership"
            handleInputChange={handleInputChange}
          />
          <UserInputItem
            label="이메일"
            name="email"
            handleInputChange={handleInputChange}
          />
          <div>
            <label htmlFor="wantedDate">응모 날짜</label>
            <select
              id="wantedDate"
              name="wantedDate"
              required
              onChange={handleInputChange}
            >
              <option value="sat">2024.5.11 SAT 6PM</option>
              <option value="sun"> 2024 5.12 SUN 5PM </option>
            </select>
          </div>

          <button type="submit" className="applyBtn" id="applyBtn">
            응모 하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
