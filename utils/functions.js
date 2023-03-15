export const urlString = (value) => {
  let result;
  result = value
    .replace(/\s/g, "-")
    .replace(/[^A-Za-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .toLowerCase();

  return result;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const randomNum = () => {
  let randomNum = Math.floor(Math.random() * 100);
  return randomNum;
};
