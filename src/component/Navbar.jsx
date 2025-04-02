import { NavbarResponsive } from "./NavbarResponsive";
import { menuData } from "../data/menuData";
export function Navbar(){
    return (
        <nav className="flex flex-row  items-center">
                <ul className="basis-1/2 flex md:justify-center">
                    <li><h2 className="flex-30 font font-oleo text-2xl md:text-3xl ">Sebastian</h2></li>
                </ul>
           


            <NavbarResponsive />

                <ul className="hidden md:flex flex-row justify-center items-center space-x-6 basis-1/2 font-montserrat text-lg"> 
                    {menuData.map((item, index) => (
                        <a key={index} href={item.link}><li className="whitespace-nowrap">{item.nombre}</li></a>
                    ))}
                </ul>
                <ul className="hidden md:flex basis-1/2 justify-center">
                    <button className="border-1 border-sky-400 p-2 rounded-lg hover:bg-sky-400">
                        <li className="font-montserrat">Contactame</li>
                    </button>
                </ul>
        </nav>
    )
}