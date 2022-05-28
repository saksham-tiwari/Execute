import axios from "axios";
import Url from './BaseUrl';
import authHeader from "./auth-header";


class LayoutService{
    async getNearby(latitude,longitude){
        return await axios
        .post(Url+"getAllStores",{
            latitude,longitude
        },{
            headers:authHeader()
        });
    }
    async addStoreDetails(name,counter,Address,ShopCounter,countertime,avgtime){
        return await axios
        .post(Url+"store/makestore/629272920a1ef475533e9989",{
            name,counter,Address,ShopCounter,countertime,avgtime
        })
    }
    async getSingle(id){
        return await axios
        .get(Url+"getStoreDetails/"+id,{
            headers:authHeader()
        });
    }
    async joinQueue(){
        // let username = localStorage.getItem("email")
        return await axios
        .post(Url+"store/adduser",{
            shopid:"629290c4b89d90f2ccc1b1f8",
            userid:"629272d50a1ef475533e9994"
        });
    }
    async allQueues(id){
        return await axios
        .get(Url+"getStoreDetails/"+id,{
            headers:authHeader()
        });
    }

}
export default new LayoutService();