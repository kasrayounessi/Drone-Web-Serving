let theBody = document.querySelector("body");
var theCommands = document.querySelector(".drone-status");
var plannedCommands = [];
var mode = 0;

function interactiveMode(){
  if(mode != 1){
  mode = 1;
  plannedCommands = [];
  document.getElementById("commands").value = "";
  document.querySelector(".res-send").style.display = "none";
  let temp =   document.querySelector(".interactive").style.backgroundColor;
  document.querySelector(".interactive").style.backgroundColor = "#B0C4DE";
  document.querySelector(".planned").style.backgroundColor = temp;
  document. querySelector(".pp").style.display = "none";
  document.querySelector(".ii").style.display = "inline";
  document.querySelector("#p").style.display = "none";
  }
  else{
    
  }
}
  
function plannedMode(){
  if(mode != 2){
  mode = 2;
  document.getElementById("commands").value = "";
  document.querySelector(".res-send").style.display = "inline";
  let temp = document.querySelector(".planned").style.backgroundColor;
  document.querySelector(".planned").style.backgroundColor = "#B0C4DE";
  document.querySelector(".interactive").style.backgroundColor = temp;
  document.querySelector(".ii").style.display = "none";
  document.querySelector(".pp").style.display = "inline";
  document.querySelector("#p").style.display = "inline";
    
  }
  else{
    
  }
}

function getLink(command, id){
  if(id != 1 && id != 8){
    let arg = window.prompt("Enter a number: ");
    command = command + "-" + arg;
  } 
  if(mode == 1){
    let theURL = "http://localhost:8000/drone_command/"+command;
    fetch(theURL)
      .then(response => response.json());
      document.getElementById("commands").value = "You have inserted "+command;
  }
 else if(mode == 2){
   plannedCommands.push(command);
   document.getElementById("commands").value = plannedCommands;
   if(plannedCommands.length>15)
     plannedCommands.splice(14,1);  
 }
  else{
    document.getElementById("commands").value = "";
    document.getElementById("commands").value = "Please Choose a Method!!!"
}
}

function resetButton(){
  document.getElementById("commands").value = "";
  plannedCommands = [];
  
}

function sendCommands(){
  let commands = document.getElementById("commands").value;
  document.getElementById("commands").value = [];
  console.log("http://localhost:8000/flight_plan/"+commands)
  fetch("http://localhost:8000/flight_plan/"+commands)
    .then(response => response.json());
}


function updateTable(){
  let results = [1,2,555,4,5,6,7,8,9,10,11,12,13,14,15,16];
  let theTmpl = document.querySelector("#menu_tmpl");
  var theClone = theTmpl.content.cloneNode(true);
  theClone.getElementById("pitch").innerHTML = results[0];
  theClone.getElementById("roll").innerHTML= results[1];
  theClone.getElementById("yaw").innerHTML = results[2];
  theClone.getElementById("vgx").innerHTML = results[3];
  theClone.getElementById("vgy").innerHTML = results[4];
  theClone.getElementById("vgz").innerHTML = results[5];
  theClone.getElementById("templ").innerHTML = results[6];
  theClone.getElementById("temph").innerHTML = results[7];
  theClone.getElementById("tof").innerHTML = results[8];
  theClone.getElementById("h").innerHTML = results[9];
  theClone.getElementById("bat").innerHTML = results[10];
  theClone.getElementById("baro").innerHTML = results[11];
  theClone.getElementById("time").innerHTML = results[12];
  theClone.getElementById("agx").innerHTML = results[13];
  theClone.getElementById("agy").innerHTML = results[14];
  theClone.getElementById("agz").innerHTML = results[15];
  theCommands.append(theClone);
}



(function mainLoop(){
  setTimeout(updateTable(),3000);
})();



function sendButton(){
  let theCommands = document.getElementById("commands").value;
  document.getElementById("commands").value = [];
  theCommands = theCommands.split(",");
  for(let i = 0; i<theCommands.length;i++){
    let istrc = theCommands[i];
    let theCommand = istrc;
    let theURLx = theCommand;
    if(istrc != "takeoff" && istrc != "land"){
      let temp = istrc.split("/");
      theCommand = temp[0];
      let arg = temp[1];
      theURLx = theCommand+"/"+arg;
    }
    console.log("http://localhost:8000/drone_command/"+theURLx)
    //fetch("http://localhost:8000/"+theURLx)
   //   .then(response => response.json());
  }
  
  
}
