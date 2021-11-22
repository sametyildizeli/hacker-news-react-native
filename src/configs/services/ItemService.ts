import { apiURL } from "../apiURL";
import axios from "axios";

//Gets story item by its id
const GetStoryItemById = (id:number) => {
    return axios.get(`${apiURL}/item/${id}.json`)
}

//Gets up to 500 top stories
const GetTopStories = () => {
    return axios.get(`${apiURL}/topstories.json`)
}

//Creating Service variable and its service properties
let ItemService = {
    GetStoryItemById,
    GetTopStories
}

export default ItemService;