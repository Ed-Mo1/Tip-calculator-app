import { useContext } from "react";
import { TipContext } from "../context/TipProvidor";

const TipBtn = ({ value }) => {
  const { tip, setTip } = useContext(TipContext);
  return (
    <button
      onClick={() => setTip(value)}
      className={`w-[30%] py-3 rounded ${
        tip == value ? "bg-strong-cyan" : "bg-very-dark-cyan"
      } text-white hover:bg-light-grayish-cyan `}
    >
      {value}%
    </button>
  );
};

export default TipBtn;
