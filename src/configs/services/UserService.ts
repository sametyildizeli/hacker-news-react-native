import { apiURL } from "../apiURL";
import axios from "axios";

//Gets user by userId
const GetUserById = (id : number) => {
    return axios.get(`${apiURL}/user/${id}.json`)
}

//Creating Service variable and its service properties
let UserService = {
    GetUserById
}

export default UserService;