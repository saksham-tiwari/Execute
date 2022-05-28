import { combineReducers } from "redux";
import {AuthReducer} from './AuthReducer';
<<<<<<< HEAD

const rootReducer = combineReducers({
    AuthReducer
=======
import LayoutReducer from './LayoutReducer';

const rootReducer = combineReducers({
    AuthReducer,
    LayoutReducer,
>>>>>>> 5f2ca46fc3b9c9cb915e906e224ca6b36f82dc70
  });
  
  export default rootReducer;