//////////////////////////////////////示例配置开始////////////////////////////////////


const config = Object.freeze({
  /**
   * coogl引擎地址
   * 
   * 服务器：http://192.168.10.202:30010/CooGL/version/v1.3/CooGL.js
   * 本地部署：http://localhost:30012/CooGL/CooGL.js
   * 本地开发：http://localhost:30012/buildCooGL.js
   */
  url: "http://192.168.10.202:30010/CooGL/version/v1.3/CooGL.js",


  /**
   * CooGL在线文档地址
   */
  api: "http://192.168.10.202:30010/CooGL/Documentation",


  /**
   * CooServer服务配置
   * 若需要访问授权、地形、模型、倾斜等服务资源时，需要配置Server信息，如:
   * server: 服务地址
   * accessToken：接口令牌
   */
  server: "http://192.168.10.202:8099",
  accessToken: "ddf0c147-706d-4ba1-a188-b04ef92633ce",


  /**
   * 示例中涉及到的数据资源
   * sources:
   * - server为前缀表示CooServer服务器发布资源
   * - offline为前缀表示离线资源，通过nginx或者tomcat等应用服务器发布出来的网络地址
   */
  sources: {
    // CooServer资源
    server3dtiles: "智慧E谷",
    server3dtilesClassification: "桐乡倾斜",
    serverGeoJsonClassification: "桐乡街道盒子",
    serverIndoor: "桐乡模型四号楼一楼",
    serverRoom: "苏州人工模型1",

    // 离线数据
    offline3dtiles: "/datas/3dtiles/zheg/tileset.json",
    offlinegltf: "/datas/glb/zheg.glb",
    offlinePbr: "/datas/glb/pbr.glb",
    xiaofangche: "/datas/gltf/xiaofangche.gltf",
    aircraft: "/datas/gltf/aircraft.gltf",
    walk: "/datas/gltf/walk.gltf",
    singleGlb: "/datas/glb/single.glb",
    mask_hz: "/datas/geojson/mask_hz.json",
    zj: "/datas/geojson/zj.json",
    dimian: "/datas/pannellum/pan/dimian.js",
    hedao: "/datas/geojson/hedao.json",
    wind: "/datas/geojson/wind.json",

    /**
     * 示例中加载默认影像，若未定义加载CooGL离线影像
     */
    DEFAULT_DOM: {
      imagery: {
        wmts: {
          url: "https://webst02.is.autonavi.com/appmaptile?style=6&x={TileCol}&y={TileRow}&z={TileMatrix}",
          tilingScheme: 1,
          layer: 0,
          show: true
        }
      }
    },

    /**
     * 地形
     */
    DEM: "/datas/dem/hz"
  }
});

//////////////////////////////////////示例配置结束////////////////////////////////////



////////////////////////////////////以下内容请勿修改！！///////////////////////////////
function importLibs() {
  function importLib(urls) {
    document.writeln(`<script type="text/javascript" src="${urls}"></script>`)
  }
  importLib('/public/Cesium/Cesium.js');
  document.writeln(`<script type="module" src="../../src/scripts/gl3d/index-lt.js"></script>`)
  // importLib("../../src/scripts/gl3d/index-lt.js");
  // importLib("../assets/js/jquery.min.js")
};
if (!window.indexPage) {
  importLibs();
}