import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch)=> {
  const response=await axios.get('http://localhost:5000/current_user', { withCredentials: true })
  //console.log("response is",response)
  dispatch({ type: FETCH_USER, payload: response.data })
  };
export const handleToken=token=>async dispatch=>{
  console.log("iam working")
  const response=await axios.post('http://localhost:5000/stripe',token,{ withCredentials: true })
  console.log("stripe res",response)
  dispatch({ type: FETCH_USER, payload: response.data })
}