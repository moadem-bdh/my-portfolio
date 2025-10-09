export default function HighlightPhone({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex h-[90px] gap-2 flex-row w-full items-center cursor-pointer hover:scale-108 group transition-all duration-400 ease-in-out ">
      <div className=" w-39 flex shrink-0  ">
        <h1 className="  font-ncs  text-[52px] text-bgDark  [-webkit-text-stroke:2px_white] transition-all ease-in-out duration-400  group-hover:[-webkit-text-stroke:0px_white] group-hover:text-white  ">
          {number}
        </h1>
      </div>

      <div className="h-full w-1 bg-greenPt "></div>

      <div className="flex flex-col gap-1  ">
        <p className=" font-ncs text-xs text-white  ">{title}</p>
        <p className="font-roboto text-[10px] text-greyPt transition-all duration-400 ease-in-out">
          {description}
        </p>
      </div>
    </div>
  );
}
