import axios from "axios";
const ACCESS_KEY='Uk9z8-OiNEJE_1qXBMBvAnhNnBaUO-Qh17y-NiozoAg';
axios.defaults.baseURL=`https://api.unsplash.com/`
export const fetchImages = async (topic,page)=>{
   const response= await axios.get(`search/photos?`,{
      params:{
         client_id: ACCESS_KEY,
         query:topic,
         page:page,
         per_page:10
      }
      
   })
   console.log(response.data.total_pages)
   return response.data.results;
}