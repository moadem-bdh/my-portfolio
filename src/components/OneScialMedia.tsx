export default function OneSocialMedia({
  title,
  subTitle,
  image,
}: {
  title: string;
  subTitle: string;
  image: string;
}) {
  return (
    <div className="flex gap-4 w-max">
      <img
        src={image}
        className=" md:w-9 lg:w-max w-9 dark:invert-0 invert"
        alt="Icon"
      />
      <div>
        <p className=" text-bgDark dark:text-white font-ncs text-base md:text-[19px] lg:text-[22px]  ">
          {title}
        </p>
        <p className=" font-roboto text-greyPtLight dark:text-greyPt text-xs md:text-sm lg:text-base ">
          {subTitle}
        </p>
      </div>
    </div>
  );
}
