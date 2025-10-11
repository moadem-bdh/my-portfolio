export default function ContactForm() {
  return (
    <div className=" flex md:flex-row flex-col  gap-4 items-center md:w-max md:max-w-max w-full max-w-110">
      <h1 className="font-ncs text-[#076C69] text-[32px] md:text-5xl md:[writing-mode:vertical-lr] rotate-0 md:rotate-180 ">
        Send a message
      </h1>

      <form className=" md:w-[780px] w-full bg-[#1B1B1B] md:gap-6 gap-8 flex flex-col py-[28px] md:py-[32px]  px-[24px] md:px-[42px] rounded-[20px] ">
        <div className=" flex flex-col w-full gap-2">
          <label
            htmlFor="Full_name"
            className=" font-roboto text-white text-xl "
          >
            Full name{" "}
            <span className="font-roboto text-xl text-[#5F1313] ">*</span>
          </label>
          <input
            id="Full_name"
            placeholder="Enter your full name"
            className=" focus:outline-0 font-roboto py-2 px-0 text-white text-xl border-b-1 border-white "
            type="text"
          />
        </div>

        <div className="  flex w-full md:flex-row flex-col gap-6 md:gap-0 justify-between  ">
          <div className=" flex flex-col  w-full md:w-48/100 gap-2">
            <label
              htmlFor="Email"
              className=" font-roboto text-white text-xl  "
            >
              Email
              <span className="font-roboto text-xl text-[#5F1313] ">*</span>
            </label>
            <input
              id="Email"
              placeholder="contact@gmail.com"
              className=" focus:outline-0 font-roboto py-2 px-0 text-white text-xl  border-b-1 border-white  "
              type="text"
            />
          </div>

          <div className=" flex flex-col  w-full md:w-48/100  gap-2">
            <label
              htmlFor="Phone_number"
              className=" font-roboto text-white text-xl "
            >
              Phone number{" "}
              <span className="font-roboto text-xl text-[#5F1313] ">*</span>
            </label>
            <input
              id="Phone_number"
              placeholder="0555555555"
              className=" focus:outline-0 font-roboto py-2 px-0 text-white text-xl border-b-1 border-white  "
              type="text"
            />
          </div>
        </div>

        <div className=" flex flex-col w-full gap-1">
          <label htmlFor="Subject" className=" font-roboto text-white text-xl ">
            Subject{" "}
            <span className="font-roboto text-xl text-[#5F1313] ">*</span>
          </label>
          <input
            id="Subject"
            placeholder="Enter the subject"
            className=" focus:outline-0 font-roboto py-2 px-0 text-white text-xl border-b-1 border-white  "
            type="text"
          />
        </div>

        <div className=" flex flex-col w-full gap-1">
          <label
            htmlFor="Your_message"
            className=" font-roboto text-white text-xl "
          >
            Your message{" "}
            <span className="font-roboto text-xl text-[#5F1313] ">*</span>
          </label>
          <textarea
            name=""
            placeholder="Write your message"
            className=" scrollbar-thumb-greyPt scrollbar-track-transparent  scrollbar-thin min-h-18 resize-none md:min-h-32 focus:outline-0 font-roboto py-2 px-0 text-white text-xl border-b-1 border-white  "
            id="Your_message"
          ></textarea>
        </div>

        <div className="mt-6 md:flex-row flex-col gap-5 flex w-full items-center justify-between ">
          <p className=" font-ncs text-[34px] md:text-[46px] text-white  ">
            Let's connect
          </p>
          <button
            type="button"
            className="  font-ncs text-[18px] md:text-2xl text-bgDark cursor-pointer hover:bg-[#ffffffe1] md:p-4  p-3  md:pb-3  border-0 focus:outline-0 bg-white rounded-[20px] "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
