import axios from "axios";
import Api from "../Axios/Api";
const CLIENT_API="/clients"



const fetchClients=async()=> {
  return await Api.get(CLIENT_API)
 /* axios.get(`http://10.20.30.87:3006/clients`)
  .then((resJson) => {console.log(resJson.data);return (resJson.data) })
  .catch(console.error)*/
  
 

}
const fetchClientsById=async(clientId)=> {
return await Api.get(CLIENT_API + '/' + clientId);
}
const deleteClient=async(clientId) =>{
return await Api.delete(CLIENT_API + '/' + clientId);
}
const addClient=async(client)=> { 
return await Api.post(CLIENT_API,client);
} 
const editClient=(client) =>{ 
  console.log(client._id)
return Api.put(CLIENT_API + '/' + client._id, client);
}
const fetchClientByCat=async(catId)=> {
return await Api.get(CLIENT_API + '/affparcat/' + catId);

} 
export const ClientService = {
fetchClients,
fetchClientsById,
deleteClient,
addClient,
editClient,
fetchClientByCat
}
