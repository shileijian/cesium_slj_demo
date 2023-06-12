/**
 * WebGL 示例配置文件：包含示例的分类、名称、缩略图、文件路径
 */
var identification = {
    name: "WebGL"
};
var exampleConfig = {
    'test':{
        name: '测试',
        name_en: "test",
        content: {
            'testone': {
                name: "测试1",
                name_en: "testone1",
                content: [
                    {
                        name: "测试1",
                        name_en: "testone",
                        thumbnail: "notice.png",
                        fileName: "testone",
                    },
                    {
                        name: "test_cartesain3",
                        name_en: "test_cartesain3",
                        thumbnail: "notice.png",
                        fileName: "test_cartesain3",
                    }
                ]
            }
        }
    },
    "marker": {
        name: "矢量数据",
        name_en: "1",
        content: {
            "point": {
                name: "点状对象",
                name_en: "2",
                content: [
                    {
                        name: "点基本用法",
                        name_en: "1",
                        thumbnail: "aa_marker_point.png",
                        fileName: "aa_marker_point"
                    },
                    {
                        name: "点接地线",
                        name_en: "1",
                        thumbnail: "aa_marker_point_addLine.png",
                        fileName: "aa_marker_point_addLine"
                    },
                    {
                        name: "点位聚合",
                        name_en: "4",
                        thumbnail: "aa_marker_point_cluster.png",
                        fileName: "aa_marker_point_cluster"
                    },
                    {
                        name: "文本",
                        name_en: "1",
                        thumbnail: "aa_marker_label.png",
                        fileName: "aa_marker_label"
                    },
                    {
                        name: "颜色点位",
                        name_en: "1",
                        thumbnail: "aa_marker_colorPoint.png",
                        fileName: "aa_marker_colorPoint"
                    },
                    {
                        name: "dom冒泡",
                        name_en: "1",
                        thumbnail: "aa_marker_dom.png",
                        fileName: "aa_marker_dom"
                    },
                    {
                        name: "火焰粒子",
                        name_en: "1",
                        thumbnail: "aa_particle_flame.png",
                        fileName: "aa_particle_flame"
                    },
                ]
            },
            "line": {
                name: "线状对象",
                name_en: "2",
                content: [
                    {
                        name: "线基本用法",
                        name_en: "1",
                        thumbnail: "aa_marker_line.png",
                        fileName: "aa_marker_line"
                    },
                ]
            },
            "polygon": {
                name: "面对象",
                name_en: "2",
                content: [
                    {
                        name: "面基本用法",
                        name_en: "1",
                        thumbnail: "aa_marker_polygon.png",
                        fileName: "aa_marker_polygon"
                    },
                    // {
                    //     name: "贴地面",
                    //     name_en: "1",
                    //     thumbnail: "notice.png",
                    //     fileName: "aa_marker_polygon1"
                    // },
                    {
                        name: "墙",
                        name_en: "1",
                        thumbnail: "aa_primitives_wall.png",
                        fileName: "aa_primitives_wall"
                    },
                    {
                        name: "矩形",
                        name_en: "1",
                        thumbnail: "aa_marker_rectangle.png",
                        fileName: "aa_marker_rectangle"
                    },
                    {
                        name: "热力图test",
                        name_en: "1",
                        thumbnail: "aa_heatmap_test.png",
                        fileName: "aa_heatmap_test"
                    },
                    {
                        name: "热力图(待优化)",
                        name_en: "1",
                        thumbnail: "aa_heatmap.png",
                        fileName: "aa_heatmap"
                    },
                    {
                        name: "视频融合",
                        name_en: "1",
                        thumbnail: "aa_videoFusion.png",
                        fileName: "aa_videoFusion"
                    },
                ]
            },
            "circle": {
                name: "圆",
                name_en: "2",
                content: [
                    {
                        name: "圆基本用法",
                        name_en: "1",
                        thumbnail: "aa_marker_circle.png",
                        fileName: "aa_marker_circle"
                    },
                    {
                        name: "扩散圆",
                        name_en: "1",
                        thumbnail: "aa_dynamic_addSpreadCircle.png",
                        fileName: "aa_dynamic_addSpreadCircle"
                    },
                    {
                        name: "旋转圆",
                        name_en: "1",
                        thumbnail: "aa_dynamic_addRotateCircle.png",
                        fileName: "aa_dynamic_addRotateCircle"
                    },
                ]
            },
            "draw": {
                name: "绘制类",
                name_en: "5",
                content: [
                    {
                        name: "基本用法",
                        name_en: "1",
                        thumbnail: "aa_draw_line.png",
                        fileName: "aa_draw_line"
                    },
                ]
            },
            "edit": {
                name: "编辑类",
                name_en: "5",
                content: [
                    {
                        name: "基本用法",
                        name_en: "1",
                        thumbnail: "aa_edit_base.png",
                        fileName: "aa_edit_base"
                    },
                ]
            },
            "roam": {
                name: "巡更漫游",
                name_en: "5",
                content: [
                    {
                        name: "巡更",
                        name_en: "1",
                        thumbnail: "aa_patrol.png",
                        fileName: "aa_patrol"
                    },
                ]
            },
            "tile": {
                name: "3dTile",
                name_en: "5",
                content: [
                    {
                        name: "加载3dTile",
                        name_en: "1",
                        thumbnail: "aa_3dTile.png",
                        fileName: "aa_3dTile"
                    },
                ]
            },
        },
    },
    "toolBox": {
        name: "工具方法",
        name_en: "1",
        content: {
            "tool": {
                name: "工具方法",
                name_en: "2",
                content: [
                    {
                        name: "获取相机视角",
                        name_en: "1",
                        thumbnail: "notice.png",
                        fileName: "aa_tool_getCameraGesture"
                    },
                    {
                        name: "点击获取经纬度",
                        name_en: "3",
                        thumbnail: "notice.png",
                        fileName: "aa_tool_getPosition"
                    },
                    {
                        name: "几种飞行",
                        name_en: "3",
                        thumbnail: "notice.png",
                        fileName: "aa_tool_fly"
                    },
                    {
                        name: "根据id获取marker",
                        name_en: "3",
                        thumbnail: "notice.png",
                        fileName: "aa_tool_getMarker"
                    },
                ]
            },
        },
    },
    "datasource": {
        name: "数据源（图层）",
        name_en: "1",
        content: {
            "initMap": {
                name: "数据源",
                name_en: "2",
                content: [
                    {
                        name: "数据源创建",
                        name_en: "1",
                        thumbnail: "notice.png",
                        fileName: "aa_dataSource_create"
                    },
                    {
                        name: "数据源中点聚合",
                        name_en: "1",
                        thumbnail: "notice.png",
                        fileName: "aa_dataSource_cluster"
                    },
                ]
            },
        },
    },
    // "init": {
    //     name: "初始化",
    //     name_en: "init",
    //     content: {
    //         "initMap": {
    //             name: "初始化地图",
    //             name_en: "notice",
    //             content: [
    //                 {
    //                     name: "注意事项",
    //                     name_en: "notice",
    //                     thumbnail: "notice.png",
    //                     fileName: "notice"
    //                 },
    //                 {
    //                     name: "初始化地图",
    //                     name_en: "initMap",
    //                     thumbnail: "initMap.png",
    //                     fileName: "initMap"
    //                 },
    //                 {
    //                     name: "初始化地图参数化",
    //                     name_en: "initMapParm",
    //                     thumbnail: "initMapParm.png",
    //                     fileName: "initMapParm"
    //                 }
    //             ]
    //         },
    //     },
    // },
    // "layer": {
    //     name: "图层",
    //     name_en: "layer",
    //     content: {
    //         "baseLayer": {
    //             name: "基础底图",
    //             name_en: "baseLayer",
    //             content: [
    //                 {
    //                     name: "百度在线底图（无偏移）",
    //                     name_en: "baidu",
    //                     thumbnail: "baseLayer_baidu.png",
    //                     fileName: "baseLayer_baidu"
    //                 },
    //                 {
    //                     name: "高德在线底图（无偏移）",
    //                     name_en: "gaode",
    //                     thumbnail: "baseLayer_gaode.png",
    //                     fileName: "baseLayer_gaode"
    //                 },
    //                 {
    //                     name: "天地图在线底图",
    //                     name_en: "tianditu",
    //                     thumbnail: "initMapParm.png",
    //                     fileName: "baseLayer_tiandi"
    //                 },
    //                 {
    //                     name: "本地影像（离线）",
    //                     name_en: "local",
    //                     thumbnail: "local.jpg",
    //                     fileName: "baseLayer_local"
    //                 },
    //                 {
    //                     name: "本地单张图片",
    //                     name_en: "local_image",
    //                     thumbnail: "local_image.png",
    //                     fileName: "baseLayer_image"
    //                 }
    //             ]
    //         },
    //         "terrain": {
    //             name: "地形叠加",
    //             name_en: "terrain",
    //             content: [
    //                 {
    //                     name: "arcgis全球地形",
    //                     name_en: "arcgis_terrain",
    //                     thumbnail: "arcgisTerrain.png",
    //                     fileName: "arcgisTerrain"
    //                 },
    //                 {
    //                     name: "局部地形（本地离线）",
    //                     name_en: "local_terrain",
    //                     thumbnail: "localTerrain.png",
    //                     fileName: "localTerrain"
    //                 }
    //             ]
    //         },
    //         "operation": {
    //             name: "底图操作",
    //             name_en: "operation",
    //             content: [
    //                 {
    //                     name: "区域面立体",
    //                     name_en: "baseLayer_region",
    //                     thumbnail: "baseLayer_region.png",
    //                     fileName: "baseLayer_region"
    //                 },
    //                 {
    //                     name: "底图变色1",
    //                     name_en: "baseLayer_theme1",
    //                     thumbnail: "baseLayer_theme1.png",
    //                     fileName: "baseLayer_theme1"
    //                 },
    //                 {
    //                     name: "底图变色2",
    //                     name_en: "baseLayer_theme2",
    //                     thumbnail: "baseLayer_theme2.png",
    //                     fileName: "baseLayer_theme2"
    //                 },
    //             ]
    //         }
    //     }
    // },
    // "vector": {
    //     name: "矢量数据",
    //     name_en: "vector",
    //     content: {
    //         "point": {
    //             name: "点状对象",
    //             name_en: "point",
    //             content: [
    //                 {
    //                     name: "普通点",
    //                     name_en: "point_common",
    //                     thumbnail: "pointCommon.png",
    //                     fileName: "pointCommon"
    //                 },
    //                 {
    //                     name: "接地线点",
    //                     name_en: "point_line",
    //                     thumbnail: "pointLine.png",
    //                     fileName: "pointLine"
    //                 },
    //                 {
    //                     name: "旋转点",
    //                     name_en: "point_rotate",
    //                     thumbnail: "pointRotate.png",
    //                     fileName: "pointRotate"
    //                 },
    //             ]
    //         },
    //         "line": {
    //             name: "线状对象",
    //             name_en: "line",
    //             content: [
    //                 {
    //                     name: "普通实/虚线",
    //                     name_en: "line_common",
    //                     thumbnail: "lineCommon.png",
    //                     fileName: "vector_lineCommon"
    //                 },
    //                 {
    //                     name: "流动线",
    //                     name_en: "line_flowing",
    //                     thumbnail: "vector_lineFlowing.png",
    //                     fileName: "vector_lineFlowing"
    //                 },
    //             ]
    //         },
    //         "polygon": {
    //             name: "面状对象",
    //             name_en: "polygon",
    //             content: [
    //                 {
    //                     name: "普通多边形",
    //                     name_en: "vector_polygon",
    //                     thumbnail: "vector_polygon.png",
    //                     fileName: "vector_polygon"
    //                 },
    //                 {
    //                     name: "反向多边形",
    //                     name_en: "vector_polygonReverse",
    //                     thumbnail: "vector_polygonReverse.png",
    //                     fileName: "vector_polygonReverse"
    //                 },
    //             ]
    //         },
    //         "wall": {
    //             name: "墙体",
    //             name_en: "wall",
    //             content: [
    //                 {
    //                     name: "横向滑动墙体",
    //                     name_en: "wall_horizontal",
    //                     thumbnail: "wall_horizontal.png",
    //                     fileName: "vector_wall_horizontal"
    //                 },
    //                 {
    //                     name: "纵向滑动墙体",
    //                     name_en: "wall_direction",
    //                     thumbnail: "wall_direction.png",
    //                     fileName: "vector_wall_vertical"
    //                 },
    //                 {
    //                     name: "渐变色墙体",
    //                     name_en: "wall_gradient",
    //                     thumbnail: "wall_gradient.png",
    //                     fileName: "vector_wall_gradient"
    //                 },
    //             ]
    //         },
    //         "sphere": {
    //             name: "球体",
    //             name_en: "sphere",
    //             content: [
    //                 {
    //                     name: "普通实线",
    //                     name_en: "line_common",
    //                     thumbnail: "lineCommon.jpg",
    //                     fileName: "lineCommon"
    //                 },
    //             ]
    //         },
    //     }
    // },
    // "effect3d": {
    //     name: "三维特效",
    //     name_en: "effect3d",
    //     content: {
    //         "particle": {
    //             name: "粒子效果",
    //             name_en: "particle",
    //             content: [
    //                 {
    //                     name: "天气雨",
    //                     name_en: "particle_rain",
    //                     thumbnail: "particle_rain.jpg",
    //                     fileName: "particle_rain"
    //                 },
    //                 {
    //                     name: "天气雪",
    //                     name_en: "particle_snow",
    //                     thumbnail: "particle_snow.jpg",
    //                     fileName: "particle_snow"
    //                 },
    //                 {
    //                     name: "天气雾",
    //                     name_en: "particle_fog",
    //                     thumbnail: "particle_fog.jpg",
    //                     fileName: "particle_fog"
    //                 },
    //                 {
    //                     name: "火灾",
    //                     name_en: "particle_fire",
    //                     thumbnail: "particle_fire.jpg",
    //                     fileName: "particle_fire"
    //                 },
    //                 {
    //                     name: "烟雾",
    //                     name_en: "particle_smoke",
    //                     thumbnail: "particle_smoke.jpg",
    //                     fileName: "particle_smoke"
    //                 },
    //             ]
    //         },
    //         "animation": {
    //             name: "动画效果",
    //             name_en: "animation",
    //             content: [
    //                 {
    //                     name: "普通点",
    //                     name_en: "point_common",
    //                     thumbnail: "pointCommon.jpg",
    //                     fileName: "pointCommon"
    //                 },
    //             ]
    //         },
    //         "roam": {
    //             name: "漫游效果",
    //             name_en: "roam",
    //             content: [
    //                 {
    //                     name: "普通点",
    //                     name_en: "point_common",
    //                     thumbnail: "pointCommon.jpg",
    //                     fileName: "pointCommon"
    //                 },
    //             ]
    //         },
    //     }
    // },
    // "model":{
    //     name: "模型",
    //     name_en: "model",
    //     content:{
    //         "albuginea":{
    //             name: "白膜效果",
    //             name_en: "albuginea",
    //             content:[
    //                 {
    //                     name: "白膜效果",
    //                     name_en: "albuginea",
    //                     thumbnail: "albuginea.png",
    //                     fileName: "model-albuginea"
    //                 },
    //                 {
    //                     name: "科技蓝",
    //                     name_en: "dazzle",
    //                     thumbnail: "model-dazzle.png",
    //                     fileName: "model-dazzle"
    //                 },
    //             ]
    //         },
    //         "3dtiles":{
    //             name: "建筑物模型",
    //             name_en: "3dtiles",
    //             content:[
    //                 {
    //                     name: "倾斜摄影",
    //                     name_en: "osgb",
    //                     thumbnail: "model-osgb.png",
    //                     fileName: "model-osgb"
    //                 },
    //                 {
    //                     name: "人工建模",
    //                     name_en: "3dmax",
    //                     thumbnail: "3dmax.jpg",
    //                     fileName: "3dmax"
    //                 },
    //             ]
    //         },
    //         "shadow":{
    //             name: "建筑物阴影",
    //             name_en: "shadow",
    //             content:[
    //                 {
    //                     name: "建筑物阴影",
    //                     name_en: "shadow",
    //                     thumbnail: "shadow.png",
    //                     fileName: "model-shadow"
    //                 },
    //             ]
    //         }
    //     }
    // },

};

