import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { menuData } from '../data/menuData';

export function NavbarResponsive(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
        
        <div className=" relativa basis-1/2 md:hidden flex justify-end">
            <MenuIcon onClick={toggleMenu}/>
            <div className={`fixed top-0 right-0 w-48 h-full bg-gray-900 bg-opacity-50  transform 
            ${isOpen ? "translate-x-0" : "translate-x-full"} 
            transition-transform duration-300 ease-in-out lg:hidden`}>
                <div className='flex justify-end p-4'>
                    <CloseIcon className='cursor-pointer' onClick={toggleMenu} />
                </div>
                <ul className="flex flex-col justify-center items-center space-y-6 font-montserrat"> 
                    {menuData.map((item, index) => (
                        <a key={index} href={item.link}><li>{item.nombre}</li></a>
                    ))}
                </ul>
            </div>
            
        </div>
        </>
    )
}