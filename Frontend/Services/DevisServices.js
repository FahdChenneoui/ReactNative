import Api from "../Axios/Api";
const Devis_API="/Devis"
const fetchDevis=async()=> {
return await Api.get(Devis_API);
}
const fetchDevisById=async(Devis_API)=> {
return await Api.get(Devis_API + '/' + Devis_API);
}
const deleteDevis=async(Devis_API) =>{
return await Api.delete(Devis_API + '/' + Devis_API);
}
const addDevis=async(Devis)=> { 
return await Api.post(Devis_API,Devis);
} 
const editDevis=(Devis) =>{ 
return Api.put(Devis_API + '/' + Devis._id, Devis);
}
const fetchDevisByCat=async(catId)=> {
return await Api.get(Devis_API + '/affparcat/' + catId);

} 
export const DevisService = {
 fetchDevis,
fetchDevisById,
deleteDevis,
addDevis,
editDevis,
fetchDevisByCat
}
