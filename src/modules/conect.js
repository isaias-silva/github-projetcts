/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const basic= function(user){
   return axios.get(`https://api.github.com/users/${user}`)
   
}
const conectrepos= function(user){
return axios.get(`https://api.github.com/users/${user}/repos`)
    
}
export default { conectbasic:basic, conectrepos:conectrepos} ;