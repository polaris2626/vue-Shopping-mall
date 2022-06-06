<template>
  <div class="f2">
    <div class="f1">
      <input type="text" placeholder="请输入账号" v-model="username" />
      <input type="password" placeholder="请输入密码" v-model="password" />
    </div>
    <div class="f3"><button @click="login()">登录</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.username == "") {
        alert("账号不能为空");
        return;
      }
      if (this.password == "") {
        alert("密码不能为空");
        return;
      }
      if (localStorage.getItem(this.username) == this.password) {
        alert("登录成功");
        sessionStorage.setItem("name", this.username);
        this.$router.push({
          path: "/",
          //    query:{username:this.username}
        });
      } else {
        alert("该用户不存在");
      }
    },
  },
};
</script>

<style scoped>
.f2 {
  /* position: absolute; */
  /* background: red; */
  width: 400px;
  height: 300px;
  margin-top: 0px;
  margin-left: 25px;
  border-radius: 10px;
  padding-top: 50px;
}
.f1 input {
  /* margin-left: 20px; */
  width: 290px;
  height: 25px;
  margin-bottom: 25px;
  /* padding-bottom: 30px; */
  font-size: 20px;
  background: none;
  border: none;
  border-bottom: 2px solid #ff7e00;
}
.f3 {
   padding-bottom: 30px;
  margin-top: 25px;
  margin-left: 0px;
}
.f3 button {
  padding-bottom: 5px;
  width: 300px;
  height: 80px;
  font-size: 20px;
  border-radius: 10px;
}
.f3 button:hover {
  cursor: pointer;
  transform: scale(0.9);
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;
  box-shadow: 1px 1px 3px 3px #ff7e00;
}
</style>