export const fomartPrice = (num) => {
  const formattedNum = num.toLocaleString("en-US");
  return formattedNum;
};

export const findIndex = (arr, payload) => {
  return arr.findIndex((item) => item._id === payload._id);
};

export const getTotal = (arr) => {
  let total = 0;
  arr.forEach((item) => {
    total += item.amount * item.price;
  });
  return fomartPrice(total);
};
