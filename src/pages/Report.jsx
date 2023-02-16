import React from "react";

const Report = () => {
  return (
    <div className="Report">
      <h2>Ventas por mesas</h2>
      <div className="Report__content">
        <div className="Report__item">
          <p>Mesa 1</p>
          <p>$800</p>
        </div>
      </div>
      <div className="Report__total">
        <h3>Total Ventas</h3>
        <h3>$ 800</h3>
      </div>
    </div>
  );
};

export default Report;
