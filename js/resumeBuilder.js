/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Krishna Kumar Singh");
var name = "Krishna Kumar Singh";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
