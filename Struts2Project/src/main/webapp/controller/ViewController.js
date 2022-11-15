/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
loadAllUsers();
/*--------------------------------loadAllUsers function for javaEE app------------------------------------*/
function loadAllUsers() {

    /*invoked ajax for send a request*/
    $("#userTable").empty();
    $.ajax({
       url:"report",
       method:"GET",
        //convert to json format
       dataType:"json",
       success:function (res){
           for (const user of res) {
               /*console.log(user.userID);*/
               let row = `<tr><td>${user.userID}</td><td>${user.userName}</td><td>${user.address}</td><td>${user.email}</td><td>${user.contact}</td><td>${user.password}</td></tr>`;
               $("#userTable").append(row);
           }
       }
    });
}

//$("#userTable").click(function(e) {
//        /*console.log("row clicked");
//        console.log(this);*/
//        //console.log($(this));
//        var userID = $(this).children(":eq(0)").text();
//        var userName = $(this).children(":eq(1)").text();
//        var address = $(this).children(":eq(2)").text();
//        var email = $(this).children(":eq(3)").text();
//        var contact = $(this).children(":eq(4)").text();
//        var password = $(this).children(":eq(5)").text();
//
//        //console.log(userID, userName, address, email);
//
//        /*set user details for the textFields*/
//        $("#txtUserId").val(userID);
//        $("#txtUserName").val(userName);
//        $("#txtUserAddress").val(address);
//        $("#txtEmail").val(email);
//        $("#txtContact").val(contact);
//        $("#txtPassword").val(password);
//});

function updateUser() {

        /*create json ob*/
        var userOb={
            userID:$("#txtUserId").val(),
            userName:$("#txtUserName").val(),
            address:$("#txtUserAddress").val(),
            email:$("#txtEmail").val(),
            contact:$("#txtContact").val(),
            password:$("#txtPassword").val()
        }

       /*let serialize = $("#userForm").serialize();*/
       /*implement ajax request for updateUser Function*/
        $.ajax({
          url:"updateuser",
          method:"PUT",
          contentType:"application/json", //request content type json
          data:JSON.stringify(userOb) , //convert valid json String
          success:function (res){
              /*console.log(res);*/
              if (res.status==="200"){
                  swal("Successfully Update the User!", "You clicked the button!", "success");
                  //alert(res.message);
                  loadAllUsers();
              }else if (res.status===400){
                  swal("Failed to Update the User!", "You clicked the button!", "error");
                  ///alert(res.message);

              }else {
                  //alert(res.data);
                  swal("Failed to Update the User!", "You clicked the button!", "error");
              }
              /*alert(res);
              loadAllUsers();*/
          },
          error:function (ob, error) {
              console.log(ob);
          }
       });
    }
    
$("#btnUpdate").click(function (){
   updateUser();
   //loadAllUsers();
});    

 /*------------------------------deleteUser function for javaEE app------------------------------------*/
//    function deleteUser(userID) {
//
//        /*ajax request for deleteUser function*/
//        /*var data = $("#userForm").serialize();*/
//        let userID = $("#txtUserId").val(); //Get the user ID
//        $.ajax({
//           url:"http://localhost:8084/SimpleCrud/Registration?userID="+userID, //Send a request using query String
//           method:"DELETE",
//           /*data:data,*/
//           success:function (res){
//               /*console.log(res);*/
//               if (res.status==200){
//                   alert(res.message);
//                   loadAllUsers();
//               }else if (res.status==400){
//                   alert(res.data);
//               }else {
//                   alert(res.data);
//               }
//               /*alert(res);
//               loadAllUsers();*/
//           },
//           error:function (ob,status,a){
//               console.log(ob);
//               console.log(status);
//               console.log(a);
//           }
//        });
//
//}

