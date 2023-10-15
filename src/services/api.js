import axios from "axios";

axios.defaults.baseURL = 'https://652a64864791d884f1fcdeda.mockapi.io/api/v1/';

export const fetchUsers = async () => {
    try {
        const res = await axios.get('/users')
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateFollowersNumb = async (credentials) => {
    try {
        const res = await axios.put(`/users/${credentials.id}`, credentials);
        return res.data.followers;
    } catch (error) {
        console.log(error)
    }
};