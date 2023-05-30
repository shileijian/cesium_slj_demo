function importLibs() {
  function importLib(urls) {
    document.writeln(`<script type="text/javascript" src="${urls}"></script>`)
  }
  document.writeln(`<script src="../CDN/vue.global.js"></script>`)
  importLib('../../Cesium/Cesium.js');
  importLib('../../CesiumNavigation/CesiumNavigation.umd.js');
  importLib('../../CDN/heatmap.min.js');
  importLib('../../CDN/turf.min.js');
  importLib('../../Example/examples/js/dat.gui.min.js');
  importLib('../../config/index_location.umd.cjs');
  // document.writeln(`<script type="module" src="../../src/api/slj3d/index_location.js"></script>`)
  document.writeln(`<link rel="stylesheet" href="../../Cesium/Widgets/widgets.css">`)
  document.writeln(`<link rel="stylesheet" href="../../config/style.css">`)
};
if (!window.indexPage) {
  importLibs();
}