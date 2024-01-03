import Api from "../Axios/Api";
const BondC_API="/bondC"
const fetchBondC=async()=> {
return await Api.get(BondC_API);
}
const fetchBondCById=async(bondcId)=> {
return await Api.get(BondC_API + '/' + bondcId);
}
const deleteBonDC=async(bondcId) =>{
return await Api.delete(BondC_API + '/' + bondcId);
}
const addBonDC=async(bondc)=> { 
return await Api.post(BondC_API,bondc);
} 
const editBonDC=(bondc) =>{ 
return Api.put(BondC_API + '/' + bondc._id, bondc);
}
const fetchBonDCByCat=async(catId)=> {
return await Api.get(BondC_API + '/affparcat/' + catId);

} 
export const BondCService = {
fetchBondC,
fetchBondCById,
deleteBonDC,
addBonDC,
editBonDC,
fetchBonDCByCat
}
