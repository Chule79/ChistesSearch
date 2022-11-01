import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CompChiste } from '../components/chiste/chisteComp';

export const Chiste = () => {
  const [chiste, setChiste] = useState({});
  const params = useParams();
  const { id } = params;
  console.log(id);

  useEffect(() => {
    const getChistes = async () => {
      const data = await fetch(`https://chistes-service.onrender.com/chistes/${id}`);
      const res = await data.json();
      setChiste(res);
    };

    getChistes();
  }, []);

  return <CompChiste chiste={chiste} />;
};
