<template>
  <div class="main">
    <div class="hotel_address">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="nav_bar">
        <el-breadcrumb-item :to="{ path: '/' }">酒店</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">{{hotelInfo.real_city}}酒店</el-breadcrumb-item>
        <el-breadcrumb-item>{{hotelInfo.name}}</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="title">
        <span>{{hotelInfo.name}}</span>
        <em class="el-icon-star-on"></em>
        <em class="el-icon-star-on"></em>
        <em class="el-icon-star-on"></em>
        <em class="el-icon-star-on"></em>
        <em class="el-icon-star-on"></em>
        <br />
        <p>{{hotelInfo.alias}}</p>
        <br />
        <i class="el-icon-location"></i>
        <p>{{hotelInfo.address}}</p>
      </div>
    </div>

    <el-row type="flex" class="picture" v-if="hotelInfo.pics">
      <div class="picture_l">
        <!-- <img :src="$axios.defaults.baseURL + hotelInfo.pics[0].url"/> -->
        <img
          src="https://desk-fd.zol-img.com.cn/t_s144x90c5/g4/M0A/0F/03/ChMly12pFe2IcOZmABV61Yx0_4IAAYLUwDXpDoAFXrt994.jpg"
          ref="mainPic"
        />
      </div>
      <div class="picture_r">
        <div @click="changePic_a">
          <img
            src="https://desk-fd.zol-img.com.cn/t_s144x90c5/g4/M0A/0F/03/ChMly12pFe2IcOZmABV61Yx0_4IAAYLUwDXpDoAFXrt994.jpg"
          />
        </div>
        <div @click="changePic_b">
          <img
            src="https://desk-fd.zol-img.com.cn/t_s144x90c5/g1/M08/01/05/ChMljl2pFc6IO9mKAA_G5Wuxy-AAAQA_AK48BUAD8b9594.jpg"
          />
        </div>
        <div @click="changePic_c">
          <img
            src="https://desk-fd.zol-img.com.cn/t_s144x90c5/g1/M09/01/05/ChMljl2pFdSIMTlcAAwGak1F0bYAAQA_QBhVuMADAaC495.jpg"
          />
        </div>
        <div @click="changePic_d">
          <img
            src="https://desk-fd.zol-img.com.cn/t_s144x90c5/g1/M09/01/05/ChMljV2pFdqILgFlABIkFH3Nb7YAAQA_QFrQ1sAEiQs206.jpg"
          />
        </div>
        <div @click="changePic_e">
          <img
            src="https://desk-fd.zol-img.com.cn/t_s144x90c5/g4/M09/0F/03/ChMlzF2pFeGIUSTAABN342jK4HAAAYLUgIULEQAE3f7610.jpg"
          />
        </div>
        <div @click="changePic_f">
          <img
            src="https://desk-fd.zol-img.com.cn/t_s144x90c5/g4/M0A/0F/03/ChMlzF2pFfiIPGxYAAbcUF1ShhUAAYLUwNyejkABtxo383.jpg"
          />
        </div>
      </div>
    </el-row>

    <el-row type="flex" class="hotel_info" v-if="hotelInfo.products">
      <div class="info_title">
        <div>价格来源</div>
        <div>低价房型</div>
        <div>最低价格/每晚</div>
      </div>
      <a href="https://www.ctrip.com/">
        <div>{{hotelInfo.products[0].name}}</div>
        <div>{{hotelInfo.products[0].bestType}}</div>
        <div>
          <i>￥</i>
          <span>{{hotelInfo.products[0].price}}</span> 起
          <i class="el-icon-arrow-right"></i>
        </div>
      </a>
      <a href="http://www.elong.com/">
        <div>{{hotelInfo.products[1].name}}</div>
        <div>{{hotelInfo.products[1].bestType}}</div>
        <div>
          <i>￥</i>
          <span>{{hotelInfo.products[1].price}}</span> 起
          <i class="el-icon-arrow-right"></i>
        </div>
      </a>
      <a href="https://www.hotels.cn">
        <div>{{hotelInfo.products[2].name}}</div>
        <div>{{hotelInfo.products[2].bestType}}</div>
        <div>
          <i>￥</i>
          <span>{{hotelInfo.products[2].price}}</span> 起
          <i class="el-icon-arrow-right"></i>
        </div>
      </a>
    </el-row>

    <div class="map">
      <HotelMap :hotelInfo="hotelInfo"></HotelMap>
    </div>

    <el-row type="flex" class="hotel_info_two">
      <div class="base_info">
        <div>基本信息</div>
        <div>入住时间: 14:00之后</div>
        <div>离点时间: 12:00之前</div>
        <div>{{hotelInfo.creation_time}}/{{hotelInfo.renovat_time}}</div>
        <div>酒店规模：{{hotelInfo.roomCount}}间客房</div>
      </div>
      <div class="main_equipment">
        <div>主要设施</div>
        <div>
          <span>wifi</span>
        </div>
      </div>
      <div class="park">
        <div>停车服务</div>
        <div>{{hotelInfo.parking}}</div>
      </div>
      <div class="brand">
        <div>品牌信息</div>
        <div>-</div>
      </div>
    </el-row>

    <div class="comment">
      <div class="true_comment">
        <h3>0条真实用户评论</h3>
      </div>
      <el-row type="flex" class="num_code">
        <div class="num">
          <div>总评分：{{hotelInfo.all_remarks}}</div>
          <div>好评数：{{hotelInfo.good_remarks}}</div>
          <div>差评数：{{hotelInfo.bad_remarks}}</div>
        </div>
        <div class="code">
          <div class="code_one">
            <el-rate
              v-model="hotelInfo.stars"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}分"
            ></el-rate>
          </div>

          <div class="code_two" v-if="hotelInfo.scores">
            <div class="two_in">
              <div>环境</div>
              <div>{{hotelInfo.scores.environment}}</div>
            </div>
            <el-progress
              v-if="hotelInfo.scores"
              type="circle"
              :percentage="hotelInfo.scores.environment * 10"
              color="#ff9900"
            ></el-progress>
          </div>

          <div class="code_three" v-if="hotelInfo.scores">
            <div class="three_in">
              <div>产品</div>
              <div>{{hotelInfo.scores.product}}</div>
            </div>
            <el-progress
              v-if="hotelInfo.scores"
              type="circle"
              :percentage="hotelInfo.scores.product * 10"
              color="#ff9900"
            ></el-progress>
          </div>

          <div class="code_four" v-if="hotelInfo.scores">
            <div class="four_in">
              <div>服务</div>
              <div>{{hotelInfo.scores.service}}</div>
            </div>
            <el-progress
              v-if="hotelInfo.scores"
              type="circle"
              :percentage="hotelInfo.scores.service * 10"
              color="#ff9900"
            ></el-progress>
          </div>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
