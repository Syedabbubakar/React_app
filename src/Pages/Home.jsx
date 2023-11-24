import React from 'react'
import NavBar from '../components/NavBar'
import '../style.css'
import CardCom from '../components/CardCom'
import two from '../Assets/two.jpg'
import one from '../Assets/one.jpg'
import three from '../Assets/three.jpg'
import four from '../Assets/four.jpg'
import Person from '../components/Person'



const Home = () => {
  const user = {
    uname:"Irfan",
    age:27,
    married:false
  }
  return (
    <div className='container header-wrapper'>
      <div>
       <NavBar/>

      </div>
      <div className='row'>
        <div className='col-3 mt-4'>
       <CardCom myname='Irfan' age='27' address='Nanded' btnName='Login' InputType='text' PHName='Enter Text' className="btn btn-primary w-100 mt-3" src={two}/>
        </div>
        <div className='col-3 mt-4'>
       <CardCom myname='Zubair' age='25' address='Parbhani' btnName='Sign In' InputType='date' className="btn btn-success w-100 mt-3" src={one}/>
        </div>
        <div className='col-3 mt-4'>
       <CardCom myname='Adnan' age='23' address='Hyderabad' btnName='Submit' InputType='password' PHName='Enter password' className="btn btn-danger w-100 mt-3" src={three}/>
        </div>
        <div className='col-3 mt-4'>
       <CardCom myname='Suleman' age='21' address='Aurangabad' btnName='Reset' InputType='number' PHName='Enter number' className="btn btn-info w-100 mt-3" src={four}/>
        </div>
      </div>
      <hr/>
      <Person person={user}/>
      
    </div>
  )
}

export default Home