




export default function OneSocialMedia ({title , subTitle , image }:{title:string , subTitle:string , image: string} ){

return (

    <div className="flex gap-4 w-max">

 <img src={image} className=" md:w-max w-9 " alt="Icon" />
 <div>  
    <p className="  text-white font-ncs text-base md:text-[22px]  ">{title}</p>
    <p className=" font-roboto text-greyPt text-xs md:text-base ">{subTitle}</p>
 </div>


    </div>
)


}
