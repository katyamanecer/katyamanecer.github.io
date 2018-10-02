
var today=new Date()
var theoccasion=new Date(today.getFullYear(), 12, 25)
var beforeOccasionText="para Navidad"
var onOccasiontext="Hoy es Navidad...Felices Fiestas!"

var monthtext=new Array("Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec")
theoccasion.setMonth(theoccasion.getMonth()-1) //change to 0-11 month format
var showdate="("+monthtext[theoccasion.getMonth()]+" "+theoccasion.getDate()+")"
var one_day=1000*60*60*24
var calculatediff=""

calculatediff=Math.ceil((theoccasion.getTime()-today.getTime())/(one_day))
if (calculatediff<0){
var nextyeartoday=new Date()
nextyeartoday.setFullYear(today.getFullYear()+1)
calculatediff=Math.ceil((nextyeartoday.getTime()-today.getTime())/(one_day)+calculatediff)
}

var pluraldayornot=(calculatediff==1)? "día" : "días"
if (calculatediff>0)
document.write("<strong><font color='#AE54D1'><a>"+calculatediff+" "+pluraldayornot+" "+beforeOccasionText+"!!</strong></font>")
else if (calculatediff==0)
document.write("<b>"+onOccasiontext+"!</b>")
//]]>
