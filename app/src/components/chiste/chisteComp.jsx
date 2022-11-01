import './chiste.css';

export const CompChiste = ({ chiste }) => {
  return (
    <div className="chiste">
      {chiste ? (
        <figure className="cartainf">
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
