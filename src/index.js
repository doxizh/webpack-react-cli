import React from "react";
import ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import Router from "./router";
import './assets/css/common.scss'

/*初始化*/
renderWithHotReload(Router);

/*热更新*/
if (module.hot) {
    module.hot.accept("./router/index.js", () => {
        const Router = require("./router/index.js").default;
        renderWithHotReload(Router);
    });
}

function renderWithHotReload(Router) {
    ReactDOM.render(
        <Router/>,
        document.getElementById("root")
    );
}