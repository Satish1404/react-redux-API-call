
import axios from 'axios';



export const GetUserData = ()=>{

    return (dispatch)=>{
        
           axios.get('https://reqres.in/api/users?page=2')
            .then(function (response) {
                // handle success
                console.log(response.data.data);
                dispatch({type:"ADD_USER_DATA",payload:response.data.data})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

      /*  setTimeout(()=>{
            
        dispatch({type:"GET_USER_DATA"})
        },3000)
        */

    }

}