import Mock from 'mockjs';


// 搜索框数据
Mock.mock("http://open.duyiedu.com/api/meituan/header/search.json?appkey=byfWang_1590670472900", {

})

// 最近热门搜索
Mock.mock("http://open.duyiedu.com/api/meituan/header/searchHotWords.json?appkey=byfWang_1590670472900", {

})

// 左侧导航条数据
Mock.mock("http://open.duyiedu.com/api/meituan/index/nav.json?appkey=byfWang_1590670472900", {

})

// 卡片数据
let reg = /http:\/\/open.duyiedu.com\/api\/meituan\/index\/resultsByKeywords.json\?.*appkey=byfWang_1590670472900/;
Mock.mock(reg, function (options) {
    let Url = new URL(options.url);
    let Reg = /kind=(?:[\w]*)/g
    let kind = Url.search.match(Reg)[0].slice(5);
    let result = null;
    switch (kind) {
        case "onPlay": result = {
            type: "movie",
            data: [
                {
                    name: '急先锋',
                    btn: true,
                    is3D: true,
                    onPlay: false,
                    wish: 287677,
                    score: null,
                    img: "https://p0.meituan.net/movie/d1a953193e001c8dec96c17ea5075ec0788729.jpg@267w_371h_1e_1c"
                },
                {
                    name: '夺冠',
                    btn: true,
                    is3D: false,
                    onPlay: true,
                    wish: null,
                    score: 9.2,
                    img: "https://p1.meituan.net/movie/e7185e149d79e72c4ef0d70f27fc76da1642784.jpg@267w_371h_1e_1c"
                },
                {
                    name: '姜子牙',
                    btn: true,
                    is3D: true,
                    onPlay: false,
                    wish: 1385046,
                    score: null,
                    img: "https://p0.meituan.net/movie/e00977359c9718949a7d1fff69f5baeb3782915.jpg@267w_371h_1e_1c"
                },
                {
                    name: '我和我的家乡',
                    btn: true,
                    is3D: false,
                    onPlay: false,
                    wish: 405748,
                    score: null,
                    img: "https://p0.meituan.net/movie/202ea88abd2abf2aa1964487d61edab64556414.jpg@267w_371h_1e_1c"
                },
                {
                    name: '八佰',
                    btn: true,
                    is3D: false,
                    onPlay: true,
                    wish: null,
                    score: 9.2,
                    img: "https://p0.meituan.net/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg@267w_371h_1e_1c"
                },
                {
                    name: '一点就到家',
                    btn: true,
                    is3D: "none",
                    onPlay: false,
                    wish: 33416,
                    score: null,
                    img: "https://p0.meituan.net/movie/c16b0a68f95d884d428f339f8eacce834410200.jpg@267w_371h_1e_1c"
                },
                {
                    name: '菊次郎的夏天',
                    btn: true,
                    is3D: "none",
                    onPlay: true,
                    wish: null,
                    score: 8.8,
                    img: "https://p0.meituan.net/movie/0bd752877b95b8eac2d0704c783f372c4625354.jpg@267w_371h_1e_1c"
                },
                {
                    name: '花木兰',
                    btn: true,
                    is3D: true,
                    onPlay: true,
                    wish: null,
                    score: 7.5,
                    img: "https://p0.meituan.net/moviemachine/ca9d0c0268a940d73d62c004d57b957a5241814.jpg@267w_371h_1e_1c"
                },
                {
                    name: '信条',
                    btn: true,
                    is3D: false,
                    onPlay: true,
                    wish: null,
                    score: 8.3,
                    img: "https://p1.meituan.net/moviemachine/40d1e5ac176f1e9258da10a3222dbff7952117.png@267w_371h_1e_1c"
                },
                {
                    name: '通往夏天的列车',
                    btn: true,
                    is3D: "none",
                    onPlay: true,
                    wish: null,
                    score: 7.1,
                    img: "https://p1.meituan.net/moviemachine/40d1e5ac176f1e9258da10a3222dbff7952117.png@267w_371h_1e_1c"
                },
            ]
        }; break;
        case "willPlay": result = {
            data: [
                {
                    name: '漂亮的村事',
                    is3D: 'none',
                    onPlay: false,
                    btn: false,
                    wish: 79,
                    score: null,
                    img: "https://p1.meituan.net/movie/c8df0569c7ece1aba0f59875ea1a49c53116209.jpg@267w_371h_1e_1c"
                },
                {
                    name: '云做的翅膀',
                    is3D: 'none',
                    onPlay: false,
                    btn: false,
                    wish: 276,
                    score: null,
                    img: "https://p0.meituan.net/moviemachine/f874ee5dfd33d15b168fb89dfcb74fe72467810.jpg@267w_371h_1e_1c"
                },
                {
                    name: '天道王',
                    is3D: 'none',
                    onPlay: false,
                    btn: false,
                    wish: 3528,
                    score: null,
                    img: "https://p1.meituan.net/movie/333d075977119d6c828a0137a46b149d533198.jpg@267w_371h_1e_1c"
                },
                {
                    name: '七号房的礼物',
                    is3D: 'none',
                    onPlay: false,
                    btn: false,
                    wish: 1717,
                    score: null,
                    img: "https://p0.meituan.net/movie/072677abb27cd65bcb1abf77fe250eeb891964.jpg@267w_371h_1e_1c"
                },
                {
                    name: '四年二班',
                    is3D: 'none',
                    onPlay: false,
                    btn: false,
                    wish: 628,
                    score: null,
                    img: "https://p0.meituan.net/movie/e4e487f3bb5e3de1fb55b9ea37f1b35d1315093.jpg@267w_371h_1e_1c"
                },
                {
                    name: '82号古宅',
                    is3D: 'none',
                    onPlay: false,
                    btn: false,
                    wish: 12893,
                    score: null,
                    img: "https://p0.meituan.net/movie/1a779e35ac30869df813ac47c2660ab33332053.jpg@267w_371h_1e_1c"
                },
                {
                    name: '喜宝',
                    is3D: 'none',
                    onPlay: false,
                    btn: false,
                    wish: 8082,
                    score: null,
                    img: "https://p0.meituan.net/movie/1a779e35ac30869df813ac47c2660ab33332053.jpg@267w_371h_1e_1c"
                },
                {
                    name: '掬水月在手',
                    is3D: 'none',
                    onPlay: false,
                    btn: false,
                    wish: 1334,
                    score: null,
                    img: "https://p0.meituan.net/movie/458c8679e048149b7fe31b42823e2e5c470774.jpg@267w_371h_1e_1c"
                },
                {
                    name: '一丈天地',
                    is3D: 'none',
                    onPlay: false,
                    btn: false,
                    wish: 966,
                    score: null,
                    img: "https://p0.meituan.net/movie/e2784019d69b76ced0242ff27f31e8d5663526.jpg@267w_371h_1e_1c"
                },
                {
                    name: '漂亮的村事',
                    is3D: 'none',
                    onPlay: false,
                    btn: false,
                    wish: null,
                    score: 6.7,
                    img: "https://p1.meituan.net/moviemachine/903efb27a699ad419d3aec6980181e3d170859.jpg@267w_371h_1e_1c"
                },
            ]
        }; break;
        case "SY": result = {
            data: [
                {
                    img: "https://img.meituan.net/phoenix/5f9724e9a8f535964cd829807ba857a0274963.jpg@740w_416h_1e_1c",
                    title: "君和广场日租公寓",
                    room: 1,
                    contain: 2,
                    address: "君和广场",
                    price: 98
                },
                {
                    img: "https://img.meituan.net/phoenix/5f9724e9a8f535964cd829807ba857a0274963.jpg@740w_416h_1e_1c",
                    title: "君和广场日租公寓",
                    room: 1,
                    contain: 2,
                    address: "君和广场",
                    price: 98
                },
                {
                    img: "https://img.meituan.net/phoenix/5f9724e9a8f535964cd829807ba857a0274963.jpg@740w_416h_1e_1c",
                    title: "君和广场日租公寓",
                    room: 1,
                    contain: 2,
                    address: "君和广场",
                    price: 98
                },
                {
                    img: "https://img.meituan.net/phoenix/5f9724e9a8f535964cd829807ba857a0274963.jpg@740w_416h_1e_1c",
                    title: "君和广场日租公寓",
                    room: 1,
                    contain: 2,
                    address: "君和广场",
                    price: 98
                },
                {
                    img: "https://img.meituan.net/phoenix/5f9724e9a8f535964cd829807ba857a0274963.jpg@740w_416h_1e_1c",
                    title: "君和广场日租公寓",
                    room: 1,
                    contain: 2,
                    address: "君和广场",
                    price: 98
                },
                {
                    img: "https://img.meituan.net/phoenix/5f9724e9a8f535964cd829807ba857a0274963.jpg@740w_416h_1e_1c",
                    title: "君和广场日租公寓",
                    room: 1,
                    contain: 2,
                    address: "君和广场",
                    price: 98
                }
            ]
        }; break;
        case "TJ": result = {}; break;
        case "QD": result = {}; break;
        case "JN": result = {}; break;
        case "DL": result = {}; break;
        case "QHD": result = {}; break;
        case "YT": result = {}; break;
        case "TF": result = {}; break;
        case "TS": result = {}; break;
        case "TA": result = {}; break;
        case "like": result = {
            data: [
                {
                    img: "https://p0.meituan.net/deal/__48055017__5025793.jpg@267w_150h_1e_1c",
                    title: "东海水饺王卷饼",
                    score: 4,
                    comment: 987,
                    address: "乳山市中心城区",
                    price: "58.0"
                },
                {
                    img: "https://p0.meituan.net/deal/__48055017__5025793.jpg@267w_150h_1e_1c",
                    title: "东海水饺王卷饼",
                    score: 4,
                    comment: 987,
                    address: "乳山市中心城区",
                    price: "58.0"
                },
                {
                    img: "https://p0.meituan.net/deal/__48055017__5025793.jpg@267w_150h_1e_1c",
                    title: "东海水饺王卷饼",
                    score: 4,
                    comment: 987,
                    address: "乳山市中心城区",
                    price: "58.0"
                },
                {
                    img: "https://p0.meituan.net/deal/__48055017__5025793.jpg@267w_150h_1e_1c",
                    title: "东海水饺王卷饼",
                    score: 4,
                    comment: 987,
                    address: "乳山市中心城区",
                    price: "58.0"
                },
                {
                    img: "https://p0.meituan.net/deal/__48055017__5025793.jpg@267w_150h_1e_1c",
                    title: "东海水饺王卷饼",
                    score: 4,
                    comment: 987,
                    address: "乳山市中心城区",
                    price: "58.0"
                },
                {
                    img: "https://p0.meituan.net/deal/__48055017__5025793.jpg@267w_150h_1e_1c",
                    title: "东海水饺王卷饼",
                    score: 4,
                    comment: 987,
                    address: "乳山市中心城区",
                    price: "58.0"
                },
                {
                    img: "https://p0.meituan.net/deal/__48055017__5025793.jpg@267w_150h_1e_1c",
                    title: "东海水饺王卷饼",
                    score: 4,
                    comment: 987,
                    address: "乳山市中心城区",
                    price: "58.0"
                },
                {
                    img: "https://p0.meituan.net/deal/__48055017__5025793.jpg@267w_150h_1e_1c",
                    title: "东海水饺王卷饼",
                    score: 4,
                    comment: 987,
                    address: "乳山市中心城区",
                    price: "58.0"
                },
                {
                    img: "https://p0.meituan.net/deal/__48055017__5025793.jpg@267w_150h_1e_1c",
                    title: "东海水饺王卷饼",
                    score: 4,
                    comment: 987,
                    address: "乳山市中心城区",
                    price: "58.0"
                },
                {
                    img: "https://p0.meituan.net/deal/__48055017__5025793.jpg@267w_150h_1e_1c",
                    title: "东海水饺王卷饼",
                    score: 4,
                    comment: 987,
                    address: "乳山市中心城区",
                    price: "58.0"
                },
                {
                    img: "https://p0.meituan.net/deal/__48055017__5025793.jpg@267w_150h_1e_1c",
                    title: "东海水饺王卷饼",
                    score: 4,
                    comment: 987,
                    address: "乳山市中心城区",
                    price: "58.0"
                },
                {
                    img: "https://p0.meituan.net/deal/__48055017__5025793.jpg@267w_150h_1e_1c",
                    title: "东海水饺王卷饼",
                    score: 4,
                    comment: 987,
                    address: "乳山市中心城区",
                    price: "58.0"
                },
                {
                    img: "https://p0.meituan.net/deal/__48055017__5025793.jpg@267w_150h_1e_1c",
                    title: "东海水饺王卷饼",
                    score: 4,
                    comment: 987,
                    address: "乳山市中心城区",
                    price: "58.0"
                },
                {
                    img: "https://p0.meituan.net/deal/__48055017__5025793.jpg@267w_150h_1e_1c",
                    title: "东海水饺王卷饼",
                    score: 4,
                    comment: 987,
                    address: "乳山市中心城区",
                    price: "58.0"
                },
                {
                    img: "https://p0.meituan.net/deal/__48055017__5025793.jpg@267w_150h_1e_1c",
                    title: "东海水饺王卷饼",
                    score: 4,
                    comment: 987,
                    address: "乳山市中心城区",
                    price: "58.0"
                }
            ]
        }; break;
    }
    return result;
})


