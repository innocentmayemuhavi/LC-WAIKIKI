import { createSlice } from "@reduxjs/toolkit";
export const initialState =
  localStorage.getItem("Cart") === null
    ? {
        clothes: [] as any,
        total: 0 as any,
      }
    : JSON.parse(localStorage.getItem("Cart") as any);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newData = state.clothes;
      newData.push(action.payload);
      const updated = {
        ...state,
        clothes: newData,
        total: newData.reduce((prev: any, curr: any) => {
          return prev + curr.price * curr.Quantity * 1;
        }, 0),
      };
      localStorage.setItem("Cart", JSON.stringify(updated));
    },
    removeFromCart: (state, action) => {
      const updated = {
        ...state,
        clothes: state.clothes.filter(
          (data: any) =>
            data.title !== action.payload.title ||
            data.size !== action.payload.size
        ),
        total: state.clothes.reduce((prev: any, curr: any) => {
          return prev + curr.price * curr.Quantity * 1;
        }, 0),
      };
      const latest = {
        ...updated,
        clothes: updated.clothes,
        total: updated.clothes.reduce((prev: any, curr: any) => {
          return prev + curr.price * curr.Quantity * 1;
        }, 0),
      };
      localStorage.setItem("Cart", JSON.stringify(latest));
      return latest;
    },
    addQty: (state, action) => {
      const updated = {
        ...state,
        clothes: state.clothes.map((data: any) => {
          return data.title === action.payload.title &&
            data.size === action.payload.size
            ? { ...data, Quantity: event.target.value as number }
            : data;
        }),
        total: state.clothes.reduce((prev: any, curr: any) => {
          return prev + curr.price * curr.Quantity * 1;
        }, 0),
      };
      const latest = {
        ...updated,
        clothes: updated.clothes,
        total: updated.clothes.reduce((prev: any, curr: any) => {
          return prev + curr.price * curr.Quantity * 1;
        }, 0),
      };
      localStorage.setItem("Cart", JSON.stringify(latest));
      return latest;
    },
  },
});
export const { addToCart, removeFromCart, addQty } = dataSlice.actions;
export default dataSlice.reducer;
