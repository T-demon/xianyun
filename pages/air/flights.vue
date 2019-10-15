<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <div>
          <FlightsFilters :data="cacheFlightsData" />
        </div>

        <!-- 航班头部布局 -->
        <div>
          <FlightsHead />
        </div>

        <!-- 航班信息 -->
        <div>
          <FlightsItem
            v-for="(item,index) in dataList"
            :key="index"
            :data="item"
            v-loading="loading"
          />

          <!-- 分页 -->
          <el-row type="flex" justify="center" style="margin-top:10px;">
            <!-- size-change：切换条数时候触发 -->
            <!-- current-change：选择页数时候触发 -->
            <!-- current-page: 当前页数 -->
            <!-- page-size：当前条数 -->
            <!-- total：总条数 -->
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageIndex"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="flightsData.total"
            ></el-pagination>
          </el-row>
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
import FlightsFilters from "@/components/air/flightsFilters.vue";

import moment from "moment";

export default {
  components: {
    FlightsHead,
    FlightsItem,
    FlightsFilters
  },

  data() {
    return {
      flightsData: {
        flights: []
      },

      cacheFlightsData: {
        flights: [],
        info: {},
        options: {}
      },

      pageIndex: 1,
      pageSize: 5,
      loading: true
    };
  },

  mounted() {
    this.$axios({
      url: "airs",
      params: this.$route.query
    }).then(res => {
      console.log(res.data);
      this.flightsData = res.data;
      this.cacheFlightsData={...res.data}
    });
    this.loading = false;
  },

  methods: {
    //   分页条数切换时触发
    handleSizeChange(val) {
      this.pageSize = val;
    },

    // 分页页数切换
    handleCurrentChange(val) {
      this.pageIndex = val;
    }
  },

  computed: {
    dataList() {
      const arr = this.flightsData.flights.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
      return arr;
    }
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