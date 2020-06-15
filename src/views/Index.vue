<template>
  <div class="mainIndex">
    <div class="center">
      <el-row>
        <el-col :span="5">
          <left-menu />
        </el-col>
        <el-col :span="20" class="center-content">
          <center-detail />
        </el-col>
        
      </el-row>
      <el-row>
        <Elegant :res="typeRes1"/>
      </el-row>
      <el-row>
        <Elegant @sendData="receiveData" :likeList="list" :res="typeRes2"/>
      </el-row>
      <el-row>
        <Elegant :res="typeRes1"/>
      </el-row>
    </div>
  </div>
</template>

<script>
import LeftMenu from "@/components/leftMenu.vue";
import CenterDetail from "@/components/centerDetail.vue"
import Elegant from "@/components/elegant.vue"

export default {
  data(){
    return {
      typeRes1:{
        class: 'istyle',
        title: '有格调',
        lists:[
          {
            type:"all",
            text:"全部"
          },
          {
            type:"food",
            text:"约会聚餐",
          },
          {
            type:"spa",
            text:"丽人SPA"
          },
          
        ],
      },
      typeRes2:{
        class: 'movie',
        title: '猜你喜欢',
        lists:[
            {
              type:"all",
              text:"为你甄选最合适的"
            }      
        ],
      },
      list:[],
          
    };
  },
  components: {
    LeftMenu,
    CenterDetail,
    Elegant
  },
  methods:{
    receiveData(data){
      this.list=[];
      data.map((item)=>{
        const obj = {};
        obj.image = item.imgUrl;
        obj.title = item.title.split("（")[0];
        obj.subtitle = item.title;
        obj.address = item.areaName;
        obj.price=item.lowPrice;
        this.list.push(obj);

      });
      // console.log('===',this.list);
    }
  }
};
</script>
