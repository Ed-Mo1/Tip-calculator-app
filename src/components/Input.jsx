
const Input = ({ id, className, value, setValue, placeholder }) => {
  return (
    <input
      id={id && id}
      placeholder={placeholder && placeholder}
      min={0}
      type="number"
      value={value && value}
      onChange={(e) => setValue(() => Number(e.target.value))}
      className={`w-full py-3  rounded bg-inherit ${className}`}
    />
  );
};

export default Input;