// 获取城市列表
Mock.mock("http://open.duyiedu.com/api/meituan/city/cityList.json?appkey=byfWang_1590670472900", {
    citys: [
        '北京',
        '门头沟区'
    ]
})

// 城市搜索
Mock.mock("http://open.duyiedu.com/api/meituan/city/citySearch.json?appkey=byfWang_1590670472900", {
    citys: [
        '北京',
        '门头沟区'
    ]
})
//获取最近搜索城市和热门城市
Mock.mock("http://open.duyiedu.com/api/meituan/city/hotAre.json?appkey=byfWang_1590670472900", {
    hot: ['北京', '上海', '广州', '深圳', '天津', '西安', '重庆', '杭州', '南京', '武汉', '成都'],
    recent: ['深圳', '阿拉善盟', '凤台', '临沂', '鞍山', '乳山', '三河', ' 大厂回族自治县', '北京', '安阳']
})

// 按字母的城市
function createRandomCity() {
    let result = [];
    for (let i = 0; i < 15; i++) {
        result.push(Mock.Random.city());
    }
    return result;
}
Mock.mock("http://open.duyiedu.com/api/meituan/city/cityByLetter.json?appkey=byfWang_1590670472900", {
    A: ['鞍山', '安庆', '安阳', '安顺', '安康', '安丘', '安岳', '安陆市', '阿克苏', '安州区', '阿图什市', '安吉', '阿拉善盟', '阿荣旗', '安平', '安溪', '安宁', '安化', '阿拉尔', '安福', '阿勒泰市', '阿城区', '澳门', '阿勒泰', '阿里', '阿坝'],
    B: ['北京', '包头', '保定', '蚌埠', '亳州', '滨州', '宝鸡', '白城', '霸州', '巴彦淖尔', '北海', '百色', '巴中', '毕节', '保山', '本溪', '白银', '白山', '璧山', '拜泉县', '拜城县', '宝应', '北流', '博爱', '巴楚县', '宝丰', '博兴', '泌阳', '彬州市', '巴彦县', '博山', '宾阳', '泊头市', ' 博罗县', '博白县', '北镇市', '北安市', '滨海', '北碚', '博尔塔拉', '巴州'],
    C: ['重庆', '成都', '常州', '长春', '长沙', '沧州'],
    D: ['大连', '东莞', '大同', '大庆', '丹东'],
    E: ['鄂尔多斯', '鄂州', '恩施', '恩平', '峨眉山'],
    F: ['福州', '佛山', '阜阳', '抚州', '抚顺'],
    G: ['广州', '贵阳', '赣州', '贵港', '桂林'],
    'H': createRandomCity(),
    'J': createRandomCity(),
    'K': createRandomCity(),
    'L': createRandomCity(),
    'M': createRandomCity(),
    'N': createRandomCity(),
    'p': createRandomCity(),
    'Q': createRandomCity(),
    'R': createRandomCity(),
    'S': createRandomCity(),
    'T': createRandomCity(),
    'W': createRandomCity(),
    'X': createRandomCity(),
    'Y': createRandomCity(),
    'Z': createRandomCity()

})


