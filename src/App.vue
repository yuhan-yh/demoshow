<!--
 * @Author: your name
 * @Date: 2022-10-01 15:27:53
 * @LastEditTime: 2022-10-01 22:42:33
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
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in carouselList" :key="item.name">
              <el-image @click="openUrl(item.href)" :src="item.imgSrc" />
              <!-- <h3 text="2xl" justify="center">{{ item.imgSrc }}</h3> -->
            </el-carousel-item>
          </el-carousel>
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
const openUrl = (href) => {
  console.log("🚀 ~ file: App.vue ~ line 66 ~ openUrl ~ href", href);
  if (href) {
    window.open(href);
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
      margin: 0 auto;
      width: $primaryWidth;
      .carouselBox {
        width: 100%;
        height: 250px;
        // overflow: hidden;
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
    }
  }
  .footer {
    font-size: 12px;
    height: 69px;
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
