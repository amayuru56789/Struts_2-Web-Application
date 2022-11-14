/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$("#btnSave").click(function (){
    //console.log("Hello"); 
    registrationUser();
    clearFields();
});

function registrationUser(){
    let userID = $("#txtuserID").val();
    let userName = $("#txtuserName").val();
    let address = $("#txtaddress").val();
    let email = $("#txtemail").val();
    let contact = $("#txtcontact").val();
    let password = $("#txtpassword").val();
    //let confirmationPassword = $("#txtconfirmationpassword").val();
    //console.log(userID+" "+userName+" "+address+" "+email+" "+contact+" "+password);
    user = {
        userID: userID,
        userName: userName,
        address: address,
        email: email,
        contact: contact,
        password: password
        //confirmationPassword: confirmationPassword
    };
    console.log(user.userName+" "+user.password);
    
    //var data = $("#registerForm").serialize(); //get information txtFields using form data
    /*console.log(data);*/
    /*----------------------ajax for saveCustomer function---------------------------*/
    $.ajax({
       url: "registeruser",
       method: "POST",
       data:"userID="+user.userID+"&"+"userName="+user.userName+"&"+"address="+user.address+"&"+"email="+user.email+"&"+"contact="+user.contact+"&"+"password="+user.password, //if we send data with the request
       success:function (res){
           alert(res);
           if (res.status=="200"){
               //alert(res.message);
               //loadAllCustomers();
               clearFields();
               swal("Operation success!", "You clicked the button!", "success");
           }else {
               swal("Operation failed!", "You clicked the button!", "error");
               //alert(res.data);
           }
           /*console.log(res.message);*/
       },
        error:function (ob,textStatus, error){
           alert(textStatus);
        }
    });
}

/*-----------------clearFields---------------*/
        function clearFields(){
            $("#txtUserId").val(" ");
            $("#txtUserName").val(" ");
            $("#txtUserAddress").val(" ");
            $("#txtEmail").val(" ");
            $("#txtContact").val(" ");
            $("#txtPassword").val(" ");
        }

/*------------ validation --------------*/
//
//function validation() {
//    const userIdRegex = /^(U)[0-9]{1,3}$/;
//    const userNameRegex = /^[A-z ]{5,20}$/;
//    const userAddress = /^[A-z ]{5,20}$/;
//    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//    const telephoneNumberRegex = /^[0-9]{10}$/;
//    const passwordRegex = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/;
//
//    $("#txtuserID").keydown(function (e) {
//        if (e.key == "Enter") {
//            let outUserId = $("#txtuserID").val();
//            if (userIdRegex.test(outUserId)) {
//                $("#txtuserID").css('border-color', '#04db14');
//                $("#txtuserID").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
//                $("#txtuserID").css('color', '#04db14');
//                $("#txtuserName").focus();
//
////                $("#userName").keydown(function (e) {
////                    if (e.key == "Enter") {
////                        let outUserName = $("#userName").val();
////                        if (userNameRegex.test(outUserName)) {
////                            $("#userName").css('border-color', '#04db14');
////                            $("#userName").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
////                            $("#userName").css('color', '#04db14');
////                            $("#address").focus();
////
////                            $("#address").keydown(function (e) {
////                                if (e.key == "Enter") {
////                                    let outUserAddress = $("#address").val();
////                                    if (userAddress.test(outUserAddress)) {
////                                        $("#address").css('border-color', '#04db14');
////                                        $("#address").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
////                                        $("#address").css('color', '#04db14');
////                                        $("#email").focus();
////
////                                        $("#email").keydown(function (e) {
////                                            if (e.key == "Enter") {
////                                                let outUserEmail = $("#email").val();
////                                                if (emailRegex.test(outUserEmail)) {
////                                                    $("#email").css('border-color', '#04db14');
////                                                    $("#email").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
////                                                    $("#email").css('color', '#04db14');
////                                                    $("#telephoneNumber").focus();
////
////                                                    $("#telephoneNumber").keydown(function (e) {
////                                                        if (e.key == "Enter") {
////                                                            let outUserMobileNum = $("#telephoneNumber").val();
////                                                            if (telephoneNumberRegex.test(outUserMobileNum)) {
////                                                                $("#telephoneNumber").css('border-color', '#04db14');
////                                                                $("#telephoneNumber").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
////                                                                $("#telephoneNumber").css('color', '#04db14');
////                                                                $("#password").focus();
////
////                                                                $("#password").keydown(function (e) {
////                                                                    if (e.key == "Enter") {
////                                                                        let outPassword = $("#password").val();
////                                                                        if (passwordRegex.test(outPassword)) {
////                                                                            $("#password").css('border-color', '#04db14');
////                                                                            $("#password").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
////                                                                            $("#password").css('color', '#04db14');
////                                                                            $('#btnCustomerSave').prop('disabled', false);
////                                                                            $('#btnUpdateCustomer').prop('disabled', false);
////                                                                        }else {
////                                                                            $("#password").css('border-color', '#ff0202');
////                                                                            $("#password").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
////                                                                            $("#password").css('color', '#ff0202');
////                                                                            $('#btnCustomerSave').prop('disabled', true);
////                                                                            $('#btnUpdateCustomer').prop('disabled', true);
////                                                                        }
////                                                                    }
////                                                                })
////
////                                                            }else {
////                                                                $("#telephoneNumber").css('border-color', '#ff0202');
////                                                                $("#telephoneNumber").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
////                                                                $("#telephoneNumber").css('color', '#ff0202');
////                                                                $('#btnCustomerSave').prop('disabled', true);
////                                                                $('#btnUpdateCustomer').prop('disabled', true);
////                                                            }
////                                                        }
////                                                    })
////
////                                                }else {
////                                                    $("#email").css('border-color', '#ff0202');
////                                                    $("#email").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
////                                                    $("#email").css('color', '#ff0202');
////                                                    $('#btnCustomerSave').prop('disabled', true);
////                                                    $('#btnUpdateCustomer').prop('disabled', true);
////                                                }
////                                            }
////                                        })
////
////                                    }else {
////                                        $("#address").css('border-color', '#ff0202');
////                                        $("#address").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
////                                        $("#address").css('color', '#ff0202');
////                                        $('#btnCustomerSave').prop('disabled', true);
////                                        $('#btnUpdateCustomer').prop('disabled', true);
////                                    }
////                                }
////                            });
////
////                        } else {
////                            $("#userName").css('border-color', '#ff0202');
////                            $("#userName").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
////                            $("#userName").css('color', '#ff0202');
////                            $('#btnCustomerSave').prop('disabled', true);
////                            $('#btnUpdateCustomer').prop('disabled', true);
////                        }
////                    }
////                });
//
//
//            } else {
//                $("#txtuserID").css('border-color', '#ff0202');
//                $("#txtuserID").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
//                $("#txtuserID").css('color', '#ff0202');
//                $('#btnSave').prop('disabled', true);
//                //$('#btnUpdate').prop('disabled', true);
//            }
//        }
//    });
//
//
//}
//
//validation();