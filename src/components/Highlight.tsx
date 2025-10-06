export default function Highlight ({number , title, description }:{
  number: string,
  title: string,
  description: string
}){



    return(
   <div className=" xl:min-w-70  md:min-w-48  flex  flex-col justify-start items-center cursor-pointer gap-7 hover:scale-108 group transition-all duration-400 ease-in-out ">
  <hr className=" w-full border-greenPt border-2 " /> 
  <div className="flex flex-col gap-1 ">
  <h1 className=" font-ncs  md:text-6xl xl:text-7xl text-bgDark  [-webkit-text-stroke:2px_white] transition-all ease-in-out duration-400  group-hover:[-webkit-text-stroke:0px_white] group-hover:text-white  ">{number}</h1>
   <p className=" font-ncs xl:text-[16px]  text-white " >{title}</p>
   <p className="font-roboto xl:text-sm md:text-xs opacity-100  text-greyPt md:opacity-45 group-hover:opacity-100 transition-all duration-400 ease-in-out">{description}</p>
  </div>
   </div>


    )
}