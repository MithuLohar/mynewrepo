function loadtemplate1() {
  var template1=document.getElementById("template1")
  console.log(template1);
  template1.innerHTML=`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <style>
  
  html,body{
         width: 100%;
         height: 100%;
  }
  
   body {
       background: #0d161f;
  }
  
  #circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 150px;
      height: 150px;	
  }
  
  .loader {
      width: calc(100% - 0px);
      height: calc(100% - 0px);
      border: 8px solid #162534;
      border-top: 8px solid #09f;
      border-radius: 50%;
      animation: rotate 5s linear infinite;
  }
  
  @keyframes rotate {
  100% {transform: rotate(360deg);}
  } </style>
  </head>
  <body>
      <div id="circle">
          <div class="loader">
            <div class="loader">
                <div class="loader">
                   <div class="loader">
        
                   </div>
                </div>
            </div>
          </div>
        </div> 
  </body>
  </html>`;
}
function loadtemplate2() {
  var template2=document.getElementById("template2")
  console.log(template2);
  template2.innerHTML=`<!DOCTYPE html>
  <html>
  <head>
    <title>Login Page</title>
     <!--Made with love by Mutiullah Samim -->
     
    <!--Bootsrap 4 CDN-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      
      <!--Fontawesome CDN-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
  
    <!--Custom styles-->
      <link rel="stylesheet" type="text/css" href="styles.css">
      <link rel="stylesheet" href="./bootstrap-4.3.1-dist/css/bootstrap.css">
      <style>
          @import url('https://fonts.googleapis.com/css?family=Numans');
  
  html,body{
  background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  font-family: 'Numans', sans-serif;
  }
  
  .container{
  height: 100%;
  align-content: center;
  }
  
  .card{
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0,0,0,0.5) !important;
  }
  
  .social_icon span{
  font-size: 60px;
  margin-left: 10px;
  color: #FFC312;
  }
  
  .social_icon span:hover{
  color: white;
  cursor: pointer;
  }
  
  .card-header h3{
  color: white;
  }
  
  .social_icon{
  position: absolute;
  right: 20px;
  top: -45px;
  }
  
  .input-group-prepend span{
  width: 50px;
  background-color: #FFC312;
  color: black;
  border:0 !important;
  }
  
  input:focus{
  outline: 0 0 0 0  !important;
  box-shadow: 0 0 0 0 !important;
  
  }
  
  .remember{
  color: white;
  }
  
  .remember input
  {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
  }
  
  .login_btn{
  color: black;
  background-color: #FFC312;
  width: 100px;
  }
  
  .login_btn:hover{
  color: black;
  background-color: white;
  }
  
  .links{
  color: white;
  }
  
  .links a{
  margin-left: 4px;
  }
      </style>
  </head>
  <body>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h3>Sign In</h3>
          <div class="d-flex justify-content-end social_icon">
            <span><i class="fab fa-facebook-square"></i></span>
            <span><i class="fab fa-google-plus-square"></i></span>
            <span><i class="fab fa-twitter-square"></i></span>
          </div>
        </div>
        <div class="card-body">
          <form>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
              </div>
              <input type="text" class="form-control" placeholder="username">
              
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input type="password" class="form-control" placeholder="password">
            </div>
            <div class="row align-items-center remember">
              <input type="checkbox">Remember Me
            </div>
            <div class="form-group">
              <input type="submit" value="Login" class="btn float-right login_btn">
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            Don't have an account?<a href="#">Sign Up</a>
          </div>
          <div class="d-flex justify-content-center">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>
  </html>`;
}
function loadtemplate3() {
  var template3=document.getElementById("template3")
  template3.innerHTML=`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <!------ Include the above in your HEAD tag ---------->
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css
  ">
  <style>
  .my-card
  {
      position:absolute;
      left:40%;
      top:-20px;
      border-radius:50%;
  }</style>
  </head>
  <body>
      <div class="jumbotron">
          <div class="row w-100">
                  <div class="col-md-3">
                      <div class="card border-info mx-sm-1 p-3">
                          <div class="card border-info shadow text-info p-3 my-card" ><span class="fa fa-car" aria-hidden="true"></span></div>
                          <div class="text-info text-center mt-3"><h4>Cars</h4></div>
                          <div class="text-info text-center mt-2"><h1>234</h1></div>
                      </div>
                  </div>
                  <div class="col-md-3">
                      <div class="card border-success mx-sm-1 p-3">
                          <div class="card border-success shadow text-success p-3 my-card"><span class="fa fa-eye" aria-hidden="true"></span></div>
                          <div class="text-success text-center mt-3"><h4>Eyes</h4></div>
                          <div class="text-success text-center mt-2"><h1>9332</h1></div>
                      </div>
                  </div>
                  <div class="col-md-3">
                      <div class="card border-danger mx-sm-1 p-3">
                          <div class="card border-danger shadow text-danger p-3 my-card" ><span class="fa fa-heart" aria-hidden="true"></span></div>
                          <div class="text-danger text-center mt-3"><h4>Hearts</h4></div>
                          <div class="text-danger text-center mt-2"><h1>346</h1></div>
                      </div>
                  </div>
                  <div class="col-md-3">
                      <div class="card border-warning mx-sm-1 p-3">
                          <div class="card border-warning shadow text-warning p-3 my-card" ><span class="fa fa-inbox" aria-hidden="true"></span></div>
                          <div class="text-warning text-center mt-3"><h4>Inbox</h4></div>
                          <div class="text-warning text-center mt-2"><h1>346</h1></div>
                      </div>
                  </div>
               </div>
          </div>
  </body>
  </html>`
}
function loadtemplate4() {
  var template4=document.getElementById("template4")
  template4.innerHTML=`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <style>
  body{
      background-color: #25274d;
    }
    .contact{
      padding: 4%;
      height: 400px;
    }
    .col-md-3{
      background: #ff9b00;
      padding: 4%;
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
    .contact-info{
      margin-top:10%;
    }
    .contact-info img{
      margin-bottom: 15%;
    }
    .contact-info h2{
      margin-bottom: 10%;
    }
    .col-md-9{
      background: #fff;
      padding: 3%;
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
    .contact-form label{
      font-weight:600;
    }
    .contact-form button{
      background: #25274d;
      color: #fff;
      font-weight: 600;
      width: 25%;
    }
    .contact-form button:focus{
      box-shadow:none;
    }</style>
  </head>
  <body>
      <div class="container contact">
          <div class="row">
              <div class="col-md-3">
                  <div class="contact-info">
                      <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
                      <h2>Contact Us</h2>
                      <h4>We would love to hear from you !</h4>
                  </div>
              </div>
              <div class="col-md-9">
                  <div class="contact-form">
                      <div class="form-group">
                        <label class="control-label col-sm-2" for="fname">First Name:</label>
                        <div class="col-sm-10">          
                          <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-sm-2" for="lname">Last Name:</label>
                        <div class="col-sm-10">          
                          <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-sm-2" for="email">Email:</label>
                        <div class="col-sm-10">
                          <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-sm-2" for="comment">Comment:</label>
                        <div class="col-sm-10">
                          <textarea class="form-control" rows="5" id="comment"></textarea>
                        </div>
                      </div>
                      <div class="form-group">        
                        <div class="col-sm-offset-2 col-sm-10">
                          <button type="submit" class="btn btn-default">Submit</button>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
  </body>
  </html>`
}