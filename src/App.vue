<!--
 * @Author: your name
 * @Date: 2022-10-01 15:27:53
 * @LastEditTime: 2022-10-02 23:37:29
 * @LastEditors: yuhan
 * @Description: 
 * @FilePath: \demoshow\src\App.vue
-->

<template>
  <div class="index">
    <div class="header">
      <div class="content">众森</div>
    </div>
    <div class="main">
      <div class="content">
        <div class="carouselBox">
          <el-carousel :interval="4000" type="card" height="250px">
            <el-carousel-item v-for="item in carouselList" :key="item.name">
              <el-image @click="openUrl(item.href)" :src="item.imgSrc" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="demoBox">
          <el-tabs
            v-model="activeDemoType"
            class="demo-tabs"
            @tab-click="handleClick"
          >
            <el-tab-pane
              v-for="demoType in demoListData"
              :label="demoType.type"
              :name="demoType.type"
              :key="demoType.type"
            >
              <!-- web页面 -->
              <div class="cardBox web" v-if="demoType.key === 'web'">
                <div
                  class="demoCard"
                  v-for="demo in demoType.data"
                  :key="demo.name"
                  @click="openUrl(demo.href)"
                >
                  <el-image class="demoImg" :src="demo.imgSrc" />
                  <div class="descBox">
                    <p class="title">{{ demo.name }}</p>
                    <div class="desc">{{ demo.desc }}</div>
                  </div>
                </div>
              </div>
              <!-- 小程序 -->
              <div
                class="cardBox xiaochenxu"
                v-if="demoType.key === 'xiaochenxu'"
              >
                <div
                  class="demoCard"
                  v-for="demo in demoType.data"
                  :key="demo.name"
                  @mouseenter.self="hoverImg(demoType.key, demo, true)"
                  @mouseleave.self="hoverImg(demoType.key, demo, false)"
                >
                  <el-image class="demoImg" :src="demo.imgSrc" />
                  <div v-if="!demo.showHoverImg">
                    <div class="descBox">
                      <p class="title">{{ demo.name }}</p>
                      <div class="desc">{{ demo.desc }}</div>
                    </div>
                  </div>
                  <div class="hoverBox" v-else>
                    <el-image :src="demo.hoverImgSrc" />
                    <div class="label">扫描查看案例</div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="content">本页面案例解释权归众森所有</div>
    </div>
  </div>
  <!-- <RouterView /> -->
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
const carouselList = ref([
  {
    name: "案例一",
    imgSrc:
      "https://arthurbella.com/uploads/banner/20220607/481808cf0494ca670d1f1c53f82d6ef8.jpg",
    href: "https://arthurbella.com/",
  },
  {
    name: "案例二",
    imgSrc: "http://kejitest.com/Attached/thumbs/2022-08-06/62edd284f057b.png",
    href: "http://kejitest.com/",
  },
  {
    name: "案例三",
    imgSrc:
      "https://convergencemedia.boe.com.cn/jpeg/P0ke7iNPIDJxK6UtaYVZVXj3Drb6vr.jpeg",
    href: "https://boe.zhiye.com/",
  },
  {
    name: "案例四",
    imgSrc:
      "https://img-qy.albiz.cn/img/exhibition/e/8/e8eb267b2aa886b9021_s.jpg",
    href: "https://boe.zhiye.com/",
  },
]);
const activeDemoType = ref("web页面");
const demoListData = ref([
  {
    type: "web页面",
    key: "web",
    data: [
      {
        name: "科技评测",
        href: "http://kejitest.com/", // web的多了跳转页面
        imgSrc:
          "http://kejitest.com/Attached/thumbs/2022-08-06/62edd284f057b.png",
        showHoverImg: false,
        desc: "java后端，利用《学生综合发展潜能测评与分析解（Assessment of Potentials to the Students，简称APS）》提供的参考算法，对儿童青少年阶段各方面综合评估并提供指导意见的系统。",
      },
      {
        name: "京东方招聘网站",
        href: "https://boe.zhiye.com/",
        imgSrc:
          "https://convergencemedia.boe.com.cn/jpeg/P0ke7iNPIDJxK6UtaYVZVXj3Drb6vr.jpeg",
        showHoverImg: false,
        desc: "京东方（BOE）招聘平台，多渠道多条件筛选。采用北森招聘系统集成API开发，java作为后端语言。并有上传简历，简历解析，投递岗位功能",
      },
      {
        name: "不动产登记信息三维可视化平台",
        href: "http://118.31.5.204/xiaogan_budongchan/#/",
        imgSrc: "http://www.zhongsenly.cn/1/images/qrcode/11.jpg",
        showHoverImg: false,
        desc: "不动产三维可视化平台，基于three.js以及Mars3D三维可视化等技术，该平台主要用于展示该地区不动产资源以及楼盘等数据，可通过3d模型的交互下钻查看具体楼盘楼层以及户型信息.",
      },
      {
        name: "亚瑟贝拉外贸",
        href: "https://arthurbella.com/",
        imgSrc:
          "https://arthurbella.com/uploads/banner/20220607/481808cf0494ca670d1f1c53f82d6ef8.jpg",
        showHoverImg: false,
        desc: "php+vue外贸商城，中英双语，后台语言包。paypal支付+stripe支付，facebook+google第三方登录",
      },
      {
        name: "铝加网",
        href: "https://albiz.cn/",
        imgSrc:
          "https://img-qy.albiz.cn/img/exhibition/e/8/e8eb267b2aa886b9021_s.jpg",
        showHoverImg: false,
        desc: "铝产业咨询平台，同铝加云展数据互通。vue+php后端，有铝厂云展，视频直播，线上咨询，各大铝厂交流等功能，有坚美铝业，伟业铝业等大厂入驻平台",
      },
    ],
  },
  {
    type: "小程序",
    key: "xiaochenxu",
    data: [
      {
        name: "哪呼小程序",
        imgSrc:
          "http://xc.nahu.xyz/uploads/banner/20210927/f1486571e1e49bca42a33f7d75cff3a7.jpg",
        showHoverImg: false,
        hoverImgSrc: "http://www.zhongsenly.cn/1/images/qrcode/1.png", // 小程序多了二维码
        desc: "微信小程序，java后端，redis队列。活动参与，报名，线上支付，排队等功能",
      },
      {
        name: "铝加云展小程序",
        imgSrc:
          "https://img-qy.albiz.cn/img/exhibition/e/8/e8eb267b2aa886b9021_s.jpg",
        showHoverImg: false,
        hoverImgSrc:
          "http://www.zhongsenly.cn/1/images/qrcode/%E5%9B%BE%E7%89%872.png",
        desc: "微信小程序，后端php,铝产业相关，铝咨询，询盘，展会，小程序直播",
      },
      {
        name: "默默家居小程序商场",
        imgSrc:
          "https://www.yuegekeji.cn/uploads/20191121/4eec98a74979bbeaf98d843d9ec4c6fc.jpg",
        showHoverImg: false,
        hoverImgSrc: "http://www.zhongsenly.cn/1/images/qrcode/4.png",
        desc: "家居小程序商场。php后端+小程序，微信线上支付，三级分类，商品sku编辑，对接快递物流接口",
      },
      {
        name: "乐自造小程序",
        imgSrc:
          "https://zhengxin-pub.cdn.bcebos.com/financepic/37206748a7af7396d7b3dc471a7cffe6_fullsize.jpg",
        showHoverImg: false,
        hoverImgSrc: "http://www.zhongsenly.cn/1/images/qrcode/3.png",
        desc: "乐自造微信小程序。php后端+小程序，主要数据展示，对接企业微信api以及微伴数据，通过企业微信渠道码分销绑定系统上下级数据",
      },
    ],
  },
]);
const openUrl = (href) => {
  console.log("🚀 ~ file: App.vue ~ line 66 ~ openUrl ~ href", href);
  if (href) {
    window.open(href);
  }
};
const hoverImg = (demoTypeKey, demo, showHoverImg) => {
  console.log(
    "🚀 ~ file: App.vue ~ line 202 ~ hoverImg ~ demoType",
    demoTypeKey
  );
  if (demoTypeKey) {
    // 找到该案例类型的案例集合
    const targetDemoTypeIndex = demoListData.value.findIndex(
      (item) => item.key === demoTypeKey
    );
    const targetIndex = demoListData.value[targetDemoTypeIndex].data.findIndex(
      (item) => item.name === demo.name
    );
    demoListData.value[targetDemoTypeIndex].data[targetIndex].showHoverImg =
      showHoverImg;
    console.log(
      "demoListData.value[targetDemoTypeIndex].data[targetIndex].showHoverImg",
      demoListData.value[targetDemoTypeIndex].data[targetIndex].showHoverImg
    );
  }
};
</script>

