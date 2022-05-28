import LayoutService from "../../services/Layout.service";

export const getNearby = (latitude,longitude)=>(dispatch)=>{
    return LayoutService.getNearby(latitude,longitude)
    .then((res)=>{
        console.log(res);
        dispatch({
            type:"Get_Nearby",
            payload:res.data
        })
        return Promise.resolve();
    })
    .catch((err)=>{
        console.log(err);
        return Promise.reject();
    })
}
// export const getNearby = (data)=>{
//     console.log(data);
//     return{
//         type:"Get_Nearby",
//         payload:data
//     }
// }
export const addStoreDetails = (name,counter,Address,ShopCounter,countertime,avgtime)=>(dispatch)=>{
    return LayoutService.addStoreDetails(name,counter,Address,ShopCounter,countertime,avgtime)
    .then(res=>{
        console.log(res);
        dispatch({
            type:"addDetails",
            payload:{name,counter,Address,ShopCounter,countertime,avgtime}
        })
        return Promise.resolve();
    })
    .catch((err)=>{
        console.log(err);
        return Promise.reject();
    })
}


export const getSingle = (id)=>(dispatch)=>{
    return LayoutService.getSingle(id)
    .then((res)=>{
        console.log(res);
        dispatch({
            type:"Set_Single",
            payload:res.data
        })
        return Promise.resolve();
    })
    .catch((err)=>{
        console.log(err);
        return Promise.reject();
    })
}

export const joinQueue = ()=>(dispatch)=>{
    return LayoutService.joinQueue()
    .then((res)=>{
        console.log(res);
        return Promise.resolve();
    })
    .catch((err)=>{
        console.log(err);
        return Promise.reject();
    })
}