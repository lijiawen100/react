import { request } from "../plugins/uni-request";

//获取商品列表
export function findProductList(page = 1, per = 2) {
  return request.get("/api/v1/admin/products", { params: { page, per } });
}

//编辑一条商品
export function modifyProductOne(id, data) {
  return request.put("/api/v1/admin/products/" + id, { data });
}

// 删除一条商品
export function delProductOne(id) {
  return request.delete("/api/v1/admin/products/" + id);
}

// 新增一条商品
export function addProduct(data) {
  return request.post("/api/v1/admin/products", { data });
}

// 获取商品详情
export function findProductDetail(id) {
  return request.get("/api/v1/admin/products/" + id);
}
