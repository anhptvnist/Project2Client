export const clearStorage = () => {
    localStorage.removeItem("role");
    localStorage.removeItem('jwt');
    localStorage.removeItem('userId');

    return true;
};
export const setStorage = (name='jwt', value) => {
    return localStorage.setItem(name, value);
};
export const getStorage = (name='jwt') => {
    return localStorage.getItem(name);
}

export const AuthenticateHeader = (name='jwt') => {
    const token = getStorage(name);
    const currentRole = getStorage("currentRole");
    // console.log(fingerprint);
    return {
        'current-page': window.location.pathname,
        'auth-token': token,
        'Content-Type': 'application/json'
    }
}