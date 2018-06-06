//VIDEO
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

//API
fetch('https://api.spacexdata.com/v2/launches/next')
.then(result => result.json())
.then((res) => {
  output(res);
})
.catch(err => console.log(err));


function output(result){
    var details=document.getElementById('output');
    details.innerHTML+= "flight_number:"+result.flight_number+"<br>";
    details.innerHTML+= "mission_name:"+result.mission_name+"<br>"
    details.innerHTML+= "launch date:"+result.launch_date_utc+"<br>";
    details.innerHTML+= "rocket:"+result.rocket.rocket_name+"<br>";

}


fetch('https://api.spacexdata.com/v2/launches/latest')
.then(result => result.json())
.then((res) => {
  launchdates(res);
})
.catch(err => console.log(err));


function launchdates(result){
    var details=document.getElementById('launchdetails');
    details.innerHTML+= "flight_number:"+result.flight_number+"<br>";
    details.innerHTML+= "mission_name:"+result.mission_name+"<br>"
    details.innerHTML+= "launch date:"+result.launch_date_utc+"<br>";
    details.innerHTML+= "rocket:"+result.rocket.rocket_name+"<br>";

}

//Form

function checkforblank() {

    var errormessage="";

if (document.getElementById('firstName').value == "") {
  alert('This field cannot be blank');
    document.getElementById('firstNameError').style.display = "inline";
    hasError = true;

    } else {
        document.getElementById('firstNameError').style.display = "none";
    }


if (document.getElementById('email').value.search(/^[a-zA-Z]+([_\.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,4})+$/) == -1) {
alert('Please enter a correct email address');
        document.getElementById('emailError').style.display = "inline";
        hasError = true;
    } else {
        document.getElementById('emailError').style.display = "none";
    }


if (document.getElementById('phone').value == "") {
alert('Please enter a correct phone number');
        document.getElementById('phoneError').style.display = "inline";
        hasError = true;

        } else {
            document.getElementById('phoneError').style.display = "none";
        }

    return !hasError;
}
