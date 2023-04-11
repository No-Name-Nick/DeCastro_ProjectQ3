function GetPass(){
    UserName = document.getElementById("Input_1").value;
    PassWord = document.getElementById("Input_2").value;
    if(UserName == ""){
        if(PassWord == ""){
            alert("Please enter password and username");
        }
        else{
            alert("Please enter username");
        }
    }else{
        if(UserName == "NoNameNick"&& PassWord == "PROJQ3"){
            window.location.href = "https://github.com/No-Name-Nick/DeCastro_ProjectQ3/blob/main/Website/Websites/index.html";
        }else if (PassWord == ""){
            alert("Please enter password");
        }
        else{
            alert("Incorrect username or password");
        }
    }
//thx Franz
//cael didnt help
}