$("#btnDelete").click(function () {
        //get userID
//        let userID = $("#txtUserId").val();

//        let option = confirm(`Do you want delete user : ${userID} `);
//        if (option) {
//            if (deleteUser(userID)) {
//                alert("User delete Success");
//                loadAllUsers();
//            } else {
//                alert("Try again...");
//            }
//        }
//deleteUser(userID);

let userID = $("#txtUserId").val();

    $.ajax({
        url: "deleteuser?userID=" + userID,
        method: "DELETE",
        success: function (resp) {
            if (resp.status === 200) {
                swal({
                title: "Are you sure?",
                text: "Once deleted, this operation can't be reverted!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                });
                swal("Done! Your file has been deleted!", "You clicked the button!",
                        "success",
                );
//                .then((willDelete) => {
//                    if (willDelete) {
//                        swal("Done! Your file has been deleted!", {
//                        icon: "success",
//                    });
//                    } else {
//                        swal("Delete operation is cancelled!");
//                    }
//                });
                //alert("Successfully deleted the User");
                loadAllUsers();
            } else {
                //alert("Can't delete the User");
                swal("Can't delete the User!", "You clicked the button!", "error");
            }
        }
    });
});

/*------------ validation --------------*/

//function validation() {
//    const userIdRegex = /^(C)[0-9]{1,3}$/;
//    const userNameRegex = /^[A-z ]{5,20}$/;
//    const userAddress = /^[A-z ]{5,20}$/;
//    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//    const telephoneNumberRegex = /^[0-9]{10}$/;
//    const passwordRegex = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/;
//
//    $("#txtUserId").keydown(function (e) {
//        if (e.key == "Enter") {
//            let outUserId = $("#txtUserId").val();
//            if (userIdRegex.test(outUserId)) {
//                $("#txtUserId").css('border-color', '#04db14');
//                $("#txtUserId").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
//                $("#txtUserId").css('color', '#04db14');
//                $("#txtUserName").focus();
//
//                $("#txtUserName").keydown(function (e) {
//                    if (e.key == "Enter") {
//                        let outUserName = $("#txtUserName").val();
//                        if (userNameRegex.test(outUserName)) {
//                            $("#txtUserName").css('border-color', '#04db14');
//                            $("#txtUserName").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
//                            $("#txtUserName").css('color', '#04db14');
//                            $("#txtUserAddress").focus();
//
//                            $("#txtUserAddress").keydown(function (e) {
//                                if (e.key == "Enter") {
//                                    let outUserAddress = $("#txtUserAddress").val();
//                                    if (userAddress.test(outUserAddress)) {
//                                        $("#txtUserAddress").css('border-color', '#04db14');
//                                        $("#txtUserAddress").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
//                                        $("#txtUserAddress").css('color', '#04db14');
//                                        $("#txtEmail").focus();
//
//                                        $("#txtEmail").keydown(function (e) {
//                                            if (e.key == "Enter") {
//                                                let outUserEmail = $("#txtEmail").val();
//                                                if (emailRegex.test(outUserEmail)) {
//                                                    $("#txtEmail").css('border-color', '#04db14');
//                                                    $("#txtEmail").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
//                                                    $("#txtEmail").css('color', '#04db14');
//                                                    $("#txtContact").focus();
//
//                                                    $("#txtContact").keydown(function (e) {
//                                                        if (e.key == "Enter") {
//                                                            let outUserMobileNum = $("#txtContact").val();
//                                                            if (telephoneNumberRegex.test(outUserMobileNum)) {
//                                                                $("#txtContact").css('border-color', '#04db14');
//                                                                $("#txtContact").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
//                                                                $("#txtContact").css('color', '#04db14');
//                                                                $("#txtPassword").focus();
//
//                                                                $("#txtPassword").keydown(function (e) {
//                                                                    if (e.key == "Enter") {
//                                                                        let outPassword = $("#txtPassword").val();
//                                                                        if (passwordRegex.test(outPassword)) {
//                                                                            $("#txtPassword").css('border-color', '#04db14');
//                                                                            $("#txtPassword").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
//                                                                            $("#txtPassword").css('color', '#04db14');
//                                                                            $('#btnSave').prop('disabled', false);
//                                                                            $('#btnUpdate').prop('disabled', false);
//                                                                        }else {
//                                                                            $("#txtPassword").css('border-color', '#ff0202');
//                                                                            $("#txtPassword").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
//                                                                            $("#txtPassword").css('color', '#ff0202');
//                                                                            $('#btnSave').prop('disabled', true);
//                                                                            $('#btnUpdate').prop('disabled', true);
//                                                                        }
//                                                                    }
//                                                                })
//
//                                                            }else {
//                                                                $("#txtContact").css('border-color', '#ff0202');
//                                                                $("#txtContact").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
//                                                                $("#txtContact").css('color', '#ff0202');
//                                                                $('#btnSave').prop('disabled', true);
//                                                                $('#btnUpdate').prop('disabled', true);
//                                                            }
//                                                        }
//                                                    })
//
//                                                }else {
//                                                    $("#txtEmail").css('border-color', '#ff0202');
//                                                    $("#txtEmail").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
//                                                    $("#txtEmail").css('color', '#ff0202');
//                                                    $('#btnSave').prop('disabled', true);
//                                                    $('#btnUpdate').prop('disabled', true);
//                                                }
//                                            }
//                                        })
//
//                                    }else {
//                                        $("#txtUserAddress").css('border-color', '#ff0202');
//                                        $("#txtUserAddress").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
//                                        $("#txtUserAddress").css('color', '#ff0202');
//                                        $('#btnSave').prop('disabled', true);
//                                        $('#btnUpdate').prop('disabled', true);
//                                    }
//                                }
//                            });
//
//                        } else {
//                            $("#txtUserName").css('border-color', '#ff0202');
//                            $("#txtUserName").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
//                            $("#txtUserName").css('color', '#ff0202');
//                            $('#btnSave').prop('disabled', true);
//                            $('#btnUpdate').prop('disabled', true);
//                        }
//                    }
//                });
//
//
//            } else {
//                $("#txtUserId").css('border-color', '#ff0202');
//                $("#txtUserId").css('box-shadow', '0 0 0 0.25rem rgb(13 110 253 / 25%)');
//                $("#txtUserId").css('color', '#ff0202');
//                $('#btnSave').prop('disabled', true);
//                $('#btnUpdate').prop('disabled', true);
//            }
//        }
//    });
//
//
//}
//
//validation();