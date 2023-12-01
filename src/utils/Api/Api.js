import axios from "axios";

const shipApi = {
    getAll: () => axios.get(`http://localhost:5000/get_ships`),
    getOne: (id) => axios.get(`http://localhost:5000/get_ship/${id}`),
}
export default shipApi;