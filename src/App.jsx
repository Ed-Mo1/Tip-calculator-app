import Fieldset from "./components/Fieldset";
import TipsContainter from "./components/TipsContainer";
import Result from "./components/Result";
import ResetBtn from "./components/ResetBtn";
const App = () => {
  return (
    <div className="min-h-screen p-5 flex justify-center items-center bg-light-grayish-cyan">
      <div className="w-full max-w-[1000px] ">
        <h1 className="uppercase text-center mb-5 font-bold text-4xl">
          spli
          <br />
          tter
        </h1>
        <div className="w-full bg-white  max-md:flex-wrap shadow-lg rounded-lg px-4 py-6 flex gap-5">
          <div className="basis-1/2 max-md:basis-full">
            <Fieldset useFor="bill" />
            <TipsContainter />
            <Fieldset useFor="people" />
          </div>
          <div className="basis-1/2 max-md:basis-full bg-very-dark-cyan flex flex-col justify-between rounded py-5 px-10">
            <div className="flex flex-col gap-12">
              <Result useFor="total" />
              <Result useFor="tip amount" />
            </div>
            <div className="mt-8">
              <ResetBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
