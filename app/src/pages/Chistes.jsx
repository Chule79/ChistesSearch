import { useEffect, useState } from 'react';

import { AllChistes } from '../components/allchistes/AllChistes';

export const Chistes = () => {
  const [chiste, setChiste] = useState([]);
  useEffect(() => {
    const getChistes = async () => {
      const data = await fetch('http://localhost:8080/chistes');
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
