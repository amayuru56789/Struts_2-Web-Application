/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$("#btnLog").click(function (){
    //console.log("Hello"); 
    var userName = $("#userID").val();
    var password = $("#password").val();
    
    //console.log(userName+" :"+password);
    obj = {
        userName:userName,
        password:password
    };

//invoked ajax
    $.ajax({
        url: 'loginuser',
        method: 'POST',
        //async: true,
        //data: {"userName":userName,"password":password},
        data:"userName=" + obj.userName + "&password=" + obj.password,
        //dataType: json,
        success: function (res){
            console.log(res);
            if (res.status==="200"){
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

