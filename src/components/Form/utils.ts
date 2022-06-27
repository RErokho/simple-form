import { TGetEmptyData, TValidateState } from "./types";

export const getEmptyData: TGetEmptyData = () => {
  return {
    name: null,
    date: null,
    email: null,
    phone: null,
    text: null,
  };
};

export const validateState: TValidateState = (state) => {
  const { name, date, email, phone, text } = state;

  return (
    name !== null &&
    email !== null &&
    phone !== null &&
    date !== null &&
    text !== null
  );
};
