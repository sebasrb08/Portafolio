export function About(){
    return(
        <section id="about" className="h-screen flex justify-center items-center flex-col space-y-6 mt-20 text-center">
            <div className="font-extrabold text-2xl font-inter md:text-4xl">
                <h3>Sobre Mí</h3>
            </div>
            <div className="font-inter max-w-xl mt-10 space-y-8">
                <p>Hola, soy Sebastian Rueda, desarrollador Full Stack ubicado en Bucaramanga, Colombia,
                y estudiante de Ingeniería de Sistemas. Tengo experiencia en Java y Spring Boot para el 
                desarrollo backend, así como en React para la creación de aplicaciones web escalables y dinámicas.
                </p>

                <p>Me considero una persona de aprendizaje rápido y autodidacta. 
                Todo lo que sé lo he aprendido gracias a mi pasión por la tecnología
                 y mi deseo constante de mejorar cada día. Siempre busco nuevos desafíos que me permitan crecer
                como profesional y aportar soluciones innovadoras.
                </p>
            </div>
            <div>
                <a href="/public/Hoja_De_Vida.pdf" download="Hoja_De_Vida.pdf">
                    <button className="font-montserrat border-1 border-sky-400 p-2 rounded-full hover:bg-sky-400 px-8">
                        Descargar CV
                    </button>
                </a>
            </div>
        </section>
    )
}