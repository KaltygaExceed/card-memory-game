export const assignName = (name) => ({
  type: "LOGIN",
  payload: name,
});

export const minusPoint = () => ({
  type: "MINUS_POINT"
});
export const plusPoint = () => ({
  type: "PLUS_POINT"
});

export const setHighscore = () => ({
  type: "HIGHSCORE"
})
