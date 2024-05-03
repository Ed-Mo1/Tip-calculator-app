import { createContext, useEffect, useState } from "react";

export const TipContext = createContext();
const TipProvidor = ({ children }) => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (bill > 0 && people > 0 && tip > 0) {
      setTipAmount((bill * (tip / 100)) / people);
      setTotal((bill + bill * (tip / 100)) / people);
    }
  }, [bill, people, tip]);
  const reset = () => {
    setBill(0);
    setPeople(0);
    setTip(0);
    setTipAmount(0);
    setTotal(0);
  };
  return (
    <TipContext.Provider
      value={{
        reset,
        tipAmount,
        total,
        bill,
        setBill,
        people,
        setPeople,
        tip,
        setTip,
      }}
    >
      {children}
    </TipContext.Provider>
  );
};

export default TipProvidor;
