import instagramColored from "../assets/photos/instagramColored.svg"
import LinkedInColored from "../assets/photos/linkedinColored.svg"
import TwittwrColored from "../assets/photos/twitterColored.svg"


export default function FooterSection (){

return (

    <footer className="  w-full bg-bgDark gap-8 md:gap-16 pb-2 pt-50 flex flex-col items-center  ">   
     <hr className=" w-96/100 rounded  border-white  " />
     
  <div className=" flex flex-row w-full justify-between px-4 md:px-20  ">


 <h1 className="font-ncs leading-[40px] md:leading-[60px] text-[#076C69] text-2xl md:text-5xl ">This is just <br />the beginning</h1>
  
   <div className=" flex flex-col items-start gap-2 ">
<h1 className=" text-xl font-ncs md:text-[42px]  text-white  ">Contact</h1>
<ul className=" pl-1 flex flex-col ">

    <li className=" text-sx md:text-xl text-greyPt font-roboto ">0782351931</li>
    <li className=" text-sx md:text-xl text-greyPt font-roboto ">moadem@gmail.com</li>
</ul>


   </div>

   <div className=" md:block hidden ">

<h1 className=" text-white font-ncs md:text-[42px] md:text-white     ">Menu</h1>
<ul className=" flex-wrap gap-x-3  gap-1 w-[340px] flex  ">

    <li className=" cursor-pointer text-xl text-greyPt font-roboto ">Home</li>
    <li className="cursor-pointer text-xl text-greyPt font-roboto ">About</li>
    <li className="cursor-pointer text-xl text-greyPt font-roboto ">skills</li>
    <li className="cursor-pointer text-xl text-greyPt font-roboto ">Experience</li>
    <li className="cursor-pointer text-xl text-greyPt font-roboto ">Project</li>
    <li className="cursor-pointer text-xl text-greyPt font-roboto ">Contact me</li>
</ul>

   </div>







  </div>
  

   <div className=" w-full items-center flex flex-col gap-4 px-4 md:px-20 ">


    <div className="flex gap-4">
  <img src={instagramColored} alt="Instagram" />
  <img src={LinkedInColored} alt="Instagram" />
  <img src={TwittwrColored} alt="Instagram" />
    </div>
    <p className=" text-greyPt font-roboto text-sm  ">BY BOUDEHANE Mohamed Adem 2026 ©</p>
   </div>




    </footer>
)



}