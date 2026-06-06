function checkPassword(){

    let pass = document.getElementById("password").value;

    if(pass === "0480"){

        document.getElementById("lock-screen").style.display="none";

        document.getElementById("main-content").style.display="block";

    }

    else{

        alert("nuh uhh passwordnya salah");

    }
}
