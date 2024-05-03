import { useContext } from "react";
import { TipContext } from "../context/TipProvidor";
const ResetBtn = () => {
  const { reset } = useContext(TipContext);
  return (
    <button
      onClick={reset}
      className="w-full py-3 text-center bg-strong-cyan rounded text-very-light-grayish-cyan"
    >
      Reset
    </button>
  );
};

export default ResetBtn;
