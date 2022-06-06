<template>
  <div class="g1">
    <div class="g2">
      <input type="text" placeholder="请输入账号" v-model="username" />
      <input type="password" placeholder="请输入密码" v-model="password" />
      <input
        type="password"
        placeholder="请确认密码"
        v-model="password2"
        id="g2-1"
      />
    </div>
    <div class="g3"><button @click="register()">注册</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      password2: "",
    };
  },
  methods: {
    register() {
      if (this.username == "" || this.password == "" || this.password2 == "") {
        alert("您还没有输入账号或密码");
        return;
      }
      if (this.password2 != this.password) {
        alert("您两次输入的密码不一致，请重新输入");
        return;
      }
      if (localStorage.getItem(this.username)) {
        alert("该账号已经存在");
        return;
      } else {
        localStorage.setItem(this.username, this.password);
        alert("注册成功");
        this.$router.push({
          path: "/login2",
        });
      }
    },
  },
};
</script>

<style scoped>
.g1 {
  /* background: red; */
  width: 400px;
  height: 300px;
  margin-top: 0px;
  margin-left: 25px;
  border-radius: 10px;
  padding-top: 50px;
}
.g2 {
  margin-top: 10px;
  margin-left: 10px;
}
.g2 input {
  width: 290px;
  height: 25px;
  margin-bottom: 25px;
  font-size: 20px;
  background: none;
  border: none;
  border-bottom: 2px solid #ff7e00;
}
.g2-1 {
  transform: translateX(-15px);
}
.g3 {
  margin-top: 15px;
  margin-left: 0px;
}
.g3 button {
  /* width: 180px;
    height: 30px;
    font-size: 20px;
    border-radius: 20px; */
  width: 300px;
  height: 80px;
  font-size: 20px;
  border-radius: 10px;
}
.g3 button:hover {
  cursor: pointer;
  transform: scale(0.9);
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;
  box-shadow: 1px 1px 3px 3px #ff7e00;
}
</style>