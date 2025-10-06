import ButtunArrow from "../assets/photos/ButtunArrow.svg";

interface ButtonArrowProps {
  divStyle?: string;
  Arrowtyle?: string;
  onClick?: () => void;
}

export default function ButtonArrow({
  divStyle,
  Arrowtyle,
  onClick,
}: ButtonArrowProps) {
  return (
    <div
      className={`${divStyle} cursor-pointer rounded-[100px] h-max w-max group border-white transition-all ease-in-out duration-300 hover:bg-white hover:boeder-0`}
      onClick={onClick}
    >
      <img
        src={ButtunArrow}
        className={`${Arrowtyle} group-hover:invert transition-all ease-in-out duration-300`}
        alt="Arrow Icon"
      />
    </div>
  );
}
