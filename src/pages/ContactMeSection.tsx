import ContactForm from "../components/ContactForm";
import ScrollFloat from "../components/scrollFloat";
import SocialMedia from "../components/SocialMedia";

export default function ConatctMeSection() {
  return (
    <section
      id="ContactMe"
      className=" flex flex-col  items-center bg-bgLight dark:bg-bgDark py-18 gap-16 md:gap-20 px-4 md:px-20 "
    >
      <span className="w-full flex justify-center items-center ">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=55%"
          stagger={0.03}
          textClassName="font-ncs text-[48px] md:text-[90px] text-bgDark dark:text-white"
        >
          Let's work together
        </ScrollFloat>
      </span>
      <div className=" w-full md:flex-row flex-col flex gap-18 justify-between items-center ">
        <SocialMedia />
        <ContactForm />
      </div>
    </section>
  );
}
