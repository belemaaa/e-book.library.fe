import Cookies from "js-cookie";

const ACCESS_TOKEN_COOKIE_NAME = 'access_token';

// store access_token with 5-days validity period
export const storeAccessToken = (accessToken) => {
    Cookies.set(ACCESS_TOKEN_COOKIE_NAME, accessToken, {expires: 5});
}

// retrieve the access token from the cookie
export const getAccessToken = () => {
    Cookies.get(ACCESS_TOKEN_COOKIE_NAME);
}

// delete access token after logout
export const deleteAccessToken = () => {
    Cookies.remove(ACCESS_TOKEN_COOKIE_NAME);
}