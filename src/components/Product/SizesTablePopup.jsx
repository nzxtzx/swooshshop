import React from "react";

const SizesTablePopup = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="product-sizes__table-overlay" onClick={onClose}>
          <div className="product-sizes__table-content" onClick={(e) => e.stopPropagation()}>
            <h2>Size chart</h2>
            <p>You will need to take measurements using a ruler or centimetre tape. You will need to match the length to the measurements in the chart to determine the correct size.</p>
            <p>Place your foot on a blank piece of paper. Mark the extreme boundaries of the foot and measure the distance between the furthest points of the foot.</p>
            <p>Rounding is done upwards. For example, if you have a result of 27.7 cm, then it should be rounded up to the length that is in the table - in this case to 28 cm.</p>
            <button onClick={onClose} className="product-sizes__table-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                <path d="M0.5 11L10.5 1M10.501 11L0.501007 1" stroke="#454A4C" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <table className="product-sizes__table">
              <h3>Size matching table</h3>
              <thead>
                <tr className="table-row__first">
                  <th className="row__first-first first-item">Leg length, cm</th>
                  <div className="row__first-list">
                    {[...Array(11)].map((_, index) => (
                      <th className="list-item" key={index}>{22.5 + index}</th>
                    ))}
                  </div>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row__second">
                  <td className="row__second-first first-item">EU</td>
                  <div className="row__second-list">
                    {[...Array(11)].map((_, index) => (
                      <td className="list-item" key={index}>{36 + index}</td>
                    ))}
                  </div>
                </tr>
              </tbody>
              <tbody>
                <tr className="table-row__third">
                  <td className="row__third-first first-item">RUS</td>
                  <div className="row__third-list">
                    {[...Array(11)].map((_, index) => (
                      <td className="list-item" key={index}>{35 + index}</td>
                    ))}
                  </div>
                </tr>
              </tbody>
              <tbody>
                <tr className="table-row__fourth">
                  <td className="row__fourth-first first-item">US</td>
                  <div className="row__fourth-list">
                    {[...Array(11)].map((_, index) => (
                      <td className="list-item" key={index}>{5.5 + index * 0.5}</td>
                    ))}
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default SizesTablePopup;
