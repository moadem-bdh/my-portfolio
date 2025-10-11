import buttonArrow from "../assets/photos/ButtunArrow.svg";
import MenuArrow from "../assets/photos/MenuArrow.svg"
import close from "../assets/photos/close.svg"
export default function Menu({   handleParentClick, setMenuAppear}:{ handleParentClick:(e:React.MouseEvent)=>void , setMenuAppear:()=>void}) {
  type menuType = {
    name: string;
    achorLink: string;
  };
  const menu: menuType[] = [
    {
      name: "Home",
      achorLink: "Home",
    },
    {
      name: "About Me",
      achorLink: "About",
    },
    {
      name: "Skills",
      achorLink: "Skills",
    },
    {
      name: "Projects",
      achorLink: "Projects",
    },
    {
      name: "Contact me",
      achorLink: "ContactMe",
    },
  ];

  return (
    <menu onClick={(e)=>handleParentClick(e)} className="  fixed h-full inset-0 z-20 bg-[#060606db] flex justify-end ">
       
      <div className="md:w-[950px] w-full scrollbar scrollbar-track-transparent scrollbar-thumb-transparent bg-bgDark min-h-40 border-b-4 md:border-b-0 md:border-l-4 py-6  gap-3 flex flex-col h-[470px] md:h-full overflow-y-auto border-[#076C69]">
      <div className=" w-full flex mb-2 md:mb-8 px-4 md:px-10  md:justify-start justify-end"><button type="button" onClick={setMenuAppear} className="p-2.5 w-max md:border-white md:rounded-[100px] md:border-3 group cursor-pointer md:hover:bg-white transition-all ease-in-out duration-200"><img className="w-10 group-hover:invert hidden md:block" src={MenuArrow} alt="Arrow" /><img className=" md:hidden block " src={close} alt="close icon" /></button> </div>
        {menu.map((option) => (
            <a onClick={setMenuAppear} href={`#${option.achorLink}`} key={option.name}>
          <div className=" transition-all ease-in-out duration-300 cursor-pointer group hover:pl-6 flex w-full justify-between items-center px-4 md:px-10 ">
            <h1 className="group-hover:[-webkit-text-stroke-width:0px]  group-hover:text-white font-ncs text-[36px] md:text-[64px] [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:white]  ">
              {option.name}
            </h1>
            <div
              className={` cursor-pointer md:border-2 rounded-[100px] h-max w-max p-2 md:p-2.5  border-white border-1 group-hover:rotate-45 transition-all ease-in-out duration-300 group-hover:bg-white hover:boeder-0`}
            >
              <img
                src={buttonArrow}
                className={` h-[10px] md:h-5 group-hover:invert transition-all ease-in-out duration-300`}
                alt="Arrow Icon"
              />
            </div>
          </div>
          </a>
        ))}
      </div>
    </menu>
  );
}
