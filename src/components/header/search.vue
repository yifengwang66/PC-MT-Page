<template>
  <div class="search">
    <el-row class="row" type="flex">
      <el-col :span="6">
        <router-link to="/">
          <img src="@/img/logo.png" alt="美团" width="126" height="46" />
        </router-link>
      </el-col>
      <el-col :span="10" :offset="1">
        <div class="wrapper">
          <div class="inp">
            <input type="text" placeholder="搜索商家或地点" v-model="content" @focus="focus" @blur="blur" />
            <dl class="hotSearch" v-show="isHotSearch">
              <dt>热门搜索</dt>
              <dd v-for="(item, index) in hotWords" :key="index">
                <router-link :to="{name: 'detail', params: {name: item}}">{{item}}</router-link>
              </dd>
            </dl>
            <dl class="searchList" v-if="isSearchList">
              <dd v-for="(item, index) in searchList" :key="index">
                <router-link :to="{name: 'detail', params: {name: item}}">{{item}}</router-link>
              </dd>
            </dl>
          </div>

          <el-button icon="el-icon-search" class="searchBtn"></el-button>
        </div>
        <div class="hotWord">
          <ul>
            <li>
              <router-link
                :to="{name: 'detail', params: {name: item}}"
                v-for="(item, index) in hotWords"
                :key="index"
              >{{item}}</router-link>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotWords: ["京东第一温泉度假村", "99旅馆连锁", "尚客优", "快捷酒店"],
      searchList: [
        "火锅",
        "火锅自助",
        "火锅岛 潮牌自助火锅",
        "火锅 羊蝎子",
        "火锅年糕",
      ],
      content: "",
      isFocus: false,
    };
  },
  computed: {
    isHotSearch() {
      return this.isFocus && !this.content;
    },
    isSearchList() {
      return this.isFocus && this.content;
    },
  },
  methods: {
    focus() {
      console.log(this.$route.params);
      this.isFocus = !this.isFocus;
    },
    blur() {
      setTimeout(() => {
        this.isFocus = !this.isFocus;
      }, 220);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/css/public/var.scss";
@import "@/assets/css/public/header.scss"

</style>