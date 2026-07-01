import "./MobileContainer.css";

const MobileContainer = ({ children }) => {
  return (
    <div className="mobile-container">
      <div className="mobile-screen">
        {children}
      </div>
    </div>
  );
};

export default MobileContainer;