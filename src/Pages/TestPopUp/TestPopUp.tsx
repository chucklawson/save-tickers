import { useState, useEffect } from 'react';
import './testpopup.css'
//import SimpleButton from "../../Components/SimpleButton/SimpleButton.tsx";


  const TestPopUp=()=> {

  const [headerValue] = useState('Test PopUp')
    //const [classValuesLeft]=useState('col-start-1 col-span-2 m-5 rounded-md' + 'bg-yellow-200');

  useEffect(() => {
    document.title = "Test PopUp"
  }, []);


  const launchPopupButtonHandler = () =>  {
    console.log("launchPopupButtonHandler called")
  }



  return (
    <  div className='text-center'>

      <div>
        <header className="bg-purple-100 text-purple-600 text-3xl font-bold h-18 justify-items-center">
          <div>
            {headerValue}
          </div>
        </header>
      </div>

      {/*<  div className='bg-yellow-100 grid grid-cols-9 gap-4 text-center'>*/}
      <  div className='grid grid-cols-9 gap-4 text-center'>
        <div className='col-start-1 col-span-2 m-5 rounded-md'>
          <div className='button-class-call-popup'>
              < button onClick={launchPopupButtonHandler}>
                <div>
                  'Edit Tickets'
                </div>
              </button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default TestPopUp;