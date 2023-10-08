export const getAllPokemon = (url) => {
  return new Promise((resoleve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resoleve(data));
  });
};

export const getPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      });
  });
};
