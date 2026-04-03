import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from './dashboardSlicer'
import clientReducer from './clientSlicer'

const store = configureStore({
    reducer : {
        dashboard : dashboardReducer,
        client : clientReducer
    }
})

export default store