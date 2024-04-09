import { useState } from "react";
import "../styles/ApplyForm.css";

const ApplyForm = () => {
  const [Error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    secondName: "",
    firstName: "",
    membership: "",
    email: "",
    wantedDate: "sat",
  });

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

  const handleEmailBlur = () => {
    isValidEmail();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValidEmail()) return;

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3001/user", {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify(user),
      });
      if (!response.ok) throw new Error("에러가 발생하였습니다.");
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="secondName">이름</label>
            <input
              type="text"
              id="secondName"
              name="secondName"
              required
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label htmlFor="firstName">성</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label htmlFor="membership">멤버쉽 번호</label>
            <input
              type="text"
              id="membership"
              name="membership"
              required
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              id="email"
              name="email"
              required
              onChange={handleInputChange}
              onBlur={handleEmailBlur}
            ></input>
          </div>
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

          <button type="submit" className="applyBtn">
            응모 하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
