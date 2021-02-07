import "./error-indicator.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but already send drons to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
