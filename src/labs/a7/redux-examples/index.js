import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import Todos from "./todos-component";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore({
    reducer: { hello, todos },
});
//configureStore 函数创建并配置了 Redux store 对象
//它将 hello 和 todos reducer 函数合并到一起，形成一个根 reducer
//当 store 接收到一个动作时，它会将当前状态和该动作传递给根 reducer
//根 reducer 会调用相应的 reducer 函数（如 hello 和 todos），这些 reducer 函数会根据动作的类型和负载来更新状态

const ReduxExamples = () => {
    return (
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos />
                <HelloReduxExampleComponent />
            </div>
        </Provider>
    );
};
export default ReduxExamples;