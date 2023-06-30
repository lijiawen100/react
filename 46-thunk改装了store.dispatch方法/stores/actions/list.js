export const asyncAdd = (dispatch) => {
  setTimeout(() => {
    //异步数据
    let data = "ddd";
    // 发送数据给reducer
    dispatch({ type: "add", payload: data });
  }, 2000);
};
