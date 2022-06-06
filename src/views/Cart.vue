<template>
  <div class="c1">
    <div class="kong" v-if="carts.length == 0"><h3>购物车为空</h3></div>
    <table class="c1-1" v-else>
      <tr>
        <th>商品</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>小计</th>
        <th>操作</th>
      </tr>
      <tr v-for="(cart, index) in carts" :key="cart.id">
        <td>
          <a href="" id="c1-2">
            <img
              :src="cart.photo"
              alt="点击查看详情"
              @click="msg(good)"
              id="c2"
            />
          </a>
        </td>
        <td>{{ cart.name }}</td>
        <td>{{ cart.price }}</td>
        <td>
          <div class="c3">
            <div class="c3-1">
              <button class="c4" @click="change({ carts: cart, num: -1 })">
                -
              </button>
              <input
                type="text"
                name=""
                readonly="readonly"
                class="c5"
                :value="cart.num"
              />
              <button class="c4" @click="change({ carts: cart, num: 1 })">
                +
              </button>
            </div>
          </div>
        </td>
        <td>小计：{{ cart.price * cart.num }}</td>
        <td>
          <button @click="remove(index)" id="a5-1">移除订单</button>
        </td>
      </tr>
      <tr>
        <td colspan="6">
          <hr
            data-v-39cd9e21=""
            style="
              border-top: 1px dotted black;
              border-right: none;
              border-bottom: none;
              border-left: none;
              border-image: initial;
            "
          />
        </td>
      </tr>
      <tr>
        <td colspan="4" id="c5-2">当前总价:{{ total }},数量:{{ count }}</td>
        <td><button class="c6" @click="remove2()">支付</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      // kong:""
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
  computed: {
    ...mapState(["carts"]),
    ...mapGetters(["total", "count"]),
  },
  methods: {
    ...mapMutations(["remove", "change", "remove2"]),
  },
};
</script>

<style scoped>
.c1 {
  display: block;
  margin-bottom: 30px;
}
.c1-1 {
  background: #eee;
  margin-top:5px; ;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-radius: 10px;
  width: 100%;
}
tr {
  vertical-align: middle;
}
th {
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: -internal-center;
}
td {
  display: table-cell;
  vertical-align: inherit;
}
#c1-2 {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
#c2 {
  width: 120px;
  height: 100px;
}
.c3 {
  box-sizing: border-box;
}
.c3-1 {
  border: 1px solid #eee;
  display: inline-block;
  height: 26px;
}
.c5 {
  border: none;
  outline: none;
  height: 26px;
  background-color: #f5f5f5;
  text-align: center;
  width: 60px;
}
#a5-1 {
  /* border: red 10px solid; */
  cursor: pointer;
}
#c5-2 {
  font-size: 20px;
  color: black;
}
.c4 {
  border: none;
  height: 26px;
  width: 26px;
  cursor: pointer;
}
hr {
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
}
.c6 {
  width: 160px;
  height: 40px;
  font-size: 18px;
  color: #fff;
  background-color: #df3033;
  border: none;
  cursor: pointer;
}
.kong1 {
  width: 300px;
  height: 300px;
  margin-left: 100px;
  background-size: contain;
}
</style>