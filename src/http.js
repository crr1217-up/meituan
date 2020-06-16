import axios from "axios";

// const axios = this.axios;
axios.defaults.baseURL = "https://open.duyiedu.com";
axios.interceptors.request.use((config) => { 
    config.params = {
			...config.params,
			appkey: "_Microcosm12_1581042792427",
		};
    return config;
})


function hotWords() { 
    return axios.get("/api/meituan/header/searchHotWords.json");
}
function searchKeyWords() { 
    return axios.get("/api/meituan/header/search.json");
}
function getNavData(){
    return axios.get("/api/meituan/index/nav.json");
}
function getBottomData() { 
    return axios.get("/api/meituan/index/resultsByKeywords.json");
}
function getRecommend() { 
    return axios.get("/api/meituan/list/recommend.json");
}
function getProvice() { 
    return axios.get("/api/meituan/city/province.json");
}
function getCity() {
	return axios.get("/api/meituan/city/cityList.json");
}
function getCurPosition() { 
    return axios.get("/api/meituan/city/getPosition.json");
}
function getHotCity() { 
    return axios.get("/api/meituan/city/hot.json");
}
function getRecentCity() { 
    return axios.get("/api/meituan/city/recents.json");
}
function getClassify() { 
    return axios.get("/api/meituan/list/classify.json");
}
function getAreaList() { 
    return axios.get("/api/meituan/list/areaList.json");
}
function goodsList(){
    return axios.get("/api/meituan/list/goodsList.json");
}
function goodDetail() { 
    return axios.get("/api/meituan/product/detail.json");
}
function logIn(params){
    return axios.get("/api/meituan/login", params);
}
function register(params) { 
    return axios.get("/api/meituan/register",params);
}

export default {
	hotWords,
	searchKeyWords,
	getNavData,
	getBottomData,
	getRecommend,
	getProvice,
	getCity,
	getCurPosition,
	getHotCity,
	getRecentCity,
	getClassify,
	getAreaList,
	goodsList,
	goodDetail,
	logIn,
	register,
};

