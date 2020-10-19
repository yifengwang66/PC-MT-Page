<template>
  <div class="index">
    <el-row type="flex" class="bannerPart">
      <sort />
      <mainCon />
    </el-row>

    <el-row v-for="(item, index) in selectedDatas" :key="index">
      <selectCard :selectTitle="item" />
    </el-row>
  </div>
</template>

<script>
import sort from "../index/sort";
import mainCon from "../index/mainCon";
import selectCard from "../index/selectCard";

export default {
  data() {
    return {
      selectedDatas: [
        {
          title: "猫眼电影",
          kind: "movie",
          children: [
            {
              title: "正在热映",
              kind: "onPlay",
            },
            {
              title: "即将上映",
              kind: "willPlay",
            },
          ],
          backColor:
            "linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104)",
        },
        {
          title: "推荐民宿",
          kind: "hotel",
          children: [
            {
              title: "沈阳",
              kind: "SY",
            },
            {
              title: "天津",
              kind: "TJ",
            },
            {
              title: "青岛",
              kind: "QD",
            },
            {
              title: "济南",
              kind: "JN",
            },
            {
              title: "大连",
              kind: "DL",
            },
            {
              title: "秦皇岛",
              kind: "QHD",
            },
            {
              title: "烟台",
              kind: "YT",
            },
            {
              title: "潍坊",
              kind: "TF",
            },
            {
              title: "唐山",
              kind: "TS",
            },
            {
              title: "泰安",
              kind: "TA",
            },
          ],
          backColor:
            "linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%) rgb(243, 182, 74)",
        },
        {
          title: "猜你喜欢",
          kind: "like",
          children: [
            {
              title: "为你甄选最合适的",
              kind: "like",
            },
          ],
          backColor:
            "linear-gradient(to right, rgb(88, 174, 221) 2%, rgb(66, 191, 205) 97%) rgb(88, 174, 221)",
        },
      ],
      // selectedDatas: [
      //     {
      //         guidInfo: {
      //             title: "猫眼电影",
      //             children: ['正在热映', '即将上映'],
      //             backColor: "linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104)"
      //         },
              
      //     }
      // ]
    };
  },
  components: {
    sort,
    mainCon,
    selectCard,
  },
};
</script>

<style scoped lang="scss">
.bannerPart {
  margin-bottom: 40px;
}
</style>