/**
 *key值：为exampleConfig配置的key值或者fileName值
 *      （为中间节点时是key值，叶结点是fileName值）
 *value值：fontawesome字体icon名
 *不分层
 */
var sideBarIconConfig = {
    "layer": "icon-fa-object-group",
    "vector": "icon-fa-vector",

    "online-base-map": "fa-globe",
    "Scene": "fa-university",
    "fly": "fa-send",
    "KMLAndModel": "fa-cubes",
    "online-draw": "fa-edit",
    "search": "fa-search",
    "measurement": "fa-arrows-v",
    "analysis": "fa-map",
    "visualization": "fa-eye",
    "stereoscopic-show": "fa-cube",
    "plot": "fa-pencil"
};

/**
 *key值：为exampleConfig配置的key值
 *value值：fontawesome字体icon名
 *与sideBarIconConfig的区别：sideBarIconConfig包括侧边栏所有层级目录的图标，exampleIconConfig仅包括一级标题的图标
 */
var exampleIconConfig = {
    "layer": "fa-object-group",

    "online-base-map": "fa-globe",
    "Scene": "fa-university",
    "fly": "fa-send",
    "KMLAndModel": "fa-cubes",
    "online-draw": "fa-edit",
    "search": "fa-search",
    "measurement": "fa-arrows-v",
    "analysis": "fa-map",
    "visualization": "fa-eye",
    "stereoscopic-show": "fa-cube",
    "plot": "fa-pencil"
};