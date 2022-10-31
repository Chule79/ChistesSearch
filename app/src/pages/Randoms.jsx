/*import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Random = () => {
  const [chiste, setChiste] = useState({});

  useEffect(() => {
    const getChistes = async () => {
      const data = await fetch('http://localhost:8080/chistes');
      const res = await data.json();
      setChiste(res);
    };

    getChistes();
  }, []);

  return (
    <div className="allChistes">
      <h2>Chistes</h2>
      <div className="all">
        {chiste.length ? (
          chiste.map((chiste) => (
            <figure key={chiste.id}>
              <h3>{chiste.title}</h3>
              <img src={chiste.media}></img>
              <p>{chiste.chiste}</p>
            </figure>
          ))
        ) : (
          <p>No existe el Chiste que busca 😢</p>
        )}
      </div>
    </div>
  );
};
*/
