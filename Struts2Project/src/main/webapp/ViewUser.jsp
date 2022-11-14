<%-- 
    Document   : ViewUser
    Created on : 30-Oct-2022, 08:26:01
    Author     : indee
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"/>
<!--        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.0/css/bootstrap.min.css"/>-->
        <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/dataTables.bootstrap5.min.css">
        <link rel="stylesheet" type="text/css" href="https://common.olemiss.edu/_js/sweet-alert/sweet-alert.css">
        <title>RegistrationViews Page</title>
    </head>
    <body>
        <section class="container">

        <div class="rounded-3 p-3" style="background-color: #DDE4F0; margin-top: 30px; height: 187vh">
            <h1 class="text-lg-start mb-3"><i class="fas fa-users"></i>Registration details</h1>

            <div class="row align-items-start pb-3">
                <div class="col-4">
                    <h4>Search user</h4>
                    <div class="input-group mb-3 style=height: 10px">
                        <input type="text" class="form-control" placeholder="Input ID Here" aria-label="Recipient's username" aria-describedby="button-addon2">
                        <button class="btn btn-success" type="button" id="button-addon2">
                            <i class="bi bi-search m-2"></i>Search</button>
                    </div>
                </div>
                
                <div class="row mb-3 ">
      
                <form id="user">
                    <div class="col">
                        <caption>user ID:</caption>
                        <div class="col-4">
                            <input id="txtUserId" class="form-control " type="text" name="userID">
                        </div>
                        <p><small id="lbluserid" class="text-danger p-1"></small></p>
                    </div>
                    <div class="col">
                        <caption>user Name:</caption>
                        <div class="col-4">
                            <input id="txtUserName" class="form-control " type="text" name="userName">
                        </div>
                        <p><small id="lblusername" class="text-danger p-1"></small></p>
                    </div>
                    <div class="col">
                        <caption>Address:</caption>
                        <div class="col-4">
                            <input id="txtUserAddress" class="form-control " type="text" name="userAddress">
                        </div>
                        <p><small id="lbluseraddress" class="text-danger p-1"></small></p>
                    </div>
                    <div class="col">
                        <caption>Email:</caption>
                        <div class="col-4">
                            <input id="txtEmail" class="form-control " type="text" name="email">
                        </div>
                        <p><small id="lblemail" class="text-danger p-1"></small></p>
                    </div>
                    <div class="col">
                        <caption>Contact:</caption>
                        <div class="col-4">
                            <input id="txtContact" class="form-control " type="text" name="contact">
                        </div>
                        <p><small id="lblcontact" class="text-danger p-1"></small></p>
                    </div>
                    <div class="col">
                        <caption>Password:</caption>
                        <div class="col-4">
                            <input id="txtPassword" class="form-control " type="password" name="password">
                        </div>
                        <p><small id="lblpassword" class="text-danger p-1"></small></p>
                    </div>
<!--                    <div class="col">
                        <caption>Confirmation Password:</caption>
                        <div class="col-4">
                            <input id="txtConfirmationPassword" class="form-control " type="password" name="password">
                        </div>
                        <p><small id="lblconfirmationpassword" class="text-danger p-1"></small></p>
                    </div>-->
                </form>
            </div>

<!--                <div>
                    <button class="btn-danger">Delete</button>
                    <button class="btn-primary">Details</button>
                    <button class="btn-success">Clear</button>
                </div>-->
            </div>

            <div class="row align-items-end">
                <div class="col-5">
                    <button type="button" id="btnDelete" class="btn btn-danger btn-sm">Delete</button>
                    <button type="button" id="btnUpdate" class="btn btn-secondary btn-sm">Update</button>
                    <button type="button" id="btnClear" class="btn-secondary btn-sm">Clear</button>
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-12 mt-2">
                    <table class="table table-dark table-striped table-bordered table-hover" id="table">
                        <thead>
                        <tr>
                            <th scope="col">User ID</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">email</th>
                            <th scope="col">contact</th>
                            <th scope="col">password</th>
                        </tr>
                        </thead>

                        <tbody id="userTable">
<!--                        <tr>
                            <td>U003</td>
                            <td>Malitha</td>
                            <td>Panadura</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                        </tr>
                        <tr>
                            <td>U004</td>
                            <td>Kamal</td>
                            <td>Galle</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                        </tr>
                        <tr>
                            <td>U005</td>
                            <td>Amayuru</td>
                            <td>Panadura</td>
                            <td>hello</td>
                            <td>hello</td>
                            <td>hello</td>
                        </tr>
                        </tbody>-->
                    </table>
                </div>
            </div>
        </div>

    </section>
    <script src="assets/jQuery/jquery-3.6.0.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://common.olemiss.edu/_js/sweet-alert/sweet-alert.min.js"></script>
    <script src="controller/ViewController.js"></script>    
    <script src="controller/tableClick.js"></script>
    <script>
        $("#btnClear").click(function (){
            console.log("ok");
            clearFields();
        });
        
        /*-----------------clearFields---------------*/
        function clearFields(){
            $("#txtUserId").val(" ");
            $("#txtUserName").val(" ");
            $("#txtUserAddress").val(" ");
            $("#txtEmail").val(" ");
            $("#txtContact").val(" ");
            $("#txtPassword").val(" ");
        }
    </script>
    
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.12.1/js/dataTables.bootstrap5.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#table').DataTable();
        });
    </script>
    </body>
</html>
