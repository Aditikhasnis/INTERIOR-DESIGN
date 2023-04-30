import React from "react";

const About=()=>{
    return (
          <>
      <div class="container">

        <div class="row">
          <div class="col-lg-6">
             <img src="https://media.istockphoto.com/id/1226856019/photo/talking-designer-and-client.jpg?s=612x612&w=0&k=20&c=i84SXIb7Ifmjik1gFF5E9NGbds4xlCKd_JQGbdN0msQ=" class="img-fluid" alt=""/> 
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <h3 style={{color:'black'}}>ABOUT US</h3>
            <p>
              We the team of Hestia interiors work day and night to make your dream come true ..and we also would love your support
            </p>
            <div class="row">
              <div class="col-md-6">
                <i class="bx bx-receipt"></i>
                <h4 style={{padding:10,color:'black'}}>MEET MY  TEAM</h4>
                <p style={{padding:1}}>Alekhya-web design developer</p>
                <p style={{padding:1}}>Aditi-web design developer</p>
                <p style={{padding:1}}>Advit-Modern interior designer</p>
                <p style={{padding:1}}>Rishika-Social media manager</p>
              </div>
              <div class="col-md-6"  style={{paddingTop:40,color:'black'}}>
                <i class="bx bx-cube-alt"></i>
                <h4>COME VISIT OUR WORKSHOP</h4>
                <p style={{color:'black',paddingTop:10}}>Kodipaallya cross,devechikanhalli begur road near vega city --Hestia interiors</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="container">

        <div class="row counters">
        <h5> THANKYOU FOR VISITING HOPE  TO YOU SEE AGAIN!!!</h5>
        
          <div class="col-lg-3 col-6 text-center">
         
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
            <h1 style={{padding:25,color:'red'}}>232</h1>
            <h3> Happy Clients</h3>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
            <h1 style={{padding:25,color:'red'}}>101+</h1>
            <h3>Projects</h3>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter"></span>
            <h1 style={{padding:25,color:'red'}}>70</h1>
            <h3>Hours Of Support</h3>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
            <h1 style={{padding:25,color:'red'}}>30</h1>
            <h3>Hard Workers</h3>
          </div>

        </div>

      
</div>
    </>
    );
};

export default About;