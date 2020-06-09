import axios from 'axios';
import { AuthenticateHeader } from '../config';
import { toast } from 'react-toastify';
export function sendRequest(options, showSuccessAlert=false, showFailAlert=true, module, successTitle='general.success', errorTitle='general.error') {
    
    const requestOptions = {
        url: options.url, 
        method: options.method,
        data: options.data,
        params: options.params,
        headers: AuthenticateHeader()
    };

    return axios(requestOptions).then(res => {
        const messages = Array.isArray(res.data.messages) ? res.data.messages : [res.data.messages];
        console.log("message: ", messages)

        showSuccessAlert && toast.success(
            
            console.log("Success"),
            {containerId: 'toast-notification'});

        return Promise.resolve(res);
    }).catch(err => {
        const messages = Array.isArray(err.response.data.messages) ? err.response.data.messages : [err.response.data.messages];
        console.log("message error", messages)
        
        return Promise.reject(err);
    })
}