<template>
  <div>
    酒店页面
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.onLoad = function() {
      var map = new AMap.Map("container", {
        zoom: 15, //级别
        center: [116.397428, 39.90923], //中心点坐标
        viewMode: "3D" //使用3D视图
      });

      var marker = new AMap.Marker({
        position: [116.397428, 39.90923], //位置
        offset: new AMap.Pixel(-10, -10),
        title: "北京"
      });
      map.add(marker); //添加到地图
    };

    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=d97e3b5034adcdff371896d2fca30b01&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>

<style>
#container {
  width: 600px;
  height: 380px;
}
</style>