import axios from 'axios'

export const ApiCall = async (state) => {
    const asking = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=41.390205&lon=2.154007&appid=62077bfe01b9f800b1e617f77ee87270')
    state(asking.data.list);
}
 
