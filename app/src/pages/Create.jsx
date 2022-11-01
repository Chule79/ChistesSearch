import '../App.css';

import axios from 'axios';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const Crear = () => {
  const [title, setTitle] = useState('');
  const [media, setMedia] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [type, setType] = useState('');

  const createChiste = (ev) => {
    ev.preventDefault();
    const chiste = {
      id: uuidv4(),
      title: title,
      media: media,
      chiste: descripcion,
      type: type,
    };
    postChiste(chiste);
  };

  const postChiste = async (item) => {
    console.log(item);
    axios({
      method: 'post',
      url: 'https://chistes-service.onrender.com/chistes',
      data: item,
    });
  };

  return (
    <div className="crear">
      <form onSubmit={(ev) => createChiste(ev)}>
        <fieldset>
          <legend>Crear nuevo Chiste</legend>
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(ev) => setTitle(ev.target.value)}
          />
          <label htmlFor="media">Gif de ilustración: </label>
          <input
            type="text"
            name="media"
            id="media"
            onChange={(ev) => setMedia(ev.target.value)}
          />
          <label htmlFor="chiste">Chiste:</label>
          <input
            type="text"
            name="descripcion"
            id="descripcion"
            onChange={(ev) => setDescripcion(ev.target.value)}
          />
          <label htmlFor="chiste">Tipo:</label>
          <select name="type" id="type" onChange={(ev) => setType(ev.target.value)}>
            <option value="malos">Malos</option>
            <option value="buenos">Buenos</option>
            <option value="crueles">Crueles XD</option>
          </select>
        </fieldset>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};
