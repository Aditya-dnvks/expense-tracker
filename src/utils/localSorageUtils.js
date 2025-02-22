export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : null;
};
