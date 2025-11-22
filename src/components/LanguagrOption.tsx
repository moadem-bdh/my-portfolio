


export default function LanguageOption ({lang}:{lang:string}){



    return(
        <div className="flex justify-center rounded-[15px] cursor-pointer items-center font-ncs w-full px-[10px] py-2 text-bgLight dark:text-bgDark bg-bgDark dark:bg-white hover:bg-bgLight hover:dark:bg-bgDark hover:text-bgDark hover:dark:text-white text-xl"  >{lang}</div>
    )
}