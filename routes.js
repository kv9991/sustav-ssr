export default [
  {
    path: "/",
    exact: true,
    loader: () => import("./client/pages/index"),
    loading: () => "Загрузка"
  },
  {
    path: "/about",
    exact: true,
    loader: () => import("./client/pages/about"),
    loading: () => "Загрузка",
    fetchInitialData: () =>
      new Promise(resolve =>
        resolve({
          data: "hello world"
        })
      )
  }
];
