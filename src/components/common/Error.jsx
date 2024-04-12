import "../../styles/common/Error.css";
const Error = ({ error }) => {
  return (
    <div className="error-container">
      {error && <p> ( Error Message: {error.message} )</p>}
    </div>
  );
};

export default Error;
