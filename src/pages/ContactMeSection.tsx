import ContactForm from "../components/ContactForm";
import SocialMedia from "../components/SocialMedia";

export default function ConatctMeSection() {
  return (
    <section id="ContactSection" className=" flex flex-col  items-center bg-bgDark py-18 gap-16 md:gap-20 px-4 md:px-20 ">
      <span className="w-full flex justify-center items-center ">
        <h1 className=" font-ncs text-white text-[48px] md:text-start text-center md:text-[90px] ">
          Let's work together
        </h1>
      </span>
      <div className=" w-full md:flex-row flex-col flex gap-18 justify-between items-center ">
        <SocialMedia />
        <ContactForm />
      </div>
    </section>
  );
}
