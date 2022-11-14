<%-- 
    Document   : Login
    Created on : 27-Oct-2022, 15:12:05
    Author     : indee
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login Page</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="assets/css/styles.css"/>
        <link rel="stylesheet" href="assets/fonts/css/all.min.css"/>
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<!--        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>-->
        <link rel="stylesheet" type="text/css" href="https://common.olemiss.edu/_js/sweet-alert/sweet-alert.css">
        <style>
            .divider:after,
            .divider:before {
                content: "";
                flex: 1;
                height: 1px;
                background: #eee;
            }
            .h-custom {
                height: calc(100% - 73px);
            }
            @media (max-width: 450px) {
                .h-custom {
                height: 100%;
                }
            }
        </style>
    </head>
    <body>
        <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <!-- Username input -->
          <div class="form-outline mb-4">
            <input type="text" id="userID" class="form-control form-control-lg"
              placeholder="Enter a valid User Name" />
            <label class="form-label" for="form3Example3">User Name</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input type="password" id="password" class="form-control form-control-lg"
              placeholder="Enter password" />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <!-- Checkbox -->
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg" id="btnLog"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="SignUp.jsp"
                class="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    <!-- Copyright -->
    <div class="text-white mb-3 mb-md-0">
      Copyright © 2020 - AVC All rights reserved.
    </div>
    <!-- Copyright -->

    <!-- Right -->
    <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
    <!-- Right -->
  </div>
</section>
        
<!--        <div class="banner" style="background-color: #2d3436">
        <div class="container">
            <div class="d-flex justify-content-center h-100">
                <div class="card">
                    <div class="card-header">
                        <h1>Log In</h1>
                        <div class="d-flex justify-content-end social_icon">
                            <span><i class="fa-brands fa-square-github"></i></span>
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
                                <input type="text" class="form-control" placeholder="User ID" id="userID">
                            </div>
                            
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" class="form-control" placeholder="password" id="password">
                            </div>
                            
                            <div class="row align-items-center remember">
                                <input type="checkbox"> Remember Me
                            </div>
                            <div class="form-group">
                                <input type="button" value="Login" class="btn float-right login_btn" id="btnLog">
                            </div>
                        </form>
                    </div>
                    
                    <div class="card-footer">
                        <div class="d-flex justify-content-center links">
                            IF You Don't have an Account ?
                            <a href="SignUp.jsp">Register</a>
                        </div>
                        <div class="rights" style="position: relative; top: 0px">
                            <small>Created By AVC</small>
                        </div>
                        <div class="lines">
                            <hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>-->
        
        <script src="assets/jQuery/jquery-3.6.0.min.js"></script>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://common.olemiss.edu/_js/sweet-alert/sweet-alert.min.js"></script>
<!--        <script src="controller/LoginController.js"></script>-->
        <script>
            $("#btnLog").click(function (){
            console.log("Hello"); 
            var userName = $("#userID").val();
            var password = $("#password").val();
    
            console.log(userName+" :"+password);
            obj = {
                userName:userName,
                password:password
            };

            //invoked ajax
            $.ajax({
            url: 'http://localhost:8084/SimpleCrud/Login',
            method: 'POST',
            //async: true,
            //data: {"userName":userName,"password":password},
            data:JSON.stringify(obj),
            //dataType: json,
            success: function (res){
                console.log(res);
                if (res.status===200){
                    //alert("Success");
                    swal("Login success!", "You clicked the button!", "success");
                    window.location = "ViewUser.jsp"
                }else{
                    swal("User name or password incorrect!", "You clicked the button!", "error");
                    //alert("User name or password incorrect");
                }
            }
        });
    });

        </script>
    </body>
</html>
