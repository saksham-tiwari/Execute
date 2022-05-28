
const initialState = {nearby:[{about:"",billingTime:0,counter:0,frm:9,id:0,latitude:"0",longitude:"0",name:"",peopleCount:0,to:6,waitingTime:0}],store:{about:"",billingTime:0,counter:0,frm:9,id:0,latitude:"0",longitude:"0",name:"",peopleCount:0,to:6,waitingTime:0},single:{about:"",billingTime:0,counter:0,frm:9,id:0,latitude:"0",longitude:"0",name:"",peopleCount:0,to:6,waitingTime:0}};

const LayoutReducer = (state = initialState, action)=>{
    const {type, payload} = action;
     switch(type){
         case "Get_Nearby":
            //  let tempGrp = state.groups;
             return{
                 ...state,
                nearby: payload
             };

        case "addDetails":
            return{
                ...state,
                store: payload
            }
        case "Set_Single":
            return{
                ...state,
                single: payload
            }
        default:
             return state;
     }
}

export default LayoutReducer
