/*
 * @Author: lili11.yang
 * @Date: 2023-06-29 18:08:06
 * @Description: maptalks配置
 * @LastEditTime: 2023-07-03 16:52:22
 */
const MAPNAME = "map";
const date = new Date().getFullYear();
const tiandituKey = "d2a862ecf7d40c6a1aa96fdff18bae22";
// 天地图切片服务
const TDTileUrl = `https://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=${tiandituKey}`;
// 天地图注记服务
const TDRoadUrl = `https://t{s}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=${tiandituKey}`;

// 百度暗色系样式
const BDNightStyle =
  "&styles=t%3Aland%7Ce%3Ag%7Cc%3A%231c4b63ff%2Ct%3Abuilding%7Ce%3Aall%7Cv%3Aoff%7Cc%3A%2327454aff%2Ct%3Ahighway%7Ce%3Ag.f%7Cc%3A%232f6a83ff%2Ct%3Aarterial%7Ce%3Ag%7Cc%3A%232d667eff%2Ct%3Agreen%7Ce%3Aall%7Cv%3Aoff%7Cc%3A%231a4f4eff%2Ct%3Awater%7Ce%3Ag%7Cc%3A%23193d4cff%2Ct%3Asubway%7Ce%3Aall%7Cv%3Aoff%7Cc%3A%23181818%2Ct%3Arailway%7Ce%3Aall%7Cv%3Aoff%7Cl%3A-52%2Ct%3Aall%7Ce%3Al.t.s%7Cc%3A%23194757ff%2Ct%3Aall%7Ce%3Al.t.f%7Cc%3A%235fbfdfff%2Ct%3Amanmade%7Ce%3Ag%7Cv%3Aoff%7Cc%3A%2316465eff%2Ct%3Aboundary%7Ce%3Ag%7Cc%3A%2318404eff%7Cw%3A1%2Ct%3Ahighway%7Ce%3Ag.s%7Cc%3A%231f4453ff%2Ct%3Aarterial%7Ce%3Ag.s%7Cc%3A%231f4453ff%2Ct%3Apoi%7Ce%3Aall%7Cv%3Aoff%2Ct%3Ahighway%7Ce%3Al.i%7Cv%3Aoff%2Ct%3Alocal%7Ce%3Ag%7Cc%3A%23265c73ff%2Ct%3Alabel%7Ce%3Al.i%7Cv%3Aoff";
// 百度瓦片地图url
const BDTileUrl =
  "http://api{s}.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}&scale=1&udt=" +
  date;
// 百度瓦片地图（暗色系风格）
const BDNightUrl = BDTileUrl + BDNightStyle;
/**
 * 图层zIndex配置
 */
const layerZIndex = {
  baseLayerZIndex: 1, // baseLayer底图
};
