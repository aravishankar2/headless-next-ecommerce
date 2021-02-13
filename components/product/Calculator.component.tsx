import React, { useState, useEffect } from "react";
import { checkIfValsThere } from "../../helper";
import { Product } from "../../interfaces/Product";

interface CalcProps {
  product: Product;
  squareFootPerBox: number;
  squareFootPerPiece: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
}

export function Calculator({
  product,
  squareFootPerBox,
  squareFootPerPiece,
  setQty,
}: CalcProps) {
  let [sfNeeded, setSfNeeded] = useState<number>(0);
  let [totalSF, setTotalSF] = useState<number>(0);
  let [totalPCS, setTotalPCS] = useState<number>(0);
  let [boxesNeeded, setBoxesNeeded] = useState<number>(0);
  let [overage, setOverage] = useState<number>(0.15);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    setSfNeeded(value);
    setTotalSF(sfNeeded * overage + sfNeeded);
  };

  const handleChangeOverage = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
    setTotalSF(sfNeeded * overage + sfNeeded);
    // pieces per sf * total sf = total pieces
    setTotalPCS((1 / squareFootPerPiece) * totalSF);
    // total pieces / pieces per box = boxes needed
    //IMPORTANT: This relys on a field that is potentially not there. You may need to recalc using different values
    setBoxesNeeded(sfNeeded / product.squareFootPerBox);
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
                  <h3>{checkIfValsThere(totalSF.toFixed())}</h3>
                  <span className="text-muted">total sf</span>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <h3>{checkIfValsThere(totalPCS.toFixed())}</h3>
                  <span className="text-muted">total pcs</span>
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <h3>{checkIfValsThere(boxesNeeded.toFixed())}</h3>
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
            product.soldByThe === "box" && boxesNeeded == 0
              ? true
              : product.soldByThe === "pc" && totalPCS == 0
              ? true
              : product.soldByThe === "sf" && totalSF == 0
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
