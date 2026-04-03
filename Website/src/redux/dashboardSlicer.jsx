import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    gallery : [],
    resources : []
}

const dashboardSlicer = createSlice({
    name : "dashboard",
    initialState,
    reducers : {
        addGalleryData : (state , action) => {
            state.gallery = action.payload
        },
        addResourcesData : (state , action) => {
            state.resources= action.payload
        },
    }
})


export const {addGalleryData , addResourcesData} = dashboardSlicer.actions

export default dashboardSlicer.reducer