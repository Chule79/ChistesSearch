import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Chiste = () => {
  const [chiste, setChiste] = useState({});
  const params = useParams();
  const { id } = params;
  console.log(id);

  useEffect(() => {
    const getChistes = async () => {
      const data = await fetch(`http://localhost:8080/chistes/${id}`);
      const res = await data.json();
      setChiste(res);
    };

    getChistes();
  }, []);

  return (
    <div className="chiste">
      {chiste ? (
        <figure>
          <h3>{chiste.title}</h3>
          <img src={chiste.media} />
          <p>{chiste.chiste}</p>
        </figure>
      ) : (
        <div>Not Exists</div>
      )}
    </div>
  );
};
