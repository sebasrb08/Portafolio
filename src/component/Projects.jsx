export function Project(){
    return(
        <section id="project" className="h-screen flex flex-col justify-center items-center space-y-6 font-inter  ">
            <div>
                <h3 className="text-2xl md:text-4xl font-extrabold  text-center mt-20">
                    Proyectos
                </h3>
            </div>
            <div className="flex md:flex-row md:justify-around flex-wrap ">
                <div className="flex flex-col  md:space-x-10">
                    <div >
                        <img src="/public/foto_perfil.jpg" className="w-80 h-48"/>
                    </div>
                    <div className="mt-7">
                        <p className="font-bold text-xl">nombre xe proyecto</p>
                        <p>descripcion</p>
                    </div>
                    <div className="flex flex-row space-x-4 mt-4 text-sky-400 font-bold ">
                        <a className="cursor-pointer hover:scale-105 transition-transform">🔗Ver Proyecto</a>
                        <a className="cursor-pointer hover:scale-105 transition-transform">📂Codigo en Github</a>

                    </div>
                </div>
            </div>
        </section>
    )
}