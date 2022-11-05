import axios from 'axios'



export const ApiCall = async () => {
    const asking = axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=2eed57299caad3ac33176bb5ad74f5c9')
    console.log(asking);
}
 
