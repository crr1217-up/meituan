<template>
  <div class="catalog">
    <div class="fenlei">
      <span class="title">分类:</span>
      <Catalog v-if="flag" :list="classifyList" />
    </div>
    <div class="fenlei">
      <span class="title">全部:</span>
      <Catalog :list="allList" />
    </div>
  </div>
</template>

<script>
import api from "@/http.js";
import Catalog from "./catalog.vue";

export default {
  components: {
    Catalog
  },

  data() {
    return {
      // classifyList:{
      //           "美食":["日本菜","饮品店","面包甜点"],
      //           "酒店住宿":["温泉酒店","经济型酒店","高端酒店"]
      //       },
      classifyList:{},
      flag:false,
      allList: {
        推荐商圈: ["望京", "昌平"],
        南岗区: [
          "中央大街",
          "西客站",
          "花园街",
          "通乡街/果园街",
          "爱建社区",
          "学府路"
        ]
      }
    };
  },
  created() {
    const self = this;
    api.getClassify().then(res => {
      // console.log("classify:",res);
      res.data.data.forEach(item => {
        if (!self.classifyList[item.title]) {
          self.classifyList[item.title] = [];
        }
        self.classifyList[item.title].push(
          ...item.subList.map(item1 => {
            return item1.name;
          })
        );
        self.flag=true;
      });
    });
  }
};
</script>

<style lang="less">
.catalog {
  width: 950px;
  margin-top: 10px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 15px 20px;
  .fenlei {
    display: flex;
    padding: 15px 20px 0;
    .title {
      width: 80px;
      text-align: left;
    }
    &:nth-of-type(2) {
      .detail {
        border-bottom-color: transparent;
      }
    }
  }
}
</style>
