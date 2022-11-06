import axios from 'axios'



export const ApiCall = async (state) => {
    const asking = await axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=2eed57299caad3ac33176bb5ad74f5c9')
    state(asking.data.list);
}
 
