import { useState } from "react";

export default function ExperienceLayouts({
  gridType = 1,
  deviceType = "phone",
}: {
  gridType?: number;
  deviceType?: "phone" | "desktop";
}) {
  // Photo paths served from public/assets. Adjust names if you want different images.
  const [photos] = useState<string[]>([
    "/assets/image.png",
    "/assets/image.png",
    "/assets/image.png",
    "/assets/image.png",
    "/assets/image.png",
  ]);

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

  // pick layouts based on device type
  const chosen: Record<number, string[]> = layouts[deviceType] as Record<
    number,
    string[]
  >;

  // IN DESKTOP THE ROWS IS ONE BUT IN PHONE IT 10

  return (
    <div className="grid grid-cols-10 grid-rows-10 lg:grid-rows-1 md:max-h-100 lg:max-h-50 xl:max-h-55 w-full max-h-76 h-full gap-1">
      <img
        src={photos[0]}
        alt="Project photo"
        className={chosen[gridType][0]}
      />
      <img
        src={photos[1]}
        alt="Project photo"
        className={chosen[gridType][1]}
      />

      <img
        src={photos[2]}
        alt="Project photo"
        className={chosen[gridType][2]}
      />
      <img
        src={photos[3]}
        alt="Project photo"
        className={chosen[gridType][3]}
      />
    </div>
  );
}
