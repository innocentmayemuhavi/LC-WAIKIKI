import { createSlice } from "@reduxjs/toolkit";

export const initialState =
  localStorage.getItem("Cart") === null
    ? {
        clothes: [],
        total: 0,
      }
    : JSON.parse(localStorage.getItem("Cart") as any);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newData = state.clothes.slice();
      newData.push(action.payload);
      const updated = {
        ...state,
        clothes: newData,
        total: newData.reduce(
          (prev: number, curr: { price: number; Quantity: number }) => {
            return prev + curr.price * curr.Quantity * 1;
          },
          0
        ),
      };

      localStorage.setItem("Cart", JSON.stringify(updated));
      return {
        ...updated,
      };
    },
    removeFromCart: (state, action) => {
      const updated = {
        ...state,
        clothes: state.clothes.filter(
          (data: { title: any; size: any }) =>
            data.title !== action.payload.title ||
            data.size !== action.payload.size
        ),
        total: state.clothes.reduce(
          (prev: number, curr: { price: number; Quantity: number }) => {
            return prev + curr.price * curr.Quantity * 1;
          },
          0
        ),
      };
      const latest = {
        ...updated,
        clothes: updated.clothes,
        total: updated.clothes.reduce(
          (prev: number, curr: { price: number; Quantity: number }) => {
            return prev + curr.price * curr.Quantity * 1;
          },
          0
        ),
      };
      localStorage.setItem("Cart", JSON.stringify(latest));
      return latest;
    },
    addQty: (state, action) => {
      console.log(action.payload);
      const updated = {
        ...state,
        clothes: state.clothes.map((data: { title: any; size: any }) => {
          return data.title === action.payload.item.title &&
            data.size === action.payload.item.size
            ? { ...data, Quantity: action.payload.value }
            : data;
        }),
        total: state.clothes.reduce(
          (prev: number, curr: { price: number; Quantity: number }) => {
            return prev + curr.price * curr.Quantity * 1;
          },
          0
        ),
      };
      const latest = {
        ...updated,
        clothes: updated.clothes,
        total: updated.clothes.reduce(
          (prev: number, curr: { price: number; Quantity: number }) => {
            return prev + curr.price * curr.Quantity * 1;
          },
          0
        ),
      };
      localStorage.setItem("Cart", JSON.stringify(latest));
      return latest;
    },
  },
});

export const { addToCart, removeFromCart, addQty } = dataSlice.actions;
export default dataSlice.reducer;
