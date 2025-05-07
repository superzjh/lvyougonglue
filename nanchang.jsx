import React, { useState } from 'react';
import { 
  Plane, 
  Train, 
  Bus, 
  MapPin, 
  Clock, 
  Calendar, 
  Utensils, 
  Landmark,
  Mountain,
  Park,
  Museum,
  FerrisWheel,
  ShoppingBag,
  Map
} from 'lucide-react';
import { motion } from 'framer-motion';

const NanchangTravelGuide = () => {
  const [activeDay, setActiveDay] = useState(1);

  // 交通信息数据
  const transportData = [
    { route: "南昌昌北国际机场 → 酒店", method: "出租车", distance: "15km", time: "25分钟", cost: "￥45" },
    { route: "酒店 → 滕王阁", method: "地铁1号线", distance: "3.2km", time: "15分钟", cost: "￥6" },
    { route: "滕王阁 → 八一起义纪念馆", method: "步行", distance: "1.5km", time: "20分钟", cost: "免费" },
    { route: "八一起义纪念馆 → 船山路夜市", method: "出租车", distance: "2.8km", time: "10分钟", cost: "￥12" },
    { route: "酒店 → 万寿宫历史文化街区", method: "地铁1号线", distance: "4km", time: "18分钟", cost: "￥6" },
    { route: "万寿宫 → 秋水广场", method: "步行", distance: "1.2km", time: "15分钟", cost: "免费" },
    { route: "秋水广场 → 南昌之星摩天轮", method: "出租车", distance: "5km", time: "15分钟", cost: "￥18" },
    { route: "酒店 → 海昏侯国遗址公园", method: "旅游专线", distance: "45km", time: "1小时", cost: "￥30" },
    { route: "海昏侯国遗址公园 → 梅岭国家森林公园", method: "旅游专线", distance: "35km", time: "50分钟", cost: "￥25" },
    { route: "梅岭 → 绳金塔", method: "出租车", distance: "20km", time: "30分钟", cost: "￥40" },
    { route: "绳金塔 → 江西省博物馆", method: "地铁2号线", distance: "6km", time: "20分钟", cost: "￥6" },
    { route: "江西省博物馆 → 南昌西站", method: "地铁2号线", distance: "8km", time: "25分钟", cost: "￥6" }
  ];

  // 景点数据
  const attractions = [
    { 
      name: "滕王阁", 
      address: "仿古街44号", 
      icon: <Landmark size={20} />,
      image: "https://s.coze.cn/t/_owVtF3s4Wk/",
      facilities: ["售票处", "地铁站", "停车场"],
      description: "江南三大名楼之一，建议游玩2小时"
    },
    { 
      name: "八一起义纪念馆", 
      address: "中山路380号", 
      icon: <Museum size={20} />,
      image: "https://s.coze.cn/t/Y39HzGpea_A/",
      facilities: ["游客服务中心", "讲解服务"],
      description: "了解南昌起义历史，建议游玩1.5小时"
    },
    { 
      name: "万寿宫历史文化街区", 
      address: "广润门街道中山路", 
      icon: <ShoppingBag size={20} />,
      image: "https://s.coze.cn/t/PVzKh6b6PW0/",
      facilities: ["游客中心", "停车场", "餐饮"],
      description: "体验南昌传统文化，建议游玩2小时"
    },
    { 
      name: "秋水广场", 
      address: "雄州路与赣江中大道交叉口", 
      icon: <Park size={20} />,
      image: "https://s.coze.cn/t/4KocuK-ML9Y/",
      facilities: ["音乐喷泉", "观景台"],
      description: "欣赏赣江夜景，建议游玩1小时"
    },
    { 
      name: "南昌之星摩天轮", 
      address: "赣江南大道1号南昌之星游乐园内", 
      icon: <FerrisWheel size={20} />,
      image: "https://s.coze.cn/t/G7NSS6ebxrs/",
      facilities: ["游客中心", "观景台"],
      description: "亚洲最高摩天轮之一，建议游玩1小时"
    },
    { 
      name: "海昏侯国遗址公园", 
      address: "紫金大道1号", 
      icon: <Museum size={20} />,
      image: "https://s.coze.cn/t/XmJncDYACM0/",
      facilities: ["售票中心", "游客服务中心"],
      description: "探索汉代文化遗址，建议游玩3小时"
    },
    { 
      name: "梅岭国家森林公园", 
      address: "梅岭镇", 
      icon: <Mountain size={20} />,
      image: "https://s.coze.cn/t/RdbiXwtY6uQ/",
      facilities: ["景区游客中心", "停车场"],
      description: "自然风光与徒步路线，建议游玩4小时"
    },
    { 
      name: "绳金塔", 
      address: "绳金塔街1号", 
      icon: <Landmark size={20} />,
      image: "https://s.coze.cn/t/rE2JWJBts14/",
      facilities: ["地铁站", "公交站"],
      description: "南昌地标建筑，建议游玩1小时"
    },
    { 
      name: "江西省博物馆", 
      address: "赣江北大道698号", 
      icon: <Museum size={20} />,
      image: "https://s.coze.cn/t/uVruYZ5Mp2M/",
      facilities: ["游客中心", "停车场"],
      description: "了解江西历史文化，建议游玩2小时"
    },
    { 
      name: "船山路夜市", 
      address: "船山路与象山南路交叉口西南40米", 
      icon: <Utensils size={20} />,
      image: "https://s.coze.cn/t/FsofuO_qgfg/",
      facilities: ["餐饮", "小吃"],
      description: "品尝南昌特色美食，建议游玩1.5小时"
    },
    { 
      name: "八一大桥", 
      address: "东湖区", 
      icon: <Landmark size={20} />,
      image: "https://s.coze.cn/t/HXucTE7tLiY/",
      facilities: ["公交站"],
      description: "南昌标志性桥梁，建议游玩0.5小时"
    }
  ];

  // 交通站点数据
  const transportStations = [
    { 
      name: "南昌昌北国际机场", 
      address: "机场路", 
      icon: <Plane size={20} />,
      image: "https://s.coze.cn/t/CqoU0sXd0SI/",
      facilities: ["航站楼", "停车场", "客运站"]
    },
    { 
      name: "南昌西站", 
      address: "西站大街1号", 
      icon: <Train size={20} />,
      image: "https://s.coze.cn/t/fQOCwEpeLeg/",
      facilities: ["长途汽车站", "地铁站"]
    },
    { 
      name: "北京西站", 
      address: "莲花池东路118号", 
      icon: <Train size={20} />,
      image: "https://s.coze.cn/t/9whLy7AnCa4/",
      facilities: ["地铁站", "公交站"]
    },
    { 
      name: "朝阳机场", 
      address: "朝阳大街四段81号", 
      icon: <Plane size={20} />,
      image: "https://s.coze.cn/t/BAcLwgDdBrs/",
      facilities: ["停车场", "航站楼"]
    },
    { 
      name: "北京朝阳站", 
      address: "东风乡姚家园北路附近", 
      icon: <Train size={20} />,
      image: "https://s.coze.cn/t/KGIKQMpnha0/",
      facilities: ["地铁站", "公交站"]
    },
    { 
      name: "辽宁朝阳站", 
      address: "辽宁朝阳", 
      icon: <Train size={20} />,
      image: "https://s.coze.cn/t/ZWw_jsHMqoM/",
      facilities: ["进站口", "出站口", "售票处"]
    }
  ];

  // 行程安排数据
  const itinerary = [
    {
      day: 1,
      title: "抵达南昌 & 市区游览",
      activities: [
        {
          time: "08:00-09:00",
          title: "抵达南昌昌北国际机场",
          description: "乘坐航班抵达南昌，前往酒店办理入住",
          transport: {
            method: "出租车",
            duration: "25分钟",
            distance: "15km"
          },
          image: "https://s.coze.cn/t/CqoU0sXd0SI/"
        },
        {
          time: "10:00-12:00",
          title: "滕王阁游览",
          description: "参观江南三大名楼之一，欣赏赣江风光",
          transport: {
            method: "地铁1号线",
            duration: "15分钟",
            distance: "3.2km"
          },
          image: "https://s.coze.cn/t/_owVtF3s4Wk/"
        },
        {
          time: "12:30-14:00",
          title: "午餐时间",
          description: "品尝南昌特色美食",
          transport: {
            method: "步行",
            duration: "10分钟",
            distance: "800m"
          },
          image: "https://s.coze.cn/t/FsofuO_qgfg/"
        },
        {
          time: "14:30-16:00",
          title: "八一起义纪念馆",
          description: "了解南昌起义历史",
          transport: {
            method: "步行",
            duration: "20分钟",
            distance: "1.5km"
          },
          image: "https://s.coze.cn/t/Y39HzGpea_A/"
        },
        {
          time: "18:00-20:00",
          title: "船山路夜市",
          description: "体验南昌夜市文化，品尝当地小吃",
          transport: {
            method: "出租车",
            duration: "10分钟",
            distance: "2.8km"
          },
          image: "https://s.coze.cn/t/FsofuO_qgfg/"
        }
      ]
    },
    {
      day: 2,
      title: "文化探索日",
      activities: [
        {
          time: "09:00-11:00",
          title: "万寿宫历史文化街区",
          description: "体验南昌传统文化",
          transport: {
            method: "地铁1号线",
            duration: "18分钟",
            distance: "4km"
          },
          image: "https://s.coze.cn/t/PVzKh6b6PW0/"
        },
        {
          time: "11:30-12:30",
          title: "八一大桥",
          description: "南昌标志性桥梁",
          transport: {
            method: "步行",
            duration: "15分钟",
            distance: "1.2km"
          },
          image: "https://s.coze.cn/t/HXucTE7tLiY/"
        },
        {
          time: "14:00-16:00",
          title: "秋水广场",
          description: "欣赏赣江风光",
          transport: {
            method: "步行",
            duration: "15分钟",
            distance: "1.2km"
          },
          image: "https://s.coze.cn/t/4KocuK-ML9Y/"
        },
        {
          time: "17:00-19:00",
          title: "南昌之星摩天轮",
          description: "俯瞰南昌全景",
          transport: {
            method: "出租车",
            duration: "15分钟",
            distance: "5km"
          },
          image: "https://s.coze.cn/t/G7NSS6ebxrs/"
        }
      ]
    },
    {
      day: 3,
      title: "自然与历史之旅",
      activities: [
        {
          time: "08:00-10:00",
          title: "海昏侯国遗址公园",
          description: "探索汉代文化遗址",
          transport: {
            method: "旅游专线",
            duration: "1小时",
            distance: "45km"
          },
          image: "https://s.coze.cn/t/XmJncDYACM0/"
        },
        {
          time: "12:00-16:00",
          title: "梅岭国家森林公园",
          description: "享受自然风光",
          transport: {
            method: "旅游专线",
            duration: "50分钟",
            distance: "35km"
          },
          image: "https://s.coze.cn/t/RdbiXwtY6uQ/"
        },
        {
          time: "17:00-18:00",
          title: "绳金塔",
          description: "参观南昌地标建筑",
          transport: {
            method: "出租车",
            duration: "30分钟",
            distance: "20km"
          },
          image: "https://s.coze.cn/t/rE2JWJBts14/"
        }
      ]
    },
    {
      day: 4,
      title: "博物馆与返程",
      activities: [
        {
          time: "09:00-11:00",
          title: "江西省博物馆",
          description: "了解江西历史文化",
          transport: {
            method: "地铁2号线",
            duration: "20分钟",
            distance: "6km"
          },
          image: "https://s.coze.cn/t/uVruYZ5Mp2M/"
        },
        {
          time: "12:00-13:00",
          title: "午餐时间",
          description: "品尝最后一顿南昌美食",
          transport: {
            method: "步行",
            duration: "10分钟",
            distance: "500m"
          }
        },
        {
          time: "14:00-15:00",
          title: "前往南昌西站",
          description: "准备返程",
          transport: {
            method: "地铁2号线",
            duration: "25分钟",
            distance: "8km"
          },
          image: "https://s.coze.cn/t/fQOCwEpeLeg/"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 标题区 */}
      <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-500 overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-2"
          >
            南昌4天3晚深度游
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            2025年5月16日 - 19日
          </motion.p>
        </div>
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent z-0"></div>
      </div>

      {/* 行程概览 */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Calendar className="mr-2 text-blue-600" />
          行程概览
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {itinerary.map((day) => (
            <motion.div
              key={day.day}
              whileHover={{ y: -5 }}
              onClick={() => setActiveDay(day.day)}
              className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all ${activeDay === day.day ? 'ring-2 ring-blue-500' : ''}`}
            >
              <div className="h-32 overflow-hidden">
                <img 
                  src={day.activities[0]?.image || "https://s.coze.cn/t/_owVtF3s4Wk/"} 
                  alt={day.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">第{day.day}天</h3>
                <p className="text-gray-600 text-sm">{day.title}</p>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <Clock size={14} className="mr-1" />
                  <span>{day.activities.length}个行程</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 每日行程详情 */}
      <section className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <MapPin className="mr-2 text-blue-600" />
          第{activeDay}天行程详情
        </h2>
        
        <div className="space-y-6">
          {itinerary[activeDay-1]?.activities?.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="md:w-1/4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{activity.time}</h3>
                    <p className="text-sm text-gray-500">{activity.transport?.method} · {activity.transport?.duration}</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/4">
                <h3 className="font-semibold text-lg mb-1">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
                {activity.transport && (
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    <span>{activity.transport.distance}</span>
                  </div>
                )}
              </div>
              <div className="md:w-1/4">
                {activity.image && (
                  <div className="h-32 rounded-md overflow-hidden">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 交通信息 */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Train className="mr-2 text-blue-600" />
          交通信息
        </h2>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">行程路线</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">交通方式</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">距离</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">时间</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">费用(2人)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transportData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.route}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.method}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.distance}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 交通站点信息 */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Plane className="mr-2 text-blue-600" />
          交通站点信息
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transportStations.map((station, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={station.image} 
                  alt={station.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                    {station.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{station.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{station.address}</p>
                <div className="flex flex-wrap gap-2">
                  {station.facilities.map((facility, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 景点信息 */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Park className="mr-2 text-blue-600" />
          景点信息
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                    {attraction.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{attraction.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{attraction.address}</p>
                <p className="text-gray-700 mb-3">{attraction.description}</p>
                <div className="flex flex-wrap gap-2">
                  {attraction.facilities.map((facility, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-gray-400 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">created by <a href="https://space.coze.cn" className="text-blue-300 hover:text-blue-400 hover:underline">coze space</a></p>
          <p className="text-sm">页面内容均由 AI 生成，仅供参考</p>
        </div>
      </footer>
    </div>
  );
};

export default NanchangTravelGuide;
