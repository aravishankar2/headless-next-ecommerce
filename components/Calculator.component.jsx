import React, { useState, useEffect } from "react";
import { checkIfValsThere } from "../helper.ts";
export function Calculator({
  product,
  squareFootPerBox,
  squareFootPerPiece,
  setQty,
}) {
  let [sfNeeded, setSfNeeded] = useState(0);
  let [totalSF, setTotalSF] = useState(0);
  let [totalPCS, setTotalPCS] = useState(0);
  let [boxesNeeded, setBoxesNeeded] = useState(0);
  let [overage, setOverage] = useState(0.15);

  const handleChangeInput = (e) => {
    setSfNeeded(e.target.value);
    setTotalSF(
      parseFloat(
        parseInt(sfNeeded).toFixed(2) * parseFloat(overage) + parseInt(sfNeeded)
      )
    );
  };

  const handleChangeOverage = (e) => {
    switch (e.target.value) {
      case "15":
        setOverage(0.15);
        break;
      case "20":
        setOverage(0.2);
        break;
      case "25":
        setOverage(0.25);
        break;
      default:
        setOverage(0);
        break;
    }
  };

  useEffect(() => {
    // input value with factored in overage percentage = total sf
    setTotalSF(parseInt(sfNeeded) * parseFloat(overage) + parseInt(sfNeeded));
    // pieces per sf * total sf = total pieces
    setTotalPCS(parseFloat((1 / squareFootPerPiece) * totalSF));
    // total pieces / pieces per box = boxes needed
    //IMPORTANT: This relys on a field that is potentially not there. You may need to recalc using different values
    setBoxesNeeded(parseFloat(sfNeeded / product.squareFootPerBox).toFixed());
  }, [sfNeeded, totalSF, totalPCS, overage]);

  return (
    <div className="container-fluid d-flex flex-column align-items-between justify-content-between border">
      <div className="h-50 row d-flex align-items-between justify-content-between">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-8 mt-2 d-flex align-items-start flex-column justify-content-center">
              <label>enter sf needed</label>

              <input
                min="0"
                onChange={handleChangeInput}
                placeholder={`${squareFootPerBox} sf minimum required`}
                value={sfNeeded}
                type="number"
                className="form-control"
              ></input>
            </div>
            <div className="col-4 mt-2 d-flex align-items-end flex-column justify-content-center">
              <div>
                <label>overage</label>
                <select onChange={handleChangeOverage} className="form-control">
                  <option value="15">+15%</option>
                  <option value="20">+20%</option>
                  <option value="25">+25%</option>
                  <option>no overage</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row  h-50 d-flex flex-column align-items-between justify-content-between">
        {/* Three Columns: totalSF, totalPCS, boxesNeeded */}
        <div className="h-100">
          <div className="container h-100">
            <div className="row h-100 mt-4">
              <div className="col-4 d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <h3>{checkIfValsThere(parseFloat(totalSF).toFixed())}</h3>
                  <span className="text-muted">total sf</span>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <h3>{checkIfValsThere(parseFloat(totalPCS).toFixed())}</h3>
                  <span className="text-muted">total pcs</span>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <h3>{checkIfValsThere(parseFloat(boxesNeeded).toFixed())}</h3>
                  <span className="text-muted">boxes needed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="p-0 d-flex justify-content-center">
        <button
          disabled={
            (product.soldByThe === "box" && boxesNeeded == 0) ||
            boxesNeeded === "NaN"
              ? true
              : (product.soldByThe === "pc" && totalPCS == 0) ||
                totalPCS === "NaN"
              ? true
              : (product.soldByThe === "sf" && totalSF == 0) ||
                totalSF === "NaN"
              ? true
              : false
          }
          onClick={
            product.soldByThe === "box"
              ? () => setQty(Math.round(boxesNeeded))
              : product.soldByThe === "pc"
              ? () => setQty(Math.round(totalPCS))
              : () => setQty(Math.round(totalSF))
          }
          className="btn btn-primary mb-4"
        >
          Update Quantity
        </button>
      </div>
    </div>
  );
}
