import {
  getApartmentsList,
  getApartmentById,
} from "../../services/apartments.service";

const initialState = {
  apartment: null,
  apartmentById: null,
};

export default {
  namespaced: true,
  state: { ...initialState },
  mutations: {
    setApartmentData(state, data) {
      state.apartment = data;
    },
    setApartmentByIdData(state, data) {
      state.apartmentById = data;
    },
    clearApartmentData(state) {
      Object.assign(state, { ...initialState });
    },
    clearApartmentByIdData(state) {
      state.apartmentById = null;
    },
  },
  actions: {
    async getApartmentsListData({ commit }, payload) {
      const { data } = await getApartmentsList(payload);
      commit("setApartmentData", data);
    },
    async getApartmentByIdData({ commit }, payload) {
      const { data } = await getApartmentById(payload);
      commit("setApartmentByIdData", data);
    },
  },
};
