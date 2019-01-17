import importedComponent from "react-imported-component";

export default [
  {
    path: "/",
    comp: importedComponent(() => import("../client/pages/index/index")),
    modules: ["../client/pages/index/index"],
    loading: () => "Загрузка",
    fetchInitialData: () =>
      new Promise(resolve =>
        resolve({
          test: {
            hello: "world"
          }
        })
      )
  },
  {
    path: "/about",
    comp: importedComponent(() => import("../client/pages/about")),
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
