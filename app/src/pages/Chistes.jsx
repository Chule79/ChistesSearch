import { useEffect, useState } from 'react';

import { AllChistes } from '../components/allchistes/AllChistes';

export const Chistes = () => {
  const [chiste, setChiste] = useState([]);
  useEffect(() => {
    const getChistes = async () => {
      const data = await fetch('https://chistes-service.onrender.com/chistes');
      const res = await data.json();
      setChiste(res);
    };

    getChistes();
  }, []);

  return (
    <>
      <AllChistes chiste={chiste} />
    </>
  );
};
