<template>
  <div>
    <!-- 评论楼层 -->
    <div class="comment-floor">
      <comment v-if="data.parent" :data="data.parent" @handleReply="handleReply"></comment>

      <div class="user">
        <img
          :src="$axios.defaults.baseURL + data.account.defaultAvatar"
          v-if="data.account.defaultAvatar"
        />
        <span>{{data.account.nickname}}</span>
        <span>2019-19-16 6:06</span>
        <span class="level">{{data.level}}</span>
      </div>

      <div class="floor-header">
        <span class="text">{{data.content}}</span>

        <div>
          <!-- <img
            :src="$axios.defaults.baseURL+ data.pics[0].url"
               v-if="data.pics[0].url"
          /> -->
        </div>
        <em @click="handleReply">回复</em>
      </div>

      <div class="comment-content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: {
    data: {
      type: Object,
      default: {}
    }
  },

  methods: {
    handleReply() {
      this.$emit("handleReply", this.data);
    }
  }
};
</script>

<style scoped lang="less">
.comment-floor {
  padding: 10px;
  background: #f6f6f6;

  .user {
    font-size: 14px;
    line-height: 15px;
    display: flex;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
      border-radius: 50px;
    }
    .level {
      padding: 0 10px;
      flex: 1;
      text-align: right;
    }
  }
  .floor-header {
    font-size: 13px;
    color: #666;
    padding: 20px 0;
    i {
      font-size: 12px;
      color: #999;
    }
    em {
      float: right;
      cursor: pointer;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
}

.comment-floor:not(:first-child) {
  border-top: none;
}
</style>