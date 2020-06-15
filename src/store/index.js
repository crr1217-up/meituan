import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	state: {
		province: "",
		searchInfo: "",
		userName: "",
		log:false
	},
	mutations: {
		changePro(state, newVal) {
			state.province = newVal;
		},
		changeSeaCon(state, newVal) {
			state.searchInfo = newVal;
			// console.log(state.searchInfo);
		},
		changeName(state, name) {
			console.log("name:",name);
			state.userName = name;
		},
		changeLogStatus(state,val) { 
			state.log = val;
		}
	},
	actions: {
		changeCity(context, newVal) {
			context.commit("changePro", newVal);
		},
		changeUserName(context,name) {
			context.commit("changeName", name);
		},
	},
	modules: {},
});
