import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    gallery : [],
    resources : []
}

const clientSlicer = createSlice({
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


export const {addGalleryData , addResourcesData} = clientSlicer.actions

export default clientSlicer.reducer