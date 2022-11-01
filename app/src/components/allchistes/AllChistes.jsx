import './chiste.css';

import { Link } from 'react-router-dom';

export const AllChistes = ({ chiste }) => {
  return (
    <div className="allChistes">
      <h2>Chistes 🤣</h2>
      <div className="all">
        {chiste.length ? (
          chiste.map((chiste) => (
            <figure key={chiste.id} className="carta">
              <Link to={`/chistes/${chiste.id}`}>
                <h3>{chiste.title}</h3>
                <img src={chiste.media} />
              </Link>
            </figure>
          ))
        ) : (
          <p>No existe el Chiste que busca 😢</p>
        )}
      </div>
    </div>
  );
};
