import { useState } from "react";
import emailjs from "emailjs-com";
export function Contact(){

    const service_id=import.meta.env.VITE_REACT_APP_SERVICE_ID;
    const template_id=import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
    const public_key=import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, 
            [e.target.name]: e.target.value,
        });
    };

    const handleClick=(e)=>{
        e.preventDefault();

        emailjs
          .send(
            service_id, // 🔹 Reemplaza con tu Service ID de EmailJS
            template_id, // 🔹 Reemplaza con tu Template ID de EmailJS
            formData,
            public_key// 🔹 Reemplaza con tu Public Key de EmailJS
          )
          .then(() => alert("Mensaje enviado correctamente."))
          .catch((error) => console.error("Error al enviar el mensaje:", error));
      };
    return(
        <section id="contact" className="h-screen  flex flex-col justify-center items-center space-y-6 font-inter   ">
            <div>
                <h3 className="text-2xl md:text-4xl font-extrabold text-center mt-20">
                Contacto
                </h3>
            </div>
            <div  className="flex flex-col  space-y-3 mt-10 min-w-full md:min-w-lg">
                <div className="flex flex-col">
                    <label>Nombre</label>
                    <input name="nombre" value={formData.nombre} onChange={handleChange} type="text" className="border-2 border-gray-300 h-14 md:h-16 rounded-lg p-2 mt-2"/>
                </div>
                <div className="flex flex-col">
                    <label>Email</label>
                    <input name="email" value={formData.email} onChange={handleChange} type="text" className="border-2 border-gray-300 h-14 md:h-16 rounded-lg p-2 mt-2"/>
                </div>
                <div className="flex flex-col">
                    <label>Mensaje</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}  className="border-2 border-gray-300 rounded-lg p-2 mt-2" rows="4"/>
                </div>
                <div className="flex flex-col">
                    <button onClick={handleClick} className="h-14 md:h-16 bg-white border-2 border-black text-base text-black font-bold p-2 rounded-lg  hover:bg-transparent  hover:text-white px-8 font-montserrat mt-4 ">
                        Contactar
                    </button>
                </div>
            </div>

        </section>
    )
}