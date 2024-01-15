import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;

// export const INCREMENT = "INCREMENT";
// export const DECREMENT = "DECREMENT";
// export const TOGGLE = "TOGGLE";
// export const INCREASE = "INCREASE";

// const counterReducer = (state = INITIAL_STATE, action) => {
//   if (action.type === INCREMENT) {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === INCREASE) {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === DECREMENT) {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === TOGGLE) {
//     console.log("toggle");
//     //     return {
//     //       counter: state.counter,
//     //       showCounter: !state.showCounter,
//     //     };
//     //   });
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };
