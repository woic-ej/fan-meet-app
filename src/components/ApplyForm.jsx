import { useState } from "react";
import "../styles/ApplyForm.css";

const ApplyForm = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});

  const handleInputChange = (event) => {
    event.preventDefault();
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setUser({
      ...user,
      [inputName]: inputValue,
    });
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
          <p>장소: 잠실 실내 체육관</p>
        </div>
      </div>
      <hr></hr>
      <div className="apply-form">
        <form method="POST" onChange={handleInputChange}>
          <div>
            <label htmlFor="second-name">이름</label>
            <input
              type="text"
              id="second-name"
              name="second-name"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="first-name">성</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="membership">멤버쉽 번호</label>
            <input
              type="text"
              id="membership"
              name="membership"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="email">이메일</label>
            <input type="text" id="email" name="email" required></input>
          </div>
          <div>
            <label htmlFor="wantedDate">응모 날짜</label>
            <select id="wantedDate" name="wantedDate" required>
              <option value="sat"> 2024.5.11 SAT 6PM </option>
              <option value="sun"> 2024 5.12 SUN 5PM </option>
            </select>
          </div>

          <button type="submit" className="applyBtn">
            응모 하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
