import { useContext } from "react";
import { TipContext } from "../context/TipProvidor";
import { BiDollar } from "react-icons/bi";

const Result = ({ useFor }) => {
  const { total, tipAmount } = useContext(TipContext);
  return (
    <div className="flex justify-between items-center flex-wrap">
      <div>
        <h3 className="text-white font-bold">
          {useFor === "total" ? "Total" : "Tip Amount"}
        </h3>
        <h4 className="text-very-light-grayish-cyan text-sm mt-1">/ Person</h4>
      </div>
      <h2 className="flex items-center text-3xl text-strong-cyan">
        <BiDollar />
        {useFor === "total" ? (
          total ? (
            <span className="text-2xl">{total.toFixed(2)}</span>
          ) : (
            <span className="text-2xl opacity-50">0.00</span>
          )
        ) : tipAmount ? (
          <span className="text-2xl">{tipAmount.toFixed(2)}</span>
        ) : (
          <span className="text-2xl opacity-50">0.00</span>
        )}
      </h2>
    </div>
  );
};

export default Result;
