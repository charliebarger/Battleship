const generateRandomNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

export { generateRandomNumber, isObject };
