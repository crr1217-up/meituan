<template>
  <div class="goods">
    <div class="center">
      <p class="crumb">
        {{ province }}美团 > {{ province }}{{ $route.params.good }}
      </p>
      <el-row>
        <goods-catalog />
      </el-row>
      <el-row>
        <goods-detail @isShow="handleShow" />
      </el-row>
      <guess-like v-if="toShow" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import goodsCatalog from "@/components/goodsCatalog.vue";
import goodsDetail from "@/components/goodsDetail.vue";
import guessLike from "@/components/guessLike.vue";

export default {
  components: {
    goodsCatalog,
    goodsDetail,
    guessLike
  },
  computed: {
    ...mapState(["province"])
  },
  data(){
      return {
          toShow:true,
      }
  },
  methods:{
      handleShow(flag){
          this.toShow=flag;
      }
  }
};
</script>

<style lang="less">
.crumb {
  padding-top: 10px;
  margin: 10px 0;
  color: #222;
  font-size: 12px;
}
</style>
