var aphoto=["i1.jpeg","i2.jpeg","i3.jpeg","family photo animated.jpeg"]
var anames=["Jash Panchal","Hemal Panchal","Kalpesh Panchal","Panchal Family"]
var i = 0;
function update(){
    i++;
    var no_of_family_members_in_array=3
    if(i>no_of_family_members_in_array)
    {
        i=0;
    }
    var updateimage=aphoto[i];
    var updatename=anames[i];
    document.getElementById("fi").src = updateimage;
    document.getElementById("fn").innerHTML = updatename;
}
    