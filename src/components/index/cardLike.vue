<template>
  <div class="cardLike">
    <a href="/" v-for="(item, index) in cardData.data" :key="index">
      <div class="perCard">
        <div class="img">
          <img
            :src="item.img"
          />
        </div>
        <div class="info">
          <p class="title">{{item.title}}</p>
          <div class="score">
            <ul class="noCol">
              <li class="el-icon-star-on"></li>
              <li class="el-icon-star-on"></li>
              <li class="el-icon-star-on"></li>
              <li class="el-icon-star-on"></li>
              <li class="el-icon-star-on"></li>
            </ul>
            <ul class="col" :style="{width: (item.score/5)*80 + 'px'}">
              <li class="el-icon-star-on"></li>
              <li class="el-icon-star-on"></li>
              <li class="el-icon-star-on"></li>
              <li class="el-icon-star-on"></li>
              <li class="el-icon-star-on"></li>
            </ul>
            <span class="comment">
              <span>{{item.comment}}</span>
              个评价
            </span>
          </div>
          <p class="area">{{item.address}}</p>
          <div class="price">
            <span class="dollar">￥</span>
            {{item.price}}
            <span class="qi">起</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      require: true,
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
.cardLike {
  padding: 10px 20px 20px;
  border: 1px solid #e5e5e5;
  border-top-color: transparent;
  border-radius: 0 0 5px 5px;
  a {
    display: inline-block;
    .perCard {
      padding: 10px;
      border-radius: 5px;
      transition: background-color .5s ease;
      p {
        margin: 0;
      }
      &:hover {
        background-color: #f4f4f4;
      }
      img {
        height: 120px;
        border-radius: 5px;
      }
    }
    .info {
      margin-top: 10px;
      .title {
        color: #222;
        height: 22px;
      }
      .score {
        position: relative;
        height: 24px;
        ul {
          font-size: 0;
          display: inline-block;
          vertical-align: middle;
        }
        li {
          height: 12px;
          width: 12px;
          font-size: 16px;
          padding: 0 2px;
        }
        .noCol {
          color: #c3c3c3;
        }
        .col {
          position: absolute;
          bottom: 5px;
          left: 0;
          color: #f90;
          overflow: hidden;
          white-space: nowrap;
        }
        .comment {
          font-size: 12px;
          color: #999;
          margin-left: 10px;
          vertical-align: middle;
        }
      }
      .area {
        height: 18px;
        font-size: 12px;
        color: #999;
        margin-top: 3px;
      }
      .price{
          color: #f60;
          font-size: 22px;
          word-spacing: -4px;
          font-weight: 600;
          .dollar{
              font-size: 14px;
          }
          .qi{
              font-size: 12px;
          }
      }
    }
  }
}
</style>