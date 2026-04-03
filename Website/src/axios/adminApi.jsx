import { api } from "./config";


export async function getGalleryData(){
    return await api.get('/module/read/image' , {withCredentials : true})
}

export async function getResourcesData(){
    return await api.get('/module/read/file' , {withCredentials : true})
}

export async function uploadFile(data){
    return await api.post('/module/upload' , data , {withCredentials : true})
}

export async function deleteDocument(data){
    return await api.post('/module/delete' , data , {withCredentials : true})
}

export async function changePassword(data){
    return await api.post('/admin/change/password' , data , {withCredentials : true})
}

export async function logout(){
    return await api.get('/admin/logout'  , {withCredentials : true})
}

export async function login(data){
    return await api.post('/admin/login' , data  , {withCredentials : true})
}

export async function checkAdminAuthorization(){
    return await api.get('/admin/auth' , {withCredentials : true})
}
