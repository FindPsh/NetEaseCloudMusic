import service from "@/utils/request";

// 歌单详情页面基本数据
export function getSongDetailsList(data) {
  return service({
    method: "GET",
    url: `/playlist/detail?id=${data}`,
  });
}

// 获取歌词数据
export function getSongLyric(data) {
  return service({
    method: "GET",
    url: `/lyric?id=${data}`,
  });
}
