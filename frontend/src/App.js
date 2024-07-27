
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import { GetUserData } from './_actionCreater';

function App() {

  //1.hooks area
  
  let snd = useSelector(storeObject => storeObject)

  let dispatch = useDispatch()

  //2.function defination area



  //3.return statement

  return (
    <div className="App">
      {console.log(snd)}
      <button onClick={()=>{dispatch(GetUserData())}}>Call the API</button>
      <ul>
        {
          snd.map((cv,idx,arr)=>{
            return <li key={idx}>{cv.first_name}</li>
          })
        }

      </ul>
    </div>
  );                                          
}

export default App;