// 列表页分类和区域数据

let sqsublist = [
    '沙井',
    '华龙',
    '西乡',
    '海岸城/保利',
    '车公庙',
    '坂田',
    '福永',
    '横岗',
    '景田',
    '竹子林',
    '国贸',
    '莲塘',
    '西丽',
    '科技园',
    '石岩',
    '固戍',
    '平湖',
    '水头',
    '双龙',
    '公明',
    '圳美',
    '沙头角'
]
Mock.Random.extend({
    selectsb: function (min, max) {
        return this.pick(sqsublist, min, max)
    }
})
let sortData = [
    {
        title: '美食',
        subList: [
            "全部",
            "更多",
            "地方菜",
            "烤肉",
            "特色菜",
            "日本菜",
            "面包甜点",
            "生日蛋糕",
            "火锅",
        ]
    },
    {
        title: '周边游',
        subList: [
            "全部",
            "真人CS",
        ]
    },
    {
        title: '休闲娱乐',
        subList: [
            "全部",
            "新奇体验",
            "团建拓展",
            "电玩/游戏厅"
        ]
    },
    {
        title: '时尚购',
        subList: [
            "全部",
            "本地购物",
        ]
    },
    {
        title: '学习培训',
        subList: [
            "全部",
            "职业培训",
        ]
    },
    {
        title: '医疗',
        subList: [
            "全部",
            "药店",
        ]
    },
];
let sqData = [
    Mock.mock({
        title: '推荐商圈',
        subList: '@selectsb(7, 16)'
    }),

    Mock.mock({
        title: '福田区',
        subList: '@selectsb(7, 16)'
    }),

    Mock.mock({
        title: '罗湖区',
        subList: '@selectsb(7, 16)'
    }),

    Mock.mock({
        title: '南山区',
        subList: '@selectsb(7, 16)'
    }),

    Mock.mock({
        title: '宝安区',
        subList: '@selectsb(7, 16)'
    }),

    Mock.mock({
        title: '龙岗区',
        subList: '@selectsb(7, 16)'
    }),

    Mock.mock({
        title: '龙华区',
        subList: '@selectsb(7, 16)'
    }),

    Mock.mock({
        title: '盐田区',
        subList: '@selectsb(7, 16)'
    }),

]
Mock.Random.extend({
    selectSort: function (min, max) {
        return this.pick(sortData, min, max)
    },
    selectArea: function (min, max) {
        return this.pick(sqData, min, max)
    }
})


Mock.mock("http://open.duyiedu.com/areaAndsort?appkey=byfWang_1590670472900", {
    sort: `@selectSort(2, 6)`,
    area: '@selectArea(2, 8)',
})

// Mock.mock("http://open.duyiedu.com?appkey=byfWang_1590670472900")
// Mock.mock("http://open.duyiedu.com?appkey=byfWang_1590670472900")