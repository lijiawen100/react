import { request } from "../plugins/uni-request";

export function loginApi({ userName, password }) {
  return request.post("/api/v1/auth/manager_login", {
    data: { userName, password },
  });
}
