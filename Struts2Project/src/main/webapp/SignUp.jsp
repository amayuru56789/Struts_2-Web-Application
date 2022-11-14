<%-- 
    Document   : SignUp
    Created on : 27-Oct-2022, 23:36:50
    Author     : indee
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>SignUp Page</title>
        <link rel="stylesheet" href="assets/boostrap/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="assets/fonts/css/all.css"/>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
        <link rel="stylesheet" type="text/css" href="https://common.olemiss.edu/_js/sweet-alert/sweet-alert.css">
        <style>
            .container{
                height: 100%;
                align-content: center;
            }
            .user-card{
                height:800px;
                margin-top: 80px;
                margin-bottom: auto;
                width: 800px;
                background-color:white !important;
            }
            .card-body{
                position: relative;
                top: 20px;
            }
            .input-group span{
                width:35px;
                background-color: #FFC312;
                color: black;
                border:0 !important;
            }
            .fa-user::before {
                font-size: 25px;
                left: 5px;
                top: 7px;
                position: relative;
            }
            .fa-solid{
                font-size: 25px;
                left: 8px;
                top: 7px;
                position: relative;
            }
            .fa-regular{
                font-size: 22px;
                left: 5px;
                top: 10px;
                position: relative;
            }
            .fa-envelope{
                font-size: 22px;
                left: 7px;
                top: 10px;
                position: relative;
            }
            .fa-users{
                font-size: 20px;
                left: 6px;
                top: 10px;
                position: relative;
            }
            .fa-lock{
                font-size: 20px;
                left: 8px;
                top: 8px;
                position: relative;
            }
            input:focus{
                outline: 0 0 0 0  !important;
                box-shadow: 0 0 0 0 !important;
            }
            .btn-md{
                position: relative;
                height: 50px;
                width: 200px;
                color: #ecf0f1;
                background: #f39c12;
                font-size: 25px;
                font-weight: 600;
                left: 268px;
                top: 14px;
                border-radius: 12px;
            }
            .fa-light:hover{
                background:#bdc3c7;
            }
            .btn-primary{
                position: relative;
                top: 45px;
                width: 430px;
                left: 156px;
                border-radius: 12px;
                font-weight: 600;
            }
            #back{
                font-size: 50px;
                top: -688px;
                left: 696px;
            }

        </style>
    </head>
    <body>
        <div class="container">
            <div class="justify-content-center">
                <div class="user-card">
                    <div class="card-header">
                        <h1>Sign Up</h1>
                    </div>
                    
                    <div class="card-body">
                        <form class="form-horizontal" id="registerForm" action="#">
                            <div class="form-group">
                                <label for="name" class="cols-sm-2 control-label">User ID</label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa-solid fa-image-portrait"></i></span>
                                        <input type="text" class="form-control" name="name" id="txtuserID" placeholder="Enter your ID">
                                    </div>
                                </div>
                            </div>
                            
<!--                            <div class="form-group">
                                <label for="name" class="cols-sm-2 control-label">User ID</label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa-solid fa-image-portrait"></i></span>
                                        <input type="text" class="form-control" name="name" id="userID" placeholder="Enter your ID">
                                    </div>
                                </div>
                            </div>-->
                            
                            <div class="form-group">
                                <label for="name" class="cols-sm-2 control-label">User Name</label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                        <input type="text" class="form-control" name="name" id="txtuserName" placeholder="Enter your Name">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="name" class="cols-sm-2 control-label">Address</label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa-regular fa-address-card"></i></span>
                                        <input type="text" class="form-control" name="name" id="txtaddress" placeholder="Enter your Address">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="name" class="cols-sm-2 control-label">Email</label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                                        <input type="text" class="form-control" name="name" id="txtemail" placeholder="Enter your Email">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="name" class="cols-sm-2 control-label">User Contact</label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                        <input type="text" class="form-control" name="name" id="txtcontact" placeholder="Enter your Mobile No">
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="name" class="cols-sm-2 control-label">Password</label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="password" class="form-control" name="name" id="txtpassword" placeholder="Enter your Password">
                                    </div>
                                </div>
                            </div>

<!--                            <div class="form-group">
                                <label for="name" class="cols-sm-2 control-label">Confirmation Password</label>
                                <div class="cols-sm-10">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                        <input type="password" class="form-control" name="name" id="txtconfirmationpassword" placeholder="Enter your ConfirmationPassword">
                                    </div>
                                </div>
                            </div>-->
                            
                            <div class="form-group">
                                <button type="button" id="btnSave" class="btn btn-primary btn-lg btn-block login-button">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <script src="assets/jQuery/jquery-3.6.0.min.js"></script>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="assets/validation/validation.js"></script>
        <script src="https://common.olemiss.edu/_js/sweet-alert/sweet-alert.min.js"></script>
        <script src="controller/SignUpController.js"></script>
    </body>
</html>
