import { useContext } from "react";
import TipBtn from "./TipBtn";
import { TipContext } from "../context/TipProvidor";
import Input from "./Input";

const tips = [5, 10, 15, 25, 50];

const TipsContainer = () => {
  const { setTip } = useContext(TipContext);
  return (
    <div className="my-8">
      <h3 className="font-bold text-dark-grayish-cyan">Select Tip %</h3>
      <div className="mt-4 flex flex-wrap justify-between gap-y-5 ">
        {tips.map((el) => {
          return <TipBtn key={el} value={el} />;
        })}

        <div className="w-[30%] rounded bg-very-light-grayish-cyan">
          <Input
            className="text-center"
            placeholder="Coustom"
            setValue={setTip}
          />
        </div>
      </div>
    </div>
  );
};

export default TipsContainer;
