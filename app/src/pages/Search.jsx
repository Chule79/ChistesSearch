import { useEffect, useState } from 'react';

import { getFiltro } from '../api/filtro';
import { AllChistes } from '../components/AllChistes';

export const Search = () => {
  const [filter, setFilter] = useState('malos');
  const [chistes, setChistes] = useState([]);

  useEffect(() => {
    getFiltro(filter).then((chiste) => setChistes([chiste]));
    console.log(chistes);
  }, [filter]);

  return (
    <>
      <AllChistes chiste={chistes} />
    </>
  );
};
