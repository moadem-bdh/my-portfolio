import instagramColored from "../assets/photos/instagramColored.svg"
import LinkedInColored from "../assets/photos/linkedinColored.svg"
import TwittwrColored from "../assets/photos/twitterColored.svg"
import ButtonArrow from "../components/ButtonArrow"


export default function FooterSection (){

return (

    <footer className="  w-full bg-bgLight dark:bg-bgDark gap-8 md:gap-16 pb-2 pt-42 flex flex-col items-center  "> 
    <span className="px-4 md:px-20 w-full flex justify-end ">
        <a href="#Home"><ButtonArrow divStyle=" border border-3 p-4 md:p-5 hover:bg-bgDark hover:dark:bg-white " Arrowtyle=" hover:dark:invert dark:invert-0 invert hover:invert-0 w-6 md:w-8 -rotate-45  "  />  </a> 
    </span>
 
     <hr className=" w-96/100 rounded border-bgDark dark:border-white  " />
     
     
  <div className=" flex flex-row w-full justify-between px-4 md:px-20  ">


 <h1 className="font-ncs leading-[40px] md:leading-[60px] text-[#076C69] text-2xl md:text-5xl ">This is just <br />the beginning</h1>
  
   <div className=" flex flex-col items-start gap-2 ">
<h1 className=" text-xl font-ncs md:text-[42px] text-bgDark dark:text-white  ">Contact</h1>
<ul className=" pl-1 flex flex-col ">

    <li className=" text-sx md:text-xl text-greyPtLight dark:text-greyPt font-roboto ">0782351931</li>
    <li className=" text-sx md:text-xl text-greyPtLight dark:text-greyPt font-roboto ">moadem@gmail.com</li>
</ul>


   </div>

   <div className=" md:block hidden ">

<h1 className=" text-bgDark dark:text-white font-ncs md:text-[42px]  ">Menu</h1>
<ul className=" flex-wrap gap-x-3  gap-1 w-[340px] flex  ">

   <a href="#Home"> <li className=" cursor-pointer text-xl text-greyPtLight dark:text-greyPt font-roboto ">Home</li></a>
    <a href="#About">  <li className="cursor-pointer text-xl text-greyPtLight dark:text-greyPt font-roboto ">About</li></a>
      <a href="#Skills"> <li className="cursor-pointer text-xl text-greyPtLight dark:text-greyPtfont-roboto ">skills</li></a>
   <a href="#Experience"> <li className="cursor-pointer text-xl text-greyPtLight dark:text-greyPt font-roboto ">Experience</li></a>
      <a href="#Projects"><li className="cursor-pointer text-xl text-greyPtLight dark:text-greyPt font-roboto ">Project</li></a>
     <a href="#ContactMe"><li className="cursor-pointer text-xl text-greyPtLight dark:text-greyPt font-roboto ">Contact me</li></a> 
</ul>

   </div>







  </div>
  

   <div className=" w-full items-center flex flex-col gap-4 px-4 md:px-20 ">


    <div className="flex gap-4">
  <a  target="_blank" href="https://www.instagram.com/moadem_boudehane/"> <img src={instagramColored} alt="Instagram" /></a>
  <a  target="_blank" href="https://www.linkedin.com/in/mohamed-adem-boudehane-67926233b/"><img src={LinkedInColored} alt="LinkedIn" /></a>
  <a  target="_blank" href="https://x.com/moadem_bdh?s=21"><img className="invert dark:invert-0 " src={TwittwrColored} alt="X" /></a>
    </div>
    <p className=" text-greyPtLight dark:text-greyPt font-roboto text-sm  ">BY BOUDEHANE Mohamed Adem 2026 ©</p>
   </div>




    </footer>
)



}