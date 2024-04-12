import "../styles/CompleteInfoSection.css";

const UserDataItem = ({ label, value }) => {
  if (label === "응모 날짜" && value === "sat") value = "2024.5.11 SAT 6PM";
  else if (label === "응모 날짜" && value === "sun")
    value = "2024 5.12 SUN 5PM";

  return (
    <div className="userData-title">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
};

const CompletePage = ({ user }) => {
  return (
    <div className="complete-div">
      <h1>응모가 완료되었습니다.</h1>
      <div className="complete-container">
        <h4>신청 정보</h4>
        <hr></hr>
        <div className="userData-table">
          <UserDataItem label="이름" value={user.secondName} />
          <UserDataItem label="성" value={user.firstName} />
          <UserDataItem label="멤버쉽 번호" value={user.membership} />
          <UserDataItem label="이메일" value={user.email} />
          <UserDataItem label="응모 날짜" value={user.wantedDate} />
        </div>
      </div>
    </div>
  );
};

export default CompletePage;
