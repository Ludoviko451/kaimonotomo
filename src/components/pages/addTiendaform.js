import React, { useState } from 'react';
import './form.css';

const AddTiendaForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    paginaWeb: '',
    celular: '',
    imagen: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Tienda creada exitosamente');
        alert("Tienda creada existosamente")
        window.location.href = "/login"
        setFormData({ nombre: '', direccion: '', paginaWeb: '', celular: '', imagen: ''});
      } else {
        console.error('Error al crear la tienda');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form--container'>
          <h2 className='form--title'>AGREGAR PRODUCTO</h2>

          <label>
            <h3>Nombre de la tienda</h3>
            <input
              type='text'
              name='nombre'
              className='form--nameinput'
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <h3>Direccion de la tienda</h3>
            <input
              type='text'
              name='direccion'
              className='form--priceinput'
              value={formData.direccion}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <h3>Pagina web de la tienda</h3>
            <input
              type='text'
              name='paginaWeb'
              className='form--featuresinput'
              value={formData.paginaWeb}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <h3>Numero de celular de la tienda</h3>
            <input
              type='text'
              name='celular'
              className='form--nameinput'
              value={formData.celular}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <h3>Ingrese una imagen de la tienda</h3>
            <input
              type='text'
              name='imagen'
              className='form--featuresinput'
              value={formData.imagen}
              onChange={handleInputChange}
              required
            />
          </label>

          <input type='submit' className='form--submitinput' value='Crear Tienda' />
        </div>
      </form>
    </div>
  );
};

export default AddTiendaForm;
