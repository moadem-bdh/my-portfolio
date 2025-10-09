
import { useMediaQuery } from "react-responsive";
import Highlight from "../components/Highlight"
import HighlightPhone from "../components/HighlightPhone";


export default function HighlightSection (){


  // Tailwind v4 breakpoints: sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
  const desktop = useMediaQuery({ query: "(min-width: 768px)" });


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

<section className="w-full  bg-bgDark flex flex-col gap-4 md:gap-18  md:pt-14 pb-4 md:pb-20 items-start px-4 md:px-20  "> 
<p className=" font-ncs text-white text-3xl md:text-6xl">Highlights</p>


<div className=" flex md:flex-row flex-col w-full  pt-5 pb-0.5 justify-between gap-3  md:gap-8 xl:gap-10 ">
{
    highlights.map((h)=> desktop ? <Highlight key={h.number} number={h.number} title={h.title} description={h.description}/> :< HighlightPhone key={h.number} number={h.number} title={h.title} description={h.description} /> )
}

</div>

</section>



 )




} 