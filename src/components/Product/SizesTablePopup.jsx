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
            <h2>Size matching chart</h2>
            <table className="product-sizes__table">
              <tbody>
                <tr className="table-row">
                  <td className="table-row__item first-item">Leg length, cm</td>
                  <td className="table-row__item">22,5</td>
                  <td  className="table-row__item">23,5</td>
                  <td  className="table-row__item">24,5</td>
                  <td  className="table-row__item">25</td>
                  <td  className="table-row__item">25,5</td>
                  <td  className="table-row__item">26</td>
                  <td  className="table-row__item">26,5</td>
                  <td  className="table-row__item">27,5</td>
                  <td  className="table-row__item">28</td>
                  <td  className="table-row__item">29</td>
                  <td  className="table-row__item">29,5</td>
                </tr>
                <tr className="table-row">
                  <td className="table-row__item first-item">EU</td>
                  <td className="table-row__item">36</td>
                  <td  className="table-row__item">37</td>
                  <td  className="table-row__item">38</td>
                  <td  className="table-row__item">39</td>
                  <td  className="table-row__item">40</td>
                  <td  className="table-row__item">41</td>
                  <td  className="table-row__item">42</td>
                  <td  className="table-row__item">43</td>
                  <td  className="table-row__item">44</td>
                  <td  className="table-row__item">45</td>
                  <td  className="table-row__item">46</td>
                </tr>
                <tr className="table-row">
                  <td className="table-row__item first-item">RUS</td>
                  <td className="table-row__item">35</td>
                  <td  className="table-row__item">36</td>
                  <td  className="table-row__item">37</td>
                  <td  className="table-row__item">38</td>
                  <td  className="table-row__item">39</td>
                  <td  className="table-row__item">40</td>
                  <td  className="table-row__item">41</td>
                  <td  className="table-row__item">42</td>
                  <td  className="table-row__item">43</td>
                  <td  className="table-row__item">44</td>
                  <td  className="table-row__item">45</td>
                </tr>
                <tr className="table-row">
                  <td className="table-row__item first-item">US</td>
                  <td className="table-row__item">5,5</td>
                  <td  className="table-row__item">6</td>
                  <td  className="table-row__item">6,5</td>
                  <td  className="table-row__item">7,5</td>
                  <td  className="table-row__item">8</td>
                  <td  className="table-row__item">8,5</td>
                  <td  className="table-row__item">9</td>
                  <td  className="table-row__item">10</td>
                  <td  className="table-row__item">10,5</td>
                  <td  className="table-row__item">11,5</td>
                  <td  className="table-row__item">12</td>
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
