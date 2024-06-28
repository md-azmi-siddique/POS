import axios from "axios";

const baseURl = 'http://localhost:5000/'

export async function productsPOS (){
    let url = `${baseURl}products`
    let  res = await axios.get(url);
    if (res.status === 200) {
        return res.data;
    }else {
        return [];
    }
}