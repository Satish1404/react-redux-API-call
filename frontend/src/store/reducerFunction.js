
import { applyMiddleware, legacy_createStore as createStore} from 'redux';
import {thunk} from 'redux-thunk';





let initialUserData = [
                            {
                                "id": 7,
                                "email": "michael.lawson@reqres.in",
                                "first_name": "Michael",
                                "last_name": "Lawson",
                                "avatar": "https://reqres.in/img/faces/7-image.jpg"
                            },
                            {
                                "id": 8,
                                "email": "lindsay.ferguson@reqres.in",
                                "first_name": "Lindsay",
                                "last_name": "Ferguson",
                                "avatar": "https://reqres.in/img/faces/8-image.jpg"
                            },
                       ]

const rootReducer = (oldState = initialUserData ,action)=>{
    let newState = oldState;

    switch(action.type){
        case 'GET_USER_DATA':
            return[
                ...newState,
                {
                    "id": 11,
                    "email": "george.edwards@reqres.in",
                    "first_name": "George",
                    "last_name": "Edwards",
                    "avatar": "https://reqres.in/img/faces/11-image.jpg"
                }
            ]
            break;
            case 'ADD_USER_DATA':
                return[
                    ...newState,
                    ...action.payload
                ]
                break;
        default:
            return newState;
    }
 

  }
  
 export const storeObject = createStore(rootReducer,applyMiddleware(thunk))