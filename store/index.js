/*
import {ALL_SINGLE_PACKAGE} from "../graphql/allSinglePackage";

export const state = () => ({
  serviceItem: [],
  msg: "Hello"
});

export const mutations = {
  ALL_SINGLE_PACKAGE_DATA: (state, data) => {
    state.serviceItem = data
  }
};
export const actions = {
  async ALlSingleService({ commit }) {
    let response = await this.app.apolloProvider.defaultClient.query({query:ALL_SINGLE_PACKAGE})
    await commit("ALL_SINGLE_PACKAGE_DATA", response.data.commit)
    console.log(data);
  },
}
*/
