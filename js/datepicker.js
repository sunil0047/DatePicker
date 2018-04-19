console.log("Hello");
var getValue=document.getElementsByClassName("submit");
var getReturnDate=document.getElementsByClassName("Returing hasDatepicker");
console.log(getValue);
function myFunction(){
    for(var i=0;i<getReturnDate.length;i++)
    {
        console.log(getReturnDate[i].value);
    }
    console.log("myFunction");
}
for(var i=0;i<getValue.length;i++)
{
    getValue[i].addEventListener('click',myFunction);
}