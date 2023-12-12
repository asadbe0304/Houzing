import "./index.scss";
const Button = ({ text, color, border, bg, Img }) => {
  return (
    <>
      <button
        type="button"
        className="btn flex item-center gap-2 hover:opacity-80 hover:scale-95 transition-all delay-200"
        style={{ color: color, borderColor: border ,background:bg}}
      >
        <img src={Img} alt={text} />
        {text}
      </button>
    </>
  );
};

export default Button;
