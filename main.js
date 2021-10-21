students=[];
function submit()
{
    var names = document.getElementById("name1").value;
   
    students.push(names);
    document.getElementById("displayname").innerHTML=students;
    
}
function sorting()
{
    students.sort();
    var i=students.join("<br>");
    document.getElementById("sorted").innerHTML=i;
}
function show(){
    var i=students.join("<br>");
    document.getElementById("p1").innerHTML=i;

document.getElementById("sortbutton").style.display="inline-block";
}