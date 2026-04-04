import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    gallery : [],
    resources : [],
    refreshGallery : true,
    refreshResource : true
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
        handleRefreshGallery : (state , action) => {
            state.refreshGallery = action.payload
        },
        handleRefreshResource : (state , action) => {
            state.refreshResource = action.payload
        },
    }
})


export const {addGalleryData , addResourcesData , handleRefreshGallery , handleRefreshResource} = dashboardSlicer.actions

export default dashboardSlicer.reducer