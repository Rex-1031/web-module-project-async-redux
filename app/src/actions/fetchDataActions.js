import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const fetchData = () => dispatch =>{
 dispatch({type: FETCH_DATA_START});
  axios.get("https://dog.ceo/api/breeds/image/random")
    .then(res =>{
        console.log(res.data.message);
        dispatch({type: FETCH_DATA_SUCCESS, payload: res.data.message})
    })
    .catch(err=>{
        console.log(err);
        dispatch({type: FETCH_DATA_ERROR, payload: err})
    })
}