



export default function Skill({skill ,setSkill ,currentSkill }:{ currentSkill:string, skill:{title:string , id:string} , setSkill:(s:string)=>void}){
return(

    <div onClick={()=>setSkill(skill.id)} className={` cursor-pointer rounded-[50px] ${currentSkill == skill.id ? "bg-white" :"bg-bgDark hover:bg-[#ffffff91]" } transition-all ease-in-out duration-200 border-2 border-white md:border-0 group flex px-3 md:px-[12px] pt-[10px] md:pt-[4px] pb-[8px] md:pb-[2px] justify-center items-center `}> 
    <p className={` font-white font-ncs text-sm md:text-[32px]  ${currentSkill == skill.id ? "text-bgDark" :"text-white"} group-hover:text-bgDark transition-all ease-in-out duration-200 `}>{skill.title}</p>
    
     </div>
)
}