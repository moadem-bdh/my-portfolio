

export default function ExperienceLayouts({
  gridType = 1,
  deviceType = "phone",
  images = [],
}: {
  gridType?: number;
  deviceType?: "phone" | "desktop";
  images?: string[];
}) {


  const layouts = {
    desktop: {
      1: [
        "col-span-2 row-span-1 w-full h-full object-cover rounded-[20px]",
        "col-span-3 row-span-1 w-full h-full object-cover rounded-[20px]",
        "col-span-2 row-span-1 w-full h-full object-cover rounded-[20px]",
        "col-span-3 row-span-1 w-full h-full object-cover rounded-[20px]",
      ],
      2: [
        "col-span-3 row-span-1 w-full h-full object-cover rounded-[20px]",
        "col-span-2 row-span-1 w-full h-full object-cover rounded-[20px]",
        "col-span-3 row-span-1 w-full h-full object-cover rounded-[20px]",
        "col-span-2 row-span-1 w-full h-full object-cover rounded-[20px]",
      ],
    },
    phone: {
      1: [
        "col-span-4 row-span-5 w-full h-full object-cover rounded-[20px]",
        "col-span-6 row-span-5 w-full h-full object-cover rounded-[20px]",
        "col-span-6 row-span-5 w-full h-full object-cover rounded-[20px]",
        "row-span-5 col-span-4 w-full h-full object-cover rounded-[20px]",
      ],
      2: [
        "col-span-5 row-span-5 w-full h-full object-cover rounded-[20px]",
        "col-span-5 row-span-5 w-full h-full object-cover rounded-[20px]",
        "col-span-10 row-span-5 w-full h-full object-cover rounded-[20px]",
      ],
    },
  };

  // pick layouts - always use desktop layouts so it displays side-by-side in a single row
    const chosen: Record<number, string[]> = layouts[deviceType] as Record<
    number,
    string[]
  >;

  // IN DESKTOP THE ROWS IS ONE BUT IN PHONE IT 10

  return (
    <div className="grid grid-cols-10 grid-rows-1 w-full min-h-[140px] sm:min-h-[180px] md:min-h-[220px] lg:h-[260px] xl:h-[300px] gap-1.5 md:gap-2">




      {
        images
          .slice(0, chosen[gridType]?.length ?? 0)
          .map((im, index) => (
            <img
              key={index}
              src={im}
              alt="Project photo"
              className={chosen[gridType][index]}
            />
          ))
      }


    </div>
  );
}
