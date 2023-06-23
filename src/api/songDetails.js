import service from "@/utils/request";

// 歌单详情页面基本数据
export function getSongDetailsList(data) {
  return service({
    method: "GET",
    url: `/playlist/detail?id=${data}`,
  });
}

// 歌单歌曲列表
// export function getSongPlaylist(data) {
//     return service({
//       method: "GET",
//       url: `/playlist/track/all?id=24381616`,
//     });
//   }
