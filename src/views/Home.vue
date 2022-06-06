<template>
  <div class="e1">
    <div class="e1-logo">
      <!-- 小米商城 -->
    </div>
    <div class="e1-1">
      <div class="e1-2">
        <router-link to="/login2">
          <div class="e2">登录</div>
        </router-link>
        <router-link to="/register">
          <div class="e3">注册</div>
        </router-link>
      </div>
      <div class="e4">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.e1 {
  /* background: #ff7e00; */
  position: relative;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100%, 100%;
  background-position: 0%;
  background: #637791;
  margin: 0px;
  padding: 0px;
}
.e1-logo {
  width: 200px;
  height: 50px;
  margin: 15px;
  position: absolute;
  background: url(../data/imgs/login-logo.png) center no-repeat;
}
.e1-1 {
  background: #ddd;
  width: 450px;
  height: 500px;
  position: absolute;
  top: 25%;
  right: 35%;
  background-size: 100%, 100%;
  background-position: 0%;
  border-radius: 10px;
  /*半透明效果*/
  filter: alpha(Opacity=60);
  -moz-opacity: 0.8;
  opacity: 0.8;
}
.e1-2 {
  display: flex;
  flex-direction: row;
  width: 450px;
  height: 75px;
  font-size: 25px;
  font-weight: bolder;
}
.e2 {
  color: #637791;
  width: 222px;
  height: 75px;
  line-height: 75px;
  text-decoration: none;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
}
.e2:hover {
  color: #ff7e00;
  font-size: 30px;
}
.e3 {
  color: #637791;
  width: 222px;
  height: 75px;
  line-height: 75px;
  text-decoration: none;
  border-bottom: 1px solid gray;
}
.e3:hover {
  color: #ff7e00;
  font-size: 30px;
}
.e4 {
  width: 450px;
}
</style>