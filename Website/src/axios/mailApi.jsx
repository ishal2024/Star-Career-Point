import { api } from "./config";


export async function enquireNow(data){
    return await api.post('/mail/' , data , {withCredentials : true})
}