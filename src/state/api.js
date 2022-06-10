import axios from "axios";

const URL_NOTICIAS_REMOTA ='https://627d7f934268bf47ad4bdcb6.mockapi.io/Noticias/'

export const getNoticiasURL = () => {
    return axios(URL_NOTICIAS_REMOTA)
}

export const setNoticiaLeidaURL = id => {
    return axios.put(URL_NOTICIAS_REMOTA+id, {seen : true})
}