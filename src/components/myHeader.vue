<template>
    <div class="myHeader">
        <top-bar />
        <search-bar />
    </div>
</template>

<script>
import TopBar from "./topBar.vue";
import SearchBar from "./searchBar.vue";
export default {
    components:{
        TopBar,
        SearchBar
    }
}
</script>

<style lang="less">
.myHeader{
    width:100%;
}
</style>