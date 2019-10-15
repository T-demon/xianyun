<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <div></div>

        <!-- 航班头部布局 -->
        <div>
          <FlightsHead />
        </div>

        <!-- 航班信息 -->
        <div>
          <FlightsItem 
          v-for="(item,index) in dataList" :key="index"
          :data="item"
          />
        </div>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
      </div>
    </el-row>
  </section>
</template>

<script>
import FlightsHead from "@/components/air/flightsListHead";
import FlightsItem from "@/components/air/flightsItem";

import moment from "moment";

export default {
  data() {
    return {
      flightsData: [],
      dataList: []
    };
  },

  components: {
    FlightsHead,
    FlightsItem
  },

  mounted() {
    this.$axios({
      url: "airs",
      params: this.$route.query
    }).then(res => {
        console.log(res.data);
        
      this.flightsData = res.data;
      this.dataList = this.flightsData.flights;
    });
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>