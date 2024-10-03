import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        comentario: '',
    });
    const [error, setError] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError((prev) => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.nombre) newErrors.nombre = 'El nombre es obligatorio';
        if (!formData.apellido) newErrors.apellido = 'El apellido es obligatorio';
        if (!formData.email) {
            newErrors.email = 'El email es obligatorio';
        } else if (!formData.email.includes('@')) {
            newErrors.email = 'El email debe contener un "@"';
        }
        if (!formData.comentario) newErrors.comentario = 'El comentario es obligatorio';
        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            Swal.fire({
                title: "Se envio su consulta",
                icon: "success"
            });
            setFormData({ nombre: '', apellido: '', email: '', comentario: '' });
        }
    };

    return (
        <main className="contacto">
            <h2>Enviamos tu consulta</h2>
            <form onSubmit={handleSubmit}>
                <div >
                    <h4 className="h4-contacto">Nombre*</h4>
                    <input
                        className="form-nombre"
                        type="text"
                        name="nombre"
                        
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                    {error.nombre && <p className="error">{error.nombre}</p>}
                </div>
                <div>
                    <h4 className="h4-contacto">Apellido*</h4>
                    <input
                        className="form-apellido"
                        type="text"
                        name="apellido"
                        
                        value={formData.apellido}
                        onChange={handleChange}
                    />
                    {error.apellido && <p className="error">{error.apellido}</p>}
                </div>
                <div >
                <h4 className="h4-contacto">Mail*</h4>
                    <input
                    className="form-mail"
                        type="email"
                        name="email"
                        
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {error.email && <p className="error">{error.email}</p>}
                </div>
                <div>
                    <h4 className="h4-contacto">Comentario*</h4>
                    <textarea
                        className="form-msj"   
                        name="comentario"
                        value={formData.comentario}
                        onChange={handleChange}
                    />
                    {error.comentario && <p className="error">{error.comentario}</p>}
                </div>
                <button  className='enviar-boton' type="submit"  disabled={!formData.nombre || !formData.apellido || !formData.email || !formData.comentario} >Enviar</button>
            </form>
        </main>
    );
};

export default Contacto;
