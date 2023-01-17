let age=parseInt(prompt("Enter the Age"));
let sex=prompt("Enter the Sex");
if(sex=="female" || sex=="F")
{
    document.write("She will work only urban areas");
}
else
{
    if(sex=="male" && age>=20 && age<40)
    {
        document.write("He will work in anywhere");
    }
    else if(sex=="male" && age>=40 && age<60)
    {
        document.write("He will work only urban areas");
    }
    else
    {
        document.write("Please check the Datas");
    }
}