<style lang="scss" scoped>
.index {
  .header {
    height: 64px;
    line-height: 64px;
    border-bottom: solid 1px rgba(0, 11, 23, 0.04);
    &:hover {
      background-color: rgb(255, 235, 135, 0.3);
    }
    .content {
      margin: 0 auto;
      width: $primaryWidth;
      color: $primaryColor4;
      font-size: 22px;
      letter-spacing: 2px;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
  }
  .main {
    .content {
      .carouselBox {
        margin: 0 auto;
        width: $primaryWidth;
        .el-carousel {
          .el-carousel__item {
            box-shadow: 4px 4px 2px 1px rgba(41, 41, 41, 0.2);
          }
          .el-image {
            width: 100%;
            height: 100%;
          }
          // .el-carousel__item h3 {
          // color: #475669;
          // opacity: 0.75;
          // line-height: 150px;
          //   margin: 0;
          //   text-align: center;
          // }
          // .el-carousel__item:nth-child(2n) {
          //   background-color: #99a9bf;
          // }

          // .el-carousel__item:nth-child(2n + 1) {
          //   background-color: #d3dce6;
          // }
        }
      }
      .demoBox {
        background-color: $primaryColorBG;
        padding: 20px 0;
        :deep(.el-tabs) {
          margin: 0 auto;
          width: $primaryWidth;
          .el-tabs__header {
            .el-tabs__nav-wrap {
              &::after {
                background-color: rgba(0, 11, 23, 0) !important;
              }
              .el-tabs__nav-scroll {
                display: flex;
                justify-content: center;
                .el-tabs__nav {
                  float: none;
                }
              }
            }
            .el-tabs__active-bar {
              background-color: $primaryColor3;
            }
            .el-tabs__item {
              font-size: 16px;
              font-weight: bold;
              &:hover {
                color: $primaryColor3;
              }
            }
            .is-active {
              color: $primaryColor3;
            }
          }

          .el-tabs__content {
            .el-tab-pane {
              width: 100%;
              .cardBox {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                // justify-content: space-between;

                .demoCard {
                  margin: 20px 20px 40px 20px;
                  width: 278px;
                  height: 400px;
                  border: 1px solid #e5e7eb;
                  border-radius: 6px;
                  overflow: hidden;
                  position: relative;
                  box-shadow: 0 3px 10px 1px rgb(49 49 49 / 20%);
                  transition-duration: 0.3s;
                  &:hover {
                    transform: translateY(-15px);
                  }
                  .demoImg {
                    width: 100%;
                    height: 150px;
                  }
                  .descBox {
                    background-color: #fff;
                    width: 100%;
                    height: 260px;
                    position: absolute;
                    bottom: 0;
                    border-radius: 6px;

                    .title {
                      font-size: 20px;
                      font-weight: 600;
                      text-align: center;
                      // text-indent: 20px;
                      font-family: "Lucida Sans", "Lucida Sans Regular",
                        "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana,
                        sans-serif;
                    }
                    .desc {
                      max-height: 150px;
                      padding: 0 20px;
                      color: #676b73;
                      font-size: 14px;
                      line-height: 150%;
                      word-break: break-all;
                      text-overflow: ellipsis;
                      overflow: hidden;
                      // text-overflow: ellipsis;
                      // white-space: wrap;
                      // word-break: break-all;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 7;
                    }
                  }
                  .hoverBox {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 220px;
                    padding-top: 80px;
                    background-image: linear-gradient(
                      rgba(255, 255, 255, 0) 10%,
                      rgb(255, 255, 255) 15%,
                      rgb(255, 255, 255) 100%
                    );
                    display: flex;
                    flex-flow: wrap;
                    justify-content: center;
                    align-items: center;
                    .el-image {
                      width: 150px;
                      height: 150px;
                    }
                    .label {
                      width: 100%;
                      text-align: center;
                      font-size: 12px;
                      line-height: 40px;
                      color: #676b73;
                    }
                  }
                }
              }
              .web {
                .demoCard {
                  cursor: pointer;
                }
              }
              .xiaochenxu {
              }
            }
          }
        }
      }
    }
  }
  .footer {
    font-size: 12px;
    height: 69px;
    line-height: 69px;
    border-top: 1px solid rgba(0, 11, 23, 0.04);
    color: rgba(26, 34, 51, 0.5);
    .content {
      text-align: center;
      margin: 0 auto;
      width: $primaryWidth;
    }
  }
}
</style>