import HotelMap from "@/components/hotel/hotelMap";

export default {
  data() {
    return {
      //酒店信息
      hotelInfo: {}
    };
  },

  mounted() {
    this.$axios({
      url: "/hotels?id=5"
    }).then(res => {
      this.hotelInfo = res.data.data[0];
      console.log(this.hotelInfo);

      localStorage.setItem("loc_one", this.hotelInfo.location.latitude);
      localStorage.setItem("loc_two", this.hotelInfo.location.longitude);
    });
  },

  methods: {
    changePic_a() {
      var pic = this.$refs.mainPic;
      pic.src =
        "https://desk-fd.zol-img.com.cn/t_s144x90c5/g4/M0A/0F/03/ChMly12pFe2IcOZmABV61Yx0_4IAAYLUwDXpDoAFXrt994.jpg";
    },
    changePic_b() {
      var pic = this.$refs.mainPic;
      pic.src =
        "https://desk-fd.zol-img.com.cn/t_s144x90c5/g1/M08/01/05/ChMljl2pFc6IO9mKAA_G5Wuxy-AAAQA_AK48BUAD8b9594.jpg";
    },
    changePic_c() {
      var pic = this.$refs.mainPic;
      pic.src =
        "https://desk-fd.zol-img.com.cn/t_s144x90c5/g1/M09/01/05/ChMljl2pFdSIMTlcAAwGak1F0bYAAQA_QBhVuMADAaC495.jpg";
    },
    changePic_d() {
      var pic = this.$refs.mainPic;
      pic.src =
        "https://desk-fd.zol-img.com.cn/t_s144x90c5/g1/M09/01/05/ChMljV2pFdqILgFlABIkFH3Nb7YAAQA_QFrQ1sAEiQs206.jpg";
    },
    changePic_e() {
      var pic = this.$refs.mainPic;
      pic.src =
        "https://desk-fd.zol-img.com.cn/t_s144x90c5/g4/M09/0F/03/ChMlzF2pFeGIUSTAABN342jK4HAAAYLUgIULEQAE3f7610.jpg";
    },
    changePic_f() {
      var pic = this.$refs.mainPic;
      pic.src =
        "https://desk-fd.zol-img.com.cn/t_s144x90c5/g4/M0A/0F/03/ChMlzF2pFfiIPGxYAAbcUF1ShhUAAYLUwNyejkABtxo383.jpg";
    }
  },

  components: {
    HotelMap
  }
};
</script>

