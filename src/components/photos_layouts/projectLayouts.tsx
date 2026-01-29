import { useState } from "react";

export default function ProjectLayouts({
  gridType = 2,
}: {
  gridType?: number;
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
        "col-span-4 row-span-4 w-full h-full object-cover rounded-[20px]",
        "col-span-6 row-span-4 w-full h-full object-cover rounded-[20px]",
        "col-span-6 row-span-6 w-full h-full object-cover rounded-[20px]",
        "row-span-3 col-span-4 w-full h-full object-cover rounded-[20px]",
        "row-span-3 col-span-4 w-full h-full object-cover rounded-[20px]",
      ],
      2: [
        "col-span-6 row-span-6 w-full h-full object-cover rounded-[20px]",
        "col-span-4 row-span-6 w-full h-full object-cover rounded-[20px]",
        "col-span-4 row-span-4 w-full h-full object-cover rounded-[20px]",
        "row-span-4 col-span-6 w-full h-full object-cover rounded-[20px]",
      ],
    },

    phone: {
      1: [
        "col-span-6 row-span-5 w-full h-full object-cover rounded-[20px]",
        "col-span-4 row-span-5 w-full h-full object-cover rounded-[20px]",
        "col-span-4 row-span-5 w-full h-full object-cover rounded-[20px]",
        "row-span-5 col-span-6 w-full h-full object-cover rounded-[20px]",
      ],
      2: [
        "col-span-5 row-span-5 w-full h-full object-cover rounded-[20px]",
        "col-span-5 row-span-5 w-full h-full object-cover rounded-[20px]",
        "col-span-10 row-span-5 w-full h-full object-cover rounded-[20px]",
      ],
    },
  };

  // pick desktop layouts by default       add here | the condition
  const chosen: Record<number, string[]> = layouts.desktop as Record<
    //treat choden as that
    number,
    string[]
  >;

  // DESKTOP LAYOUTS WITH TWO  LAYOUTS 1 IS 5 PHOTOS AND THE SECOND IS WITH 4

  // PHONE LAYOUTS WITH TWO  LAYOUTS 1 IS 4 PHOTOS AND THE SECOND IS WITH 3

  //MAX-WIDTH IN PHONE IS 64   GAP IS 1

  // TO USE THAT COMPONENT I HAVE TO PASS AN ARRAY OF
  // PHOTOS AND THEN AND CHOOSE WICH LAYOUT KNOWING THAT I HAVE TO CHOOSE THE NUMBER
  // OF PHOTOS AS THE NUMBER OFF TH ELAYOUTS AND THAN CHOOSE WETHER IS PHONE OR
  // DESKTOP USING THE LIBRARY THAT WE KNOW

  return (
    // THERE WILL BE A MAP FUNCTION HERE AND NOT AND NO THESE SHITS

    <div className="grid grid-cols-10  grid-rows-10 w-full md:max-h-84 lg:max-h-full  max-h-66 h-full py-2 gap-1">
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
