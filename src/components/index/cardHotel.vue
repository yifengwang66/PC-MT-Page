<template>
  <div class="cardHotel">
    <div class="perCard" v-for="(item, index) in cardData.data" :key="index">
      <a href="/">
        <div class="img">
          <img
            :src="item.img"
            class="post"
          />
          <img
            src="https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png"
            class="avator"
          />
        </div>
        <div class="info">
          <p class="title">{{item.title}}</p>
          <p class="small">
            <span>整套{{item.room}}居室·</span>
            <span>可住{{item.contain}}人 | </span>
            <span>{{item.address}}</span>
          </p>
          <p class="price"><span class="dollar">￥</span>98</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
.cardHotel {
  padding: 25px 0 0 35px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #e5e5e5;
  border-top-color: transparent;
  border-radius: 0 0 5px 5px;
  a {
    display: inline-block;
    padding-bottom: 25px;
    .img {
      margin-right: 18px;
      position: relative;
      .post {
        width: 370px;
        height: 208px;
        border-radius: 5px;
        margin-bottom: 11px;
      }
      .avator {
        width: 48px;
        height: 48px;
        position: absolute;
        bottom: -6px;
        right: 15px;
      }
    }
    .info {
      .title {
        margin: 7px 0;
        width: 297px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #222;
      }
      .small {
        margin: 0;
        color: #999;
        font-size: 12px;
      }
      .price {
        color: #f60;
        font-size: 22px;
        padding: 4px 0;
        margin: 0;
        letter-spacing: -0.8px;
        .dollar{
            font-size: 14px;
        }
      }
    }
  }
}
</style>