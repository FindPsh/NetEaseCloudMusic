import service from "@/utils/request";
// 轮播图
export function getBanner() {
  return service({
    method: "GET",
    url: "/banner?type=2",
  });
}

export function getMusicList() {
  return service({
    method: "GET",
    url: "/personalized?limit=10",
  });
}
