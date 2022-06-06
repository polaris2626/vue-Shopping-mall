<template>
  <div class="d0">
    <div class="d1">
      <div class="d2">
        <img :src="displaygoods.photo" class="d2-1" />
      </div>
      <div class="d7-1">
        <router-link to="/"
          ><button id="d7-2">返回商品列表</button></router-link
        >
      </div>
      <div class="d3">
        <div class="d3-1">
          <p>ID：{{ displaygoods.id }}</p>
          <p>名称：{{ displaygoods.name }}</p>
          <p>作者：{{ displaygoods.author }}</p>
          <p>价格：{{ displaygoods.price }}</p>
          <p>详情：{{ displaygoods.details }}</p>
        </div>
        <div>
          <button @click="addCart3(displaygoods)" class="b4">加入购物车</button>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      num: 1,
    };
  },
  mounted() {},
  computed: {
    displaygoods() {
      return this.$route.query.sp;
    },
  },
  methods: {
    ...mapMutations(["change", "addCart2"]),
    addCart3(msg) {
      if (sessionStorage.getItem("name") == null) {
        alert("亲~请先登录哦");
        return;
      } else {
        this.$store.commit("addCart", msg);
        alert(msg.name + "已经成功添加到购物车啦~亲");
      }
    },
  },
};
</script>


<style scoped>
.d0 {
  width: 1200px;
  height: 800px;
  /* border: 1px solid black; */
  margin: auto;
  text-align: center;
}
.d1 {
  overflow: hidden;
}
.d2 {
  width: 200px;
  float: left;
  margin-top: 50px;
  margin-left: 10px;
}
.d2-1 {
  width: 400px;
  height: 400px;
  border-radius: 10px;
  background: #fff;
}
.d3 {
  width: 600px;
  overflow: hidden;
  float: left;
  margin-top: 30px;
  margin-left: 250px;
  /* border: 1px solid red; */
}
.d3-1 {
  width: 450px;
  height: 400px;
  font-size: 20px;
  text-align: left;
  border-radius: 10px;
  background: #fff;
  margin-top: 21px;
}
.d7-1 {
  position: absolute;
  left: 300px;
  top: 900px;
}
#d7-2 {
  /* position: absolute; */
  background-color: #eee;
  color: rgb(133, 133, 133);
  margin-left: -50px;
  margin-top: 0px;
  width: 200px;
  height: 70px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 20px;
}
#d7-2:hover {
  background-color: #eee;
  color: #2c3e50;
  border-radius: 5px;
}

.b4 {
  /* background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%); */
  margin-left: -150px;
  margin-top: 20px;
  width: 300px;
  height: 70px;
  background-color: #5e86ad;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 5px;
  font-size: 20px;
}
.b4:hover {
  /* background-color: #eee; */
  color: #ddd;
  border-radius: 5px;
}
</style>