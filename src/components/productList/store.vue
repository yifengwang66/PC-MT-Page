<template>
  <div class="perStore clearfix">
    <div class="img">
      <a href="/">
        <img :src="storeData.img" />
      </a>
      <div class="num">{{ storeData.rank }}</div>
    </div>

    <div class="info">
      <div class="bref">
        <p class="title">{{ storeData.name }}</p>

        <div class="scoreList clearfix">
          <el-rate
            v-model="storeData.score"
            disabled
            text-color="#ff9900"
            :colors="['#ff9900', '#f90', '#f90']"
            score-template="{value}"
            style="float: left"
            disabled-void-color="#c3c3c3"
          >
          </el-rate>
          <span>{{
            storeData.score > 4 ? "很好" : storeData.score > 3 ? "一般" : "较差"
          }}</span>
          <span>{{ storeData.score }}分</span>
          <span class="comentNum">{{ storeData.comentNum }}人评论</span>
        </div>

        <div class="address clearfix">
          <div>
            <span>{{ storeData.type }}</span
            >|<span>{{ storeData.county }}</span>
          </div>

          <div>
            <span>{{ storeData.address }}</span>
          </div>

          <div class="mapLoc">
            <i class="el-icon-map-location"></i>
            <span>查看地图</span>
          </div>
        </div>

        <div class="ave">
          <span>人均￥{{ storeData.ave }}</span>
        </div>
      </div>

      <div class="discount">
        <div
          class="per"
          v-for="(item, index) in storeData.discount.length > 2
            ? showall
              ? storeData.discount
              : storeData.discount.slice(0, 2)
            : storeData.discount"
          :key="index"
        >
          <p class="title">{{ item.title }}</p>
          <div>
            <span class="price"
              >￥<span class="number">{{ item.price }}</span></span
            >
            <span>门市价￥{{ item.markprice }}</span>
            <span>已售{{ item.solded }}</span>
          </div>
        </div>

        <template v-if="storeData.discount.length > 2">
          <p class="more" v-if="!showall" @click="showall = true">
            更多{{ storeData.discount.length - 2 }}个优惠
            <i class="el-icon-arrow-down"></i>
          </p>
          <p class="more" v-else @click="showall = false">
            收起
            <i class="el-icon-arrow-up"></i>
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4.4,
      showall: false,
    };
  },
  props: {
    storeData: {
      require: true,
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
.perStore {
  padding-top: 15px;
  border-top: 1px solid #e5e5e5;
  font-size: 12px;
  .img {
    float: left;
    position: relative;
    margin-right: 20px;
    img {
      width: 220px;
      height: 125px;
      border-radius: 5px;
    }
    .num {
      position: absolute;
      background: #fb6433;
      padding: 0 7px;
      color: #fff;
      line-height: 12px;
      border-radius: 2px;
      top: 2px;
      left: -3px;
    }
  }
  .info {
    float: left;
    width: 620px;
    .bref {
      padding-bottom: 10px;
      border-bottom: 1px dashed #e5e5e5;
      .title {
        color: #333;
        font-size: 16px;
        cursor: pointer;
      }
      .scoreList {
        line-height: 20px;
        margin-top: 6px;
        span {
          margin-left: 8px;
        }
        .comentNum {
          color: #f90;
        }
      }
      .address {
        margin-top: 6px;
        & > div {
          float: left;
          height: 20px;
          line-height: 20px;
          margin-right: 8px;
          &.mapLoc {
            i {
              color: rgb(255, 197, 0);
            }
            cursor: pointer;
          }
        }
      }
      .ave {
        height: 20px;
        line-height: 20px;
        margin-top: 6px;
      }
    }

    .discount {
      width: 100%;
      margin-top: 10px;
      .per {
        width: 100%;
        padding: 6px 10px 8px;
        transition: background-color 0.5s ease;
        cursor: pointer;
        border-radius: 5px;
        .title {
          height: 20px;
          line-height: 20px;
          color: #666;
          font-size: 14px;
        }
        .price {
          margin-top: 5px;
          color: #f60;
          .number {
            font-size: 14px;
            font-weight: bold;
          }
          &~span{
            color: #999;
          }
        }
        & > div {
          & > span {
            margin-right: 8px;
          }
        }
        &:hover {
          background: #f8f8f8;
          .title {
            color: #f90;
          }
        }
      }
      .more {
        margin-top: 16px;
        cursor: pointer;
        &:hover {
          color: #f90;
        }
      }
    }
  }
}
</style>