<style scoped lang="less">
.main {
  width: 1000px;
  margin: 20px auto;
  .hotel_address {
    /deep/.nav_bar {
      margin-bottom: 20px;
    }
    .title {
      margin-bottom: 35px;
      span {
        font-size: 26px;
      }
      em {
        color: #ff9900;
      }
      i {
        color: #666;
      }
      p {
        display: inline;
        color: #666;
      }
    }
  }

  .picture {
    margin-bottom: 58px;
    .picture_l {
      flex: 3;
      padding-right: 20px;
      img {
        display: block;
        width: 100%;
      }
    }
    .picture_r {
      flex: 2;
      display: flex;
      flex-wrap: wrap;

      div {
        width: 50%;
        box-sizing: border-box;
        margin-bottom: 18px;
        padding-right: 20px;

        img {
          display: block;
          width: 100%;

          cursor: pointer;
        }
      }
    }
  }
  .hotel_info {
    flex-direction: column;
    margin-bottom: 58px;
    .info_title {
      display: flex;
      div {
        height: 60px;
        line-height: 60px;
        color: #909399;
        font-weight: 600;
        border-bottom: 1px solid #ccc;
        &:nth-child(1) {
          width: 420px;
          padding-left: 15px;
        }
        &:nth-child(2) {
          width: 420px;
        }
        &:nth-child(3) {
          width: 160px;
        }
      }
    }
    a {
      display: block;
      width: 100%;
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #ccc;
      text-decoration: none;
      display: flex;
      &:hover {
        background-color: #f5f7fa;
        transition: all 0.5s;
      }
      div {
        color: #666;
        &:nth-child(1) {
          width: 420px;
          padding-left: 15px;
          i {
            color: #ff9b00;
          }
          span {
            color: #ff9b00;
          }
        }
        &:nth-child(2) {
          width: 420px;
          i {
            color: #ff9b00;
          }
          span {
            color: #ff9b00;
          }
        }
        &:nth-child(3) {
          width: 160px;
          i {
            color: #ff9b00;
          }
          span {
            color: #ff9b00;
          }
        }
      }
    }
  }
  .map {
    margin-bottom: 58px;
    width: 650px;
    height: 360px;
  }
  .hotel_info_two {
    flex-direction: column;
    margin-bottom: 58px;
    div {
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #ccc;
    }
    .base_info {
      display: flex;
      div {
        margin-right: 50px;
        color: #666;
        &:nth-child(1) {
          color: #000;
          padding-left: 15px;
        }
      }
    }
    .main_equipment {
      display: flex;
      div {
        margin-right: 15px;
        color: #666;
        &:nth-child(1) {
          color: #000;
          margin-right: 50px;
          padding-left: 15px;
        }
        span {
          padding: 6px 15px 6px 15px;
          background-color: #eee;
          border-radius: 8px;
        }
      }
    }
    .park {
      display: flex;
      div {
        margin-right: 50px;
        color: #666;
        &:nth-child(1) {
          color: #000;
          padding-left: 15px;
        }
      }
    }
    .brand {
      display: flex;
      div {
        margin-right: 50px;
        color: #666;
        &:nth-child(1) {
          color: #000;
          padding-left: 15px;
        }
      }
    }
  }

  .comment {
    .num_code {
      .num {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 99px;
      }
      .code {
        display: flex;
        .code_one {
          margin-right: 58px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .code_two {
          margin-right: 58px;
          position: relative;
          .two_in {
            text-align: center;
            background-color: #ffffff;
            position: absolute;
            color: #ff9900;
            font-size: 27px;
            z-index: 999;
            left: 36px;
            top: 45px;
            div {
              &:nth-child(2) {
                font-size: 20px;
              }
            }
          }
        }
        .code_three {
          margin-right: 58px;
          position: relative;
          .three_in {
            text-align: center;
            background-color: #ffffff;
            position: absolute;
            color: #ff9900;
            font-size: 27px;
            z-index: 999;
            left: 36px;
            top: 45px;
            div {
              &:nth-child(2) {
                font-size: 20px;
              }
            }
          }
        }
        .code_four {
          position: relative;
          .four_in {
            text-align: center;
            background-color: #ffffff;
            position: absolute;
            color: #ff9900;
            font-size: 27px;
            z-index: 999;
            left: 36px;
            top: 45px;
            div {
              &:nth-child(2) {
                font-size: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>