import '../App.css';

import { useEffect, useState } from 'react';

import { getFiltro } from '../api/filtro';
import { AllChistes } from '../components/allchistes/AllChistes';

export const Search = () => {
  const [filter, setFilter] = useState('malos');
  const [chistes, setChistes] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getFiltro(filter);
      setChistes(data);

      console.log(chistes);
    })();
  }, [filter]);

  return (
    <>
      <div className="filtrar">
        <label htmlFor="chiste" className="tipos">
          Tipo:
        </label>
        <select
          name="type"
          id="type"
          className="filtrar"
          onChange={(ev) => setFilter(ev.target.value)}
        >
          <option value="malos">Malos</option>
          <option value="buenos">Buenos</option>
          <option value="crueles">Crueles XD</option>
        </select>
      </div>
      <AllChistes chiste={chistes} />
    </>
  );
};
