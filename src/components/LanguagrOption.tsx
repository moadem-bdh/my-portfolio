


export default function LanguageOption ({lang , selected , id ,setLanguage }:{lang:string , selected :string , id:"fr" | "en" , setLanguage:(par:"fr" | "en")=>void}){



    return(
        <div onClick={()=>setLanguage(id)} className={`flex justify-center rounded-[15px] cursor-pointer items-center font-ncs w-full px-[10px] py-2 ${selected == id ? "dark:text-bgLight text-bgDark dark:bg-bgDark bg-white" :"text-bgLight dark:text-bgDark bg-bgDark dark:bg-white"}   hover:bg-bgLight hover:dark:bg-bgDark hover:text-bgDark hover:dark:text-white text-xl `}  >{lang}</div>
    )
}