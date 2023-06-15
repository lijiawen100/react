import { request } from "../plugins/uni-request";

//获取商品列表
export function findProductList(page = 1, per = 2) {
  return request.get("/api/v1/admin/products", { params: { page, per } });
}
