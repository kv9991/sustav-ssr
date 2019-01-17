export default [
  {
    path: "/",
    exact: true,
    loader: () => import("../client/pages/index"),
    modules: ["../client/pages/index"],
    loading: () => "Загрузка"
  },
  {
    path: "/about",
    exact: true,
    loader: () => import("../client/pages/about"),
    loading: () => "Загрузка",
    modules: ["../client/pages/about"],
    fetchInitialData: () =>
      new Promise(resolve =>
        resolve({
          test: {
            hello: "world"
          }
        })
      )
  }
];
