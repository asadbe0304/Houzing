const Input = ({ placeholder, type }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="input border p-3 w-full rounded-sm"
      />
    </>
  );
};

export default Input;
