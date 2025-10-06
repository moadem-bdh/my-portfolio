
import Highlight from "../components/Highlight"


export default function HighlightSection (){

const highlights: {
  number: string,
  title: string,
  description: string
}[] = [
  {
    number: "80%",
    title: "Clients satisfied worldwide",
    description: "We deliver consistent quality that builds long-term trust, ensuring clients return for reliable solutions."
  },
  {
    number: "+60",
    title: "graphical charts created",
    description: "More than sixty charts created to simplify complex data, making analysis clear, fast, and effective for teams."
  },
  {
    number: "200~",
    title: "Posts made for audiences",
    description: "Over two hundred posts published to share insights and ideas, crafted to engage readers across platforms."
  }
]



 return(

<section className="w-full  bg-bgDark flex flex-col gap-18 pt-14 pb-20 items-start px-4 md:px-20  "> 
<p className=" font-ncs text-white text-3xl md:text-6xl">Highlights</p>


<div className=" flex w-full  pt-5 pb-0.5 justify-between  md:gap-8 xl:gap-10 ">
{
    highlights.map((h)=><Highlight key={h.number} number={h.number} title={h.title} description={h.description}/>)
}

</div>

</section>



 )




} 