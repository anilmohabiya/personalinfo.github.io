import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import  image from './images/image.jpg'

const SetImage=()=>{
return(
    <>
    <div className="container-fluid">
    <div className="row">
            <div className="col-md-3 col-8 mx-auto  mt-5">
           
            <div class="card text-white bg-info mb-3" >
  
  <div class="card-body">
  
<img src={image} alt="{image}" class="rounded-circle" />
<p>hello,<br/>jhon deo</p>
  </div>
</div>
<div class="card text-white bg-info mb-1" >
  <div class="card-body">
    <p class="card-text">my orders <Link to=""><i class="fas fa-greater-than"></i> </Link> </p>
  </div>
</div>
<div class="card text-white bg-info mb-3" >
  <div class="card-body">
    <p class="card-text"><i class="fas fa-user-cog"></i> <span className=" ">Acount setting</span></p>
  </div>
</div>
<p className=" text-center">public information</p>
<div class="card text-white bg-info mb-1" >
    <p class="card-text text-center mb-5 "><br/><br/>Manages  address</p>

</div>
<div class="card text-white bg-info mb-1" >

    <p class="card-text mt-2 px-2"><i class="fa fa-user" aria-hidden="true"> My staff</i></p>
      <div className=" text-center px-2">
          <p>My copun</p>
          <p>My Review & Rating</p>
          <p>My Wallet</p>
        
          <p>My Subscription</p>
      </div>
 
</div>
<div class="card text-white bg-info mb-1 px-4 " >
 <p><br/><i class="fas fa-question-circle"> Help</i></p><br/>
 <p><i class="fas fa-users-cog"> FAQs</i></p>
</div>
<div class="card bg-info mb-1 px-4" >
   <p><br/><i class="fas fa-sign-out-alt">Logout</i></p>
</div>


            </div>  

            <div className="col-md-8 col-11 mx-auto mt-5">
         
            <div class="card align-items-start ">

  <div class="card-body shadow product_img">
    <h5 class="card-title  font-weight-bold">PersonalInfo <span className=" font-weight-bold p-2">Edit</span></h5>
    <p class="card-text">FirstName<span className="p-4">LastName</span></p>
    <p>Richard<span className="p-5">khan</span></p>
    
    <hr data-content="" class="hr-text"/>
    <p className=" mt-2">Email <span className="p-3">Phone Number</span></p>
    <p>anil@gmail.com<span className="p-2">8418881588</span></p>
    
    <h5 class="card-title  font-weight-bold">Your Gender</h5>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Male</label>
</div>
<div class="form-check form-check-inline">
  <label class="form-check-label" for="inlineRadio2">Female</label>
  
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
</div>
<p className=" font-weight-bold mt-3">Password</p>
<form class="form-inline">

  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password"  id="inputPassword2" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-Light mb-2">Change password</button>
</form>

    <h5 className=" font-weight-bold">FAQs</h5>
    <p className=" font-weight-bold">what happen when i submit email address(or mobile Number)?</p>
    <p className="n">you login email id or mobile number will change</p>
    <p className=" font-weight-bold">when will my flipkart account be updated with new email address(or mobile number)?</p>
    <p className="n">updating your email address for mobile number doesn't invalidate your account your account 
    remain fully functional.</p> 
    <p className=" font-weight-bold">does my seller account affected when i updated my email address?</p>
    <p className="n">my market have single sign-in policy any changes will reflect in your seller account also.</p>
   <div className=" text-center">
   <Link to="#" class="btn btn-success btn-lg active"
     role="button" aria-pressed="true">Deactive Account</Link>
   </div>
 </div>
  
</div>
            </div>

            </div> 
    </div>

   
    </>

)
}
export default SetImage;