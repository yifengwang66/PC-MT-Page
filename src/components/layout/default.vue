<template>
  <div class="default-page">
    <el-container>
      <el-header style="height: ''; box-shadow: 0 5px 50px 0 rgba(0, 0, 0, .1); position: relative;">
        <headerComp/>
      </el-header>
      <el-main style="background: #f8f8f8; padding-top: 0; padding-bottom: 20px; overflow: visible">
        <router-view></router-view>
      </el-main>
      <el-footer style="height: ''">
        <footerComp/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import headerComp from "../header/index"
import footerComp from "../footer/footer"
import index from '../page/index'
export default {
  components: {
    headerComp,
    footerComp,
    index
  }
};
</script>

<style lang="scss">
footer{
  background: #f8f8f8;
}
</style>