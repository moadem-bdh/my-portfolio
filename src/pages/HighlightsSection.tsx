import { useMediaQuery } from "react-responsive";
import Highlight from "../components/Highlight";
import HighlightPhone from "../components/HighlightPhone";
import { motion } from "framer-motion";

export default function HighlightSection() {
  // Tailwind v4 breakpoints: sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
  const desktop = useMediaQuery({ query: "(min-width: 768px)" });

  const highlights: {
    number: string;
    title: string;
    description: string;
  }[] = [
    {
      number: "80%",
      title: "Clients satisfied worldwide",
      description:
        "We deliver consistent quality that builds long-term trust, ensuring clients return for reliable solutions.",
    },
    {
      number: "+60",
      title: "graphical charts created",
      description:
        "More than sixty charts created to simplify complex data, making analysis clear, fast, and effective for teams.",
    },
    {
      number: "200~",
      title: "Posts made for audiences",
      description:
        "Over two hundred posts published to share insights and ideas, crafted to engage readers across platforms.",
    },
  ];

  return (
    <section className="overflow-hidden  w-full bg-bgLight  dark:bg-bgDark flex flex-col gap-4 md:gap-10 lg:gap-14 pt-4 md:pt-10 lg:pt-14 pb-4 md:pb-8 lg:pb-10 items-start px-4 md:px-10 lg:px-20  ">
      <motion.p
        initial={{
          x: -150,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        viewport={{ once: false, margin: "400px 0px -150px 0px" }}
        className=" font-ncs text-bgDark dark:text-white text-3xl md:text-5xl lg:text-6xl"
      >
        Highlights
      </motion.p>

      <motion.div
        initial={{
          opacity: 0,
          translateY: "50px",
        }}
        whileInView={{
          translateY: "0px",
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: false, margin: "400px 0px -100px 0px" }}
        style={{ transformOrigin: "50% 200px" }}
        className=" flex md:flex-row flex-col w-full  pt-5 pb-0.5 justify-between gap-3  md:gap-6 lg:gap-8 xl:gap-10 "
      >
        {highlights.map((h) =>
          desktop ? (
            <Highlight
              key={h.number}
              number={h.number}
              title={h.title}
              description={h.description}
            />
          ) : (
            <HighlightPhone
              key={h.number}
              number={h.number}
              title={h.title}
              description={h.description}
            />
          ),
        )}
      </motion.div>
    </section>
  );
}
