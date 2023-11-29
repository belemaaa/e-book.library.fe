import Cookies from "js-cookie";

const ACCESS_TOKEN_COOKIE_NAME = 'access_token';

export const storeAccessToken = (accessToken) => {
    Cookies.set(ACCESS_TOKEN_COOKIE_NAME, accessToken, {expires: 5});
}

export const getAccessToken = () => {
    Cookies.get(ACCESS_TOKEN_COOKIE_NAME);
}

export const deleteAccessToken = () => {
    Cookies.remove(ACCESS_TOKEN_COOKIE_NAME);
}