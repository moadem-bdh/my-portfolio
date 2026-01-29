import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "../costumHooks/useForm";
import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";
import submittedIcon from "../../public/assets/submited.svg";

export default function ContactForm() {
  const { formValues, changeFormValues ,resetForm} = useForm({
    Full_name: "",
    Email: "",
    Phone_number: "",
    Subject: "",
    Your_message: "",
  });

  const validateForm = (data: Record<string, string | number | boolean>) => {
    const newErrors = {
      Full_name: "",
      Email: "",
      Phone_number: "",
      Subject: "",
      Your_message: "",
    };

    let isValid = true;

    // Check Full_name
    if (!data.Full_name) {
      newErrors.Full_name = "Full name is required";
      isValid = false;
    } else {
      newErrors.Full_name = "";
    }

    // Check Email
    if (!data.Email) {
      newErrors.Email = "Email is required";
      isValid = false;
    } else if (!String(data.Email).includes("@")) {
      newErrors.Email = "Please enter a valid email address";
      isValid = false;
    } else {
      newErrors.Email = "";
    }

    // Check Phone_number
    if (!data.Phone_number) {
      newErrors.Phone_number = "Phone number is required";
      isValid = false;
    } else {
      newErrors.Phone_number = "";
    }

    // Check Subject
    if (!data.Subject) {
      newErrors.Subject = "Subject is required";
      isValid = false;
    } else {
      newErrors.Subject = "";
    }

    // Check Your_message
    if (!data.Your_message) {
      newErrors.Your_message = "Message is required";
      isValid = false;
    } else {
      newErrors.Your_message = "";
    }

    return { isValid, errors: newErrors };
  };

  const [errors, setErrors] = useState({
    Full_name: "",
    Email: "",
    Phone_number: "",
    Subject: "",
    Your_message: "",
  });

  const [isSubmittedFirst, setIsSubmittedFirst] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    // Update form values
    changeFormValues(e);

    // Build updated data immediately with the new value from the event
    const updatedData = {
      ...formValues,
      [e.target.name]: e.target.value.trim(),
    };

    // Validate and set errors
    const validation = validateForm(updatedData);
    setErrors(validation.errors);
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittedFirst(true);

    const sanitizedData = Object.fromEntries(
      Object.entries(formValues).map(([field, value]) => [
        field,
        typeof value === "string" ? value.trim() : value,
      ]),
    );
    const validation = validateForm(sanitizedData);
    setSubmitCount((prev) => prev + 1);
    setErrors(validation.errors);
    if (!validation.isValid) return;

    emailjs
      .send("portfolio-service", "template_owununl", sanitizedData, {
        publicKey: "rdrubaT03toCoAvp_",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
          setTimeout(()=>{
          setIsSubmitted(false);
          setIsSubmittedFirst(false);
          resetForm()
          },3000)
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <motion.div
      initial={{
        x: 150,
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
      className=" flex md:flex-row lg:flex-row flex-col  gap-4 items-center md:w-max lg:w-max md:max-w-max lg:max-w-max w-full max-w-110"
    >
      <h1 className="font-ncs text-[#076C69] text-[32px] md:text-[42px] lg:text-5xl md:[writing-mode:vertical-lr] lg:[writing-mode:vertical-lr] rotate-0 md:rotate-180 lg:rotate-180 ">
        Send a message
      </h1>

      <form
        onSubmit={sendEmail}
        className=" md:w-[650px] lg:w-[680px] xl:w-[720px] w-full bg-[#d2d2d2] dark:bg-[#1B1B1B] md:gap-5 lg:gap-6 gap-8 flex flex-col py-[28px] md:py-[30px] lg:py-[32px]  px-[24px] md:px-[36px] lg:px-[42px] rounded-[20px] "
      >
        <div className="relative flex flex-col w-full gap-2">
          <label
            htmlFor="Full_name"
            className=" font-roboto text-bgDark dark:text-white text-xl "
          >
            Full name{" "}
            <span className="font-roboto text-xl text-[#5F1313] ">*</span>
          </label>
          <input
            onChange={handleChange}
            name="Full_name"
            value={String(formValues.Full_name)}
            id="Full_name"
            placeholder="Enter your full name"
            className=" focus:outline-0 font-roboto py-2 px-0 text-bgDark dark:text-white text-xl border-b-1  border-bgDark dark:border-white "
            type="text"
          />
          {isSubmittedFirst && errors.Full_name && (
            <motion.p
              key={`full-name-${submitCount}`}
              initial={{ x: 0 }}
              animate={{ x: [-10, 10, -10, 10, 0] }}
              transition={{ duration: 0.4 }}
              className="pointer-events-none absolute left-0 -bottom-6 font-roboto text-sm text-[#5F1313]"
            >
              {errors.Full_name}
            </motion.p>
          )}
        </div>

        <div className="  flex w-full md:flex-row lg:flex-row flex-col gap-6 md:gap-0 lg:gap-0 justify-between  ">
          <div className="relative flex flex-col  w-full md:w-48/100 lg:w-48/100 gap-2">
            <label
              htmlFor="Email"
              className=" font-roboto text-bgDark dark:text-white text-xl  "
            >
              Email{" "}
              <span className="font-roboto text-xl text-[#5F1313] ">*</span>
            </label>
            <input
              onChange={handleChange}
              name="Email"
              value={String(formValues.Email)}
              id="Email"
              placeholder="contact@gmail.com"
              className=" focus:outline-0 font-roboto py-2 px-0 text-bgDark dark:text-white text-xl  border-b-1  border-bgDark dark:border-white "
              type="text"
            />
            {isSubmittedFirst && errors.Email && (
              <motion.p
                key={`email-${submitCount}`}
                initial={{ x: 0 }}
                animate={{ x: [-10, 10, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="pointer-events-none absolute left-0 -bottom-6 font-roboto text-sm text-[#5F1313]"
              >
                {errors.Email}
              </motion.p>
            )}
          </div>

          <div className="relative flex flex-col  w-full md:w-48/100 lg:w-48/100  gap-2">
            <label
              htmlFor="Phone_number"
              className=" font-roboto text-bgDark dark:text-white text-xl "
            >
              Phone number{" "}
              <span className="font-roboto text-xl text-[#5F1313] ">*</span>
            </label>
            <input
              onChange={handleChange}
              name="Phone_number"
              value={String(formValues.Phone_number)}
              id="Phone_number"
              placeholder="0555555555"
              className=" focus:outline-0 font-roboto py-2 px-0 text-bgDark dark:text-white text-xl border-b-1  border-bgDark dark:border-white"
              type="text"
            />
            {isSubmittedFirst && errors.Phone_number && (
              <motion.p
                key={`phone-${submitCount}`}
                initial={{ x: 0 }}
                animate={{ x: [-10, 10, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="pointer-events-none absolute left-0 -bottom-6 font-roboto text-sm text-[#5F1313]"
              >
                {errors.Phone_number}
              </motion.p>
            )}
          </div>
        </div>

        <div className="relative flex flex-col w-full gap-1">
          <label
            htmlFor="Subject"
            className=" font-roboto text-bgDark dark:text-white text-xl "
          >
            Subject{" "}
            <span className="font-roboto text-xl text-[#5F1313] ">*</span>
          </label>
          <input
            onChange={handleChange}
            name="Subject"
            value={String(formValues.Subject)}
            id="Subject"
            placeholder="Enter the subject"
            className=" focus:outline-0 font-roboto py-2 px-0 text-bgDark dark:text-white text-xl border-b-1  border-bgDark dark:border-white"
            type="text"
          />
          {isSubmittedFirst && errors.Subject && (
            <motion.p
              key={`subject-${submitCount}`}
              initial={{ x: 0 }}
              animate={{ x: [-10, 10, -10, 10, 0] }}
              transition={{ duration: 0.4 }}
              className="pointer-events-none absolute left-0 -bottom-6 font-roboto text-sm text-[#5F1313]"
            >
              {errors.Subject}
            </motion.p>
          )}
        </div>

        <div className="relative flex flex-col w-full gap-1">
          <label
            htmlFor="Your_message"
            className=" font-roboto text-bgDark dark:text-white text-xl "
          >
            Your message{" "}
            <span className="font-roboto text-xl text-[#5F1313] ">*</span>
          </label>
          <textarea
            onChange={handleChange}
            name="Your_message"
            value={String(formValues.Your_message)}
            placeholder="Write your message"
            className=" scrollbar-thumb-greyPt scrollbar-track-transparent  scrollbar-thin min-h-18 resize-none md:min-h-28 lg:min-h-32 focus:outline-0 font-roboto py-2 px-0 text-bgDark dark:text-white text-xl border-b-1 border-bgDark dark:border-white  "
            id="Your_message"
          ></textarea>
          {isSubmittedFirst && errors.Your_message && (
            <motion.p
              key={`message-${submitCount}`}
              initial={{ x: 0 }}
              animate={{ x: [-10, 10, -10, 10, 0] }}
              transition={{ duration: 0.4 }}
              className="pointer-events-none absolute left-0 -bottom-6 font-roboto text-sm text-[#5F1313]"
            >
              {errors.Your_message}
            </motion.p>
          )}
        </div>

        <div className="transition-all duration-300 mt-6 md:flex-row lg:flex-row flex-col gap-5 flex w-full items-center justify-between ">
          <AnimatePresence mode="wait">
            <motion.p
              key={isSubmitted ? "thank-you" : "connect"}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className=" transition-all duration-300 font-ncs text-[34px] md:text-[40px] lg:text-[46px] text-bgDark dark:text-white  "
            >
              {isSubmitted ? "THANK YOU" : "Let's connect"}
            </motion.p>
          </AnimatePresence>
          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            animate={
              isSubmitted
                ? { scale: 1.03 }
                : { scale: 1 }
            }
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
            className="items-center transition-all duration-300 flex flex-row gap-3 font-ncs text-[18px] md:text-xl lg:text-2xl dark:text-bgDark text-bgLight cursor-pointer hover:bg-[#000000be] hover:dark:bg-[#ffffffe1] md:p-3.5 lg:p-4  px-3 pt-3 pb-2  md:pb-3 lg:pb-3  border-0 focus:outline-0 bg-bgDark dark:bg-white rounded-[20px] "
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={isSubmitted ? "submitted-text" : "submit-text"}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                {isSubmitted ? "Sbmitted" : "Submit"}
              </motion.span>
            </AnimatePresence>
            <AnimatePresence>
              {isSubmitted && (
                <motion.img
                  key={`submitted-icon-${submitCount}`}
                  initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 420, damping: 18 }}
                  src={submittedIcon}
                  alt="Submited"
                  className="transition-all duration-300 h-5 w-5 shrink-0 invert dark:invert-0 md:h-6 md:w-6 lg:h-7 lg:w-7 mb-1"
                />
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
