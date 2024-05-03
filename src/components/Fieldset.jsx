import { useContext } from "react";
import { BiDollar } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { TipContext } from "../context/TipProvidor";
import Input from "./Input";
const Fieldset = ({ useFor }) => {
  const { bill, setBill, people, setPeople } = useContext(TipContext);
  return (
    <fieldset>
      <label htmlFor={useFor} className="font-bold text-dark-grayish-cyan">
        {useFor === "bill" ? "Bill" : "Number of People"}
      </label>
      <div className="flex ps-2 items-center mt-2 bg-very-light-grayish-cyan rounded">
        {useFor === "bill" ? <BiDollar /> : <BsFillPersonFill />}
        <div className="flex-grow">
          <Input
            id={useFor}
            className={"p-2 text-right text-very-dark-cyan"}
            setValue={useFor == "bill" ? setBill : setPeople}
            value={useFor === "bill" ? bill : people}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default Fieldset;
