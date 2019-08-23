import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import 'assets/css/common.scss'

/*初始化*/
renderWithHotReload(App);

/*热更新*/
if (module.hot) {
    module.hot.accept("./App.jsx", () => {
        const App = require("./App.jsx").default;
        renderWithHotReload(Router);
    });
}

function renderWithHotReload(Router) {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}