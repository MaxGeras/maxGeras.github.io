var allStudents = [];


// Read files:  canada.txt, usa.txt, 
// mexico.txt,and russia.txt
function readFile(){

    var xmlhttp;

    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        smlhttp = new ActiveXobject("Microsoft.XMLHTTP");
    }
    
    var form = document.getElementById("cities");
    var text = form.options[form.selectedIndex].value;

    xmlhttp.onreadystatechange = function(){ 
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            document.getElementById('result').innerHTML = xmlhttp.responseText;
        }
    }
    
    xmlhttp.open("GET", text,true);
    xmlhttp.send();

    // Call read Json file
    // onload Event
    readJsonFile();
}

// Read Json files json.txt, json1.txt
function readJsonFile(){

    var xmlhttp;
    var path = "";

    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        smlhttp = new ActiveXobject("Microsoft.XMLHTTP");
    }

    var text = document.getElementById("json").value;
    
    if (text == "json.txt")
        path= "json.txt";
    else if( text == "json1.txt")
        path = "json1.txt";
    else
        path = "Invalid file";
  
    if( path != "Invalid file")
    {
        xmlhttp.onreadystatechange = function(){
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                var myJson = JSON.parse(xmlhttp.responseText);
            myFunction(myJson);
            }
        }
        xmlhttp.open("GET",path,true);
        xmlhttp.send();
    }
    else
        document.getElementById("output").innerHTML = 
        "File \"" + text +"\" is invalid! Please, Re-Enter the file...";
    
}

// Parse Json files
function myFunction(myJson){
    
    var i = 0;
    var students = [];
	
    if (localStorage.getItem("students") !== null)
    {			
		students.push(localStorage.getItem("students"));
	}	
	
    while(i < myJson.students.length){
   
        students.push(myJson.students[i].first + " " + myJson.students[i].last + " "
            + myJson.students[i].address.city + ", "
            + myJson.students[i].address.state + " "
            + myJson.students[i].address.zip + " "
            + myJson.students[i].major + " "
            + myJson.students[i].gpa + "\n"); 
          			
       i++;   
    }
	
	localStorage.setItem("students",students);
	
    document.getElementById("output").innerHTML = localStorage.getItem("students");    
}
