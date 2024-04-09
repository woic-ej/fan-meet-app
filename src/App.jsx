import logo from "./assets/weverse-logo.png";
import poster from "./assets/Lesserafim-fanmeeting img.jpg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <img src={logo} alt="" id="logo"></img>
      </header>
      <main className="main-container">
        <div className="poster-section">
          <img
            src={poster}
            alt=""
            id="poster"
            style={{ width: "455px", height: "684px" }}
          ></img>
        </div>
        <div className="apply-section">
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
          <form method="POST">
            <label htmlFor="second-name">이름</label>
            <input type="text" id="second-name" name="second-name"></input>
            <label htmlFor="first-name">성</label>
            <input type="text" id="first-name" name="first-name"></input>
            <label htmlFor="membership">멤버쉽 번호</label>
            <input type="text" id="membership" name="membership"></input>
            <label htmlFor="email">이메일</label>
            <input type="text" id="email" name="email"></input>
            <label htmlFor="wantedDate">응모 날짜</label>
            <select id="wantedDate" name="wantedDate">
              <option value="sat"> 2024.5.11 SAT 6PM </option>
              <option value="sun"> 2024 5.12 SUN 5PM </option>
            </select>
            <button type="submit" className="applyBtn">
              응모 하기
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
