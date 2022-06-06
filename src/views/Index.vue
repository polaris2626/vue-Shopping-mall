<template>
  <div id="a1">
    <div class="banner">
      <div class="banner-1"></div>
      <div class="banner-2"></div>
    </div>
    <div class="a3">
      <div class="a3-2">
        <!-- 当前未登录 -->
        <router-link to="/home">{{ dl }}</router-link>
      </div>
      <div class="a3-3" v-if="dl != '当前未登录，请点此登录'">
        <!-- 退出登录 -->
        <button @click="removeid()">{{ tc }}</button>
      </div>
    </div>
    <div class="a4">
      <div class="a5">
        <input placeholder="请输入商品名称..." id="a5-1" v-model="sc" />
        <button id="btn" type="primary" @click="search1(sc)">搜索</button>
      </div>
      <div class="a6">
        <div class="a6-1">
          <!-- 购物车 -->
          <router-link to="/cart" class="a6-2">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </router-link>
          <div class="a6-3">{{ length }}</div>
        </div>
      </div>
    </div>
    <div id="a7">
      <ul>
        <li id="a7-1" @click="transformNext('手机')">手机</li>
        <li @click="transformNext('电视')">电视</li>
        <li @click="transformNext('配件')">配件</li>
      </ul>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      sc: "",
      dl: "当前未登录，请点此登录",
      tc: "退出登录",
    };
  },
  created: function () {
    if (sessionStorage.getItem("name")) {
      var gwcs = JSON.parse(
        localStorage.getItem("gwcs" + sessionStorage.getItem("name"))
      );
      if (gwcs != null) {
        this.$store.state.carts = gwcs;
      } else {
        this.$store.state.carts = [];
      }
    }
  },
  mounted() {
    if (sessionStorage.getItem("name") != null) {
      this.dl = "欢迎您  " + sessionStorage.getItem("name") + "!";
    }
  },
  computed: {
    ...mapState(["carts"]),
    length() {
      return this.carts.length;
    },
  },
  methods: {
    transformNext(msg) {
      this.$router.push({
        path: "/display",
        query: { type: msg },
      });
    },
    search1(msg) {
      this.$router.push({
        path: "/display",
        query: { search: msg },
      });
    },
    removeid() {
      if (sessionStorage.getItem("name") == null) {
        alert("亲，您还没有登录哦~");
      } else {
        sessionStorage.removeItem("name");
        alert("已成功退出登录！");
        this.$router.push({
          path: "/display",
          query: { type: "手机" },
        });
        this.dl = "当前未登录，请点此登录";
      }
    },
  },
};
</script>

<style scoped>
#a1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #637791;
  /* background: url(../data/imgs/bg.jpeg) center no-repeat; */
  width: 1300px;
  border: 1px solid #ff7e00;
  margin: auto;
  overflow: hidden;
  border-radius: 10px;
  padding: 0px 10px 10px 10px;
}
.banner {
  /* border: red 10px solid; */
  width: 1300px;
  height: 220px;
}
.banner-1 {
  /* border: red 10px solid; */
  width: 50px;
  height: 50px;
  margin-left: 0;
  background: url(../data/imgs/mi-logo.png) center no-repeat;
}
.banner-2 {
  /* border: red 10px solid; */
  background: url(../data/imgs/banner-1.png);
  width: 1300px;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 40px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.a3-2 {
  /* border: red 10px solid; */
  width: 300px;
  font-size: 16px;
  text-align: left;
  margin-left: 1100px;
}
.a3-3 {
  /* border: red 10px solid; */
  width: 100px;
  color: #637791;
  font-size: 18px;
  text-align: left;
  margin-left: 1200px;
  margin-top: -25px;
}
.a3-3 button{
  background: #ff7e00;
}
.a3-3 button:hover{
  background: #ccc;
  cursor: pointer;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;
  box-shadow: 1px 1px 1px 1px #ff7e00;
}

.a4-1 {
  width: 180px;
  height: 90px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  float: left;
  margin-left: 150px;
}
.a5 {
  float: left;
  width: 800px;
  height: 100px;
  line-height: 100px;
  margin-left: 200px;
  /* border: red 1px solid; */
}
#btn {
  background: #eee;
  width: 150px;
  height: 40px;
  border: 2px #ff7e00 solid;
  border-radius: 10px;
}
#btn:hover {
  background: #ff7e00;
  border: 2px #2f4f4f solid;
  /* border: 2px #eee solid; */
  cursor: pointer;
  transform: scale(1.0);
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;
  box-shadow: 1px 2px 5px 5px gray;
}
#a5-1 {
  background: #fff;
  width: 600px;
  height: 40px;
  border: 2px #ff7e00 solid;
  /* padding: 5px 10px; */
  margin-right: 10px;
  border-radius: 10px;
}
.a6 {
  height: 100px;
  overflow: hidden;
}
.a6-1 {
  font-size: 16px;
  /* color:#fff ; */
  position: relative;
  height: 38px;
  width: 55px;
  line-height: 40px;
  border: 2px #ff7e00 solid;
  background: url(../data/imgs/icon-cart-hover.png) center no-repeat;
  background-color: #ddd;
  margin-top: -20px;
  top: 50%;
  border-radius: 6px;
  cursor: pointer;
}
.a6-1:hover {
  background: url(../data/imgs/icon-cart.png) center no-repeat;
  background-color: #ff7e00;
  border: 2px #2f4f4f solid;
  cursor: pointer;
  transform: scale(1.0);
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;
  box-shadow: 1px 2px 5px 5px gray;
}
.a6-2 {
  text-decoration: none;
}
.a6-3 {
  /* 购物车红点 */
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(221, 18, 18);
  position: absolute;
  top: 0;
  right: 0;
}
#a7 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1300px;
  /* border: 2px #ff7e00 solid; */
  border-bottom: 1px solid #fff;
  margin: auto;
  overflow: hidden;
}
#a7 ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
}
#a7 ul li {
  /* 分类 */
  display: inline-block;
  height: 40px;
  line-height: 40px;
  width: 230px;
  background-color: #eee;
  cursor: pointer;
  border-radius: 10px;
  border: 2px #ff7e00 solid;
  padding: 5px 10px;
  margin: 0 5px 0 5px;
  /*上下填充10 左右5*/
  font-size: 20px;
}
#a7 ul li:hover {
  background: #ff7e00;
  border: 2px #2f4f4f solid;
  cursor: pointer;
  transform: scale(1.0);
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;
  box-shadow: 1px 5px 10px 10px gray;
}
</style>

