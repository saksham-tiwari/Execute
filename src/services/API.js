import axios from 'axios';
import url from './BaseUrl';

// Auth Service
class AuthServices {

    Signup(data) {
         return axios.post(url + "signup/register", data)
    }
    forgot(data) {
        return axios.post(url + "signup/forgot", data)
    }
    otp(data) {
        return axios.post(url + 'signup/verifyOtp', data)
    }
    resendotp(data) {
        return axios.post(url + 'signup/resend', data)
    }
    resetpass(user, data) {
        return axios.post(url + 'signup/changePassword', data)
    }
    Details(data) {
        return axios.post(url + "signup/setPassword", data)
   }

}

export default new AuthServices();