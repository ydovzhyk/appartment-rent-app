import { createStore } from "vuex";
import authModule from "./modules/auth";
import apartmentModule from "./modules/apartment";

const persistedState = (store) => {
  store.subscribe((mutation, state) => {
    if (mutation.type.startsWith("auth/")) {
      localStorage.setItem(
        "apartment-rent-auth",
        JSON.stringify(state.auth.token)
      );
    }
  });
};

const store = createStore({
  modules: {
    auth: authModule,
    apartment: apartmentModule,
  },
  plugins: [persistedState],
});

export default store;
