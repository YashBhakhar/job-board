import axios from 'axios'
import { cleanQuery } from '../utils';

export const getJobs = async (params) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/jobs?${cleanQuery(params)}`);

        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const addJob = async (data) => {
    try {
        const response = await axios.post("http://localhost:5000/api/jobs", data);

        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getJobByID = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/jobs/${id}`);

        return response.data
    } catch (error) {
        console.log(error)
    }
}