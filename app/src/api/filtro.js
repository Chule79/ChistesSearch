export const getFiltro = async (filter) => {
  const data = await fetch(`https://chistes-service.onrender.com?type=${filter}`);
  const res = await data.json();
  return res;
};
