import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from './dashboardSlicer'


const store = configureStore({
    reducer : {
        dashboard : dashboardReducer
    }
})

export default store