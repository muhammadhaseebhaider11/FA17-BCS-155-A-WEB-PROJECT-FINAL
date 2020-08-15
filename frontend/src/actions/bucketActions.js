export const addToBucket = (dish) => {
  return {
    type: "ADD_TO_BUCKET",
    payload: dish,
  };
};

export const clearBucket = () => {
  return {
    type: "CLEAR_BUCKET",
  };
};
