/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*------------ validation --------------*/
validation();

function validation() {
    const userIdRegex = /^(U)[0-9]{1,3}$/;
    const userNameRegex = /^[A-z ]{5,20}$/;
    const userAddress = /^[A-z ]{5,20}$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const telephoneNumberRegex = /^[0-9]{10}$/;
    const passwordRegex = /^[A-z ]{5,20}$/;

    $("#txtuserID").keydown(function (e) {
        if (e.key === "Enter") {
            let outUserId = $("#txtuserID").val();
            if (userIdRegex.test(outUserId)) {
                $("#txtuserID").css('border-color', '#04db14');
                $("#txtuserID").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
                $("#txtuserID").css('color', '#04db14');
                $("#txtuserName").focus();

                $("#txtuserName").keydown(function (e) {
                    if (e.key === "Enter") {
                        let outUserName = $("#txtuserName").val();
                        if (userNameRegex.test(outUserName)) {
                            $("#txtuserName").css('border-color', '#04db14');
                            $("#txtuserName").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
                            $("#txtuserName").css('color', '#04db14');
                            $("#txtaddress").focus();

                            $("#txtaddress").keydown(function (e) {
                                if (e.key === "Enter") {
                                    let outUserAddress = $("#txtaddress").val();
                                    if (userAddress.test(outUserAddress)) {
                                        $("#txtaddress").css('border-color', '#04db14');
                                        $("#txtaddress").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
                                        $("#txtaddress").css('color', '#04db14');
                                        $("#txtemail").focus();

                                        $("#txtemail").keydown(function (e) {
                                            if (e.key === "Enter") {
                                                let outUserEmail = $("#txtemail").val();
                                                if (emailRegex.test(outUserEmail)) {
                                                    $("#txtemail").css('border-color', '#04db14');
                                                    $("#txtemail").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
                                                    $("#txtemail").css('color', '#04db14');
                                                    $("#txtcontact").focus();

                                                    $("#txtcontact").keydown(function (e) {
                                                        if (e.key === "Enter") {
                                                            let outUserMobileNum = $("#txtcontact").val();
                                                            if (telephoneNumberRegex.test(outUserMobileNum)) {
                                                                $("#txtcontact").css('border-color', '#04db14');
                                                                $("#txtcontact").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
                                                                $("#txtcontact").css('color', '#04db14');
                                                                $("#txtpassword").focus();

                                                                $("#txtpassword").keydown(function (e) {
                                                                    if (e.key === "Enter") {
                                                                        let outPassword = $("#txtpassword").val();
                                                                        if (passwordRegex.test(outPassword)) {
                                                                            $("#txtpassword").css('border-color', '#04db14');
                                                                            $("#txtpassword").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
                                                                            $("#txtpassword").css('color', '#04db14');
                                                                            $('#btnSave').prop('disabled', false);
                                                                            //$('#btnUpdateCustomer').prop('disabled', false);
                                                                        }else {
                                                                            $("#password").css('border-color', '#ff0202');
                                                                            $("#password").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
                                                                            $("#password").css('color', '#ff0202');
                                                                            $('#btnSave').prop('disabled', true);
                                                                            //$('#btnUpdateCustomer').prop('disabled', true);
                                                                        }
                                                                    }
                                                                });

                                                            }else {
                                                                $("#txtcontact").css('border-color', '#ff0202');
                                                                $("#txtcontact").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
                                                                $("#txtcontact").css('color', '#ff0202');
                                                                $('#btnSave').prop('disabled', true);
                                                                //$('#btnUpdateCustomer').prop('disabled', true);
                                                            }
                                                        }
                                                    });

                                                }else {
                                                    $("#txtemail").css('border-color', '#ff0202');
                                                    $("#txtemail").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
                                                    $("#txtemail").css('color', '#ff0202');
                                                    $('#btnSave').prop('disabled', true);
                                                    //$('#btnUpdateCustomer').prop('disabled', true);
                                                }
                                            }
                                        });

                                    }else {
                                        $("#txtaddress").css('border-color', '#ff0202');
                                        $("#txtaddress").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
                                        $("#txtaddress").css('color', '#ff0202');
                                        $('#btnSave').prop('disabled', true);
                                        //$('#btnUpdateCustomer').prop('disabled', true);
                                    }
                                }
                            });

                        } else {
                            $("#txtuserName").css('border-color', '#ff0202');
                            $("#txtuserName").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
                            $("#txtuserName").css('color', '#ff0202');
                            $('#btnSave').prop('disabled', true);
                            //$('#btnUpdateCustomer').prop('disabled', true);
                        }
                    }
                });


            } else {
                $("#txtuserID").css('border-color', '#ff0202');
                $("#txtuserID").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
                $("#txtuserID").css('color', '#ff0202');
                $('#btnSave').prop('disabled', true);
                //$('#btnUpdate').prop('disabled', true);
            }
        }
    });


}

//validation();

//var ID=/^(U)[0-9]{1,3}$/;
//$('#txtuserID').on('keydown',function (event) {
//    var input=(event.key);
//    let inputName=$('#txtuserID').val();
//    if (Name.test(inputName)){
//        if (input=="Enter"){
//            $('#txtuserName').focus();
//        }
//    }else {
//        $('#txtuserID').css('border','2px solid red');
//        $('#txtuserID').focus();
//    }
//});
//
//var Name=/^[A-Z]{1}[a-z]{1,9}$/;
//$('#txtuserName').on('keydown',function (event) {
//    var input=(event.key);
//    let inputName=$('#txtuserName').val();
//    if (Name.test(inputName)){
//        if (input=="Enter"){
//            $('#txtuserAddress').focus();
//        }
//    }else {
//        // $('#custName').css('border','2px solid red');
//        $('#userName').focus();
//    }
//});
//
//var Email=/^[a-z]{1,19}(@gmail.com)$/;
//$('#email').on('keydown',function (event) {
//    var input=(event.key);
//    let inputName=$('#email').val();
//    if (Email.test(inputName)){
//        if (input=="Enter"){
//            $('#address').focus();
//        }
//    }else {
//        $('#email').focus();
//    }
//});
//
//var Adrees=/^[a-z]{1,30}$/;
//$('#address').on('keydown',function (event) {
//    var input=(event.key);
//    let inputAddress=$('#address').val();
//    if (Adrees.test(inputAddress)){
//        if (input=="Enter"){
//            $('#contact').focus();
//        }
//    }else {
//        $('#address').focus();
//    }
//});
//
//$('#phone').on('keydown',function (event) {
//    var input=(event.key);
//        if (input=="Enter"){
//            $('#password').focus();
//        }
//    else {
//        $('#phone').focus();
//    }
//});
//
//var Password=/^[a-z]{6}$/;
//$('#password').on('keydown',function (event) {
//    var input=(event.key);
//    let password=$('#password').val();
//    if (Password.test(password)){
//        if (input=="Enter"){
//            // $('#password').focus();
//        }
//    }else {
//        $('#password').focus();
//    }
//});
