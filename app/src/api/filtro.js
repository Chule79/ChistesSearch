export const getFiltro = async (filter) => {
  const data = await fetch(`https://chistes-service.onrender.com/chistes?type=${filter}`);
  const res = await data.json();
  return res;
};
