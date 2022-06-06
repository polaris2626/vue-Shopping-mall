<template>
  <div class="b1">
    <ul>
      <li v-for="good in display" :key="good.id">
        <img :src="good.photo" class="b2" />
        <p class="b3">
          <!-- 名称: -->
          {{ good.name }}<br />
          <!-- 价格: -->
          ¥&nbsp;{{ good.price }}&nbsp;&nbsp;元起
        </p>

        <button @click="addCart3(good)" class="b4">加入购物车</button>&nbsp;
        <button @click="msg(good)" class="b4-1">查看详情</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { goods, goods2 } from "../data/goods";
// import {mapState} from "vuex";

export default {
  data() {
    return {
      goods, //全部商品
      goods2, //热销商品
      display: "", //定义一个数组用来存放两类商品
      type: "",
    };
  },

  mounted() {
    //防止先点击购物车再点击想要的商品类型展示，却跳到热销产品的功能
    this.display = this.goods2;
    if (this.$route.query.type != undefined) {
      this.type = this.$route.query.type;
    }
    if (this.type != "" && this.type != "手机") {
      this.display = this.goods.filter((ele) => {
        return ele.type == this.type;
      });
    }
    if (this.$route.query.type == undefined)
      this.$router.push("/display?type=手机");
  },
  beforeRouteUpdate: function (to, from, next) {
    if (to.query.search == null) {
      //如果未点击搜索按钮，就按分类来查找
      if (to.query.type == "手机") {
        //如果是热销产品，显示热销产品组
        this.display = this.goods2;
        next();
      } else if (to.query.type != "手机") {
        this.type = to.query.type;
        this.display = this.goods.filter((ele) => {
          return ele.type === to.query.type;
        });
        next();
      }
    } else if (to.query.search == "") {
      //点击搜索按钮，却未在输入栏输入任何字符时
      this.display = this.goods2.filter((ele) => {
        //如果不是热销产品，则根据分类来显示热销产品
        return ele.name.indexOf(to.query.search) != -1; //indexOf模糊查询
      });
      next();
    } else {
      this.display = this.goods.filter((ele) => {
        //点击搜索按钮，以模糊查询来寻找对应商品
        return ele.name.indexOf(to.query.search) != -1;
      });
      if (this.display == false) {
        this.display = this.goods2.filter((ele) => {
          //点击搜索按钮，以模糊查询来寻找对应商品
          return ele.name.indexOf(to.query.search) != -1;
        });
      }
      next();
    }
  },
  methods: {
    // ...mapMutations(["addCart"]),
    addCart3(msg) {
      if (sessionStorage.getItem("name") == null) {
        alert("亲~请先登录哦");
        return;
      } else {
        this.$store.commit("addCart", msg);
        alert(msg.name + "已经成功添加到购物车啦~亲");
      }
    },
    msg(msg) {
      if (sessionStorage.getItem("name") == null) {
        alert("亲~请先登录哦");
        return;
      } else {
        this.$router.push({
          path: "/msg",
          query: { sp: msg },
        });
      }
    },
  },
};
</script>

<style>
.b1 {
  width: 1380px;
  height: 1200px;
  padding-left:10px ;
  /* border: 1px solid black; */
}
.b1 ul li {
  margin: 0px 25px 60px 0px;
  zoom: 1;
  float: left;
  width: 260px;
  height: 360px;
  display: block;
  position: relative;
  background-color: #eee;
  color: #2c3e50;
  border-radius: 10px;
  border: 2px #ff7e00 solid;
  padding: 5px;
}
.b1 ul li:hover {
  /* border: #ff7e00 3px solid; */
  width: 262px;
  height: 362px;
  background-color: #ff7e00;
  border: 2px #2f4f4f solid;
  padding: 4px;
  cursor: pointer;
  transform: scale(0.9);
  transition-timing-function: ease;
  transition-delay: 0s;
  box-shadow: 1px 5px 10px 10px gray;
}
.b2 {
  background: #fff;
  width: 220px;
  height: 220px;
  border-radius: 10px;
  margin-top:5px ;
  /* border: 10px red solid; */
  font-size: 20px;
}
/* .b2:hover {
  border: #ff7e00 1px solid;
} */
.b3 {
  padding: 5px;
  border: #fff 1px solid;
  background: #ddd;
  color: #ff7e00;
  font-size: 18px;
  text-align: center;
  border-radius: 10px;
}
.b4 {
  /* background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%); */
  background-color: #5e86ad;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 5px;
}
.b4:hover {
  /* background-color: #eee; */
  color: #ddd;
  border-radius: 5px;
}

.b4-1 {
  /* background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%); */
  background-color: #eee;
  color: rgb(133, 133, 133);
  border: 1px solid black;
  cursor: pointer;
  border-radius: 5px;
}
.b4-1:hover {
  background-color: #eee;
  color: #2c3e50;
  border-radius: 5px;
}
</style>