import TerminalIcon from '@mui/icons-material/Terminal';

export function Hero(){
    return(
        
        <section id="inicio" className="h-screen flex justify-center items-center flex-col space-y-6 mt-20 text-center">
            <div className="rounded-full overflow-hidden  w-40">
                <img src="/public/foto_perfil.jpg" alt="Foto de perfil" />
            </div>
            <div>
                <h2 className="text-4xl md:text-6xl font-bold font-poppins">Sebastian Rueda</h2>
                <p className=" text-sky-400 text-xl md:text-2xl font-medium mt-3 ">Full Stack <TerminalIcon/></p>
            </div>
            <div className="mt-4 max-w-2xl">
                <p className="font-inter">Transformo ideas en código y problemas en soluciones. 
                Como desarrollador me apasiona construir aplicaciones escalables que no solo funcionan,
                sino que también inspiran. Siempre en busca de nuevos desafíos y oportunidades para innovar.
                </p>
            </div>
            <div>
            <a href='#contact'>
                <button className="border-1 border-sky-400 p-2 rounded-3xl hover:bg-sky-400 px-8 font-montserrat cursor-pointer">Contactame</button>
            </a>
            </div>
        </section>
    )
}