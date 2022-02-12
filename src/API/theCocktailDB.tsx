import axios from 'axios'

const cocktailDB = axios.create({
    baseURL: 'www.thecocktaildb.com/api/json/v1/',
    params: {
        key: '1',
        }
})