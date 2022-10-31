export const getFiltro = async (filter) => {
  const data = await fetch(`http://localhost:8080/chistes?type=${filter}`);
  const res = await data.json();
  return res;
};
