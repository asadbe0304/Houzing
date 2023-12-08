import "./index.scss";
const Button = ({ text }) => {
  
  return (
    <>
      <button type="button" className="btn hover:opacity-80 hover:scale-95 transition-all delay-200">
        {text}
      </button>
    </>
  );
};

export default Button;
