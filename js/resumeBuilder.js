/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*JSON Declaration */
var bio = {
	"name":"Krishna Kumar Singh",
	"role":"Web Developer",
	"contacts":{
		"mobile":"123-456-7890",
		"email":"kk5190krrish@gmail.com",
		"github":"kk5190",
		"twitter":"@hakkk99",
		"location":"New Delhi"
	},
	"welcomeMessage":"I'm currently working as a Software Developer in Group10, Gurgaon, India.  Thanks for stopping by!",
	"skills":[
		"HTML","CSS","JavaScript","jQuery","Bootstrap","Drupal","MySQL","Java"
	],
	"bioPic":"images/logo.jpg"
}


var education = {
	"schools": [
		{
			"name": "Pondicherry University",
			"location": "Puducherry",
			"degree": "Masters",
			"majors": ["CS"],
			"dates": 2013,
			"url": "http://pondiuni.edu.in"
		},
		{
			"name": "Pondicherry University",
			"location": "Puducherry",
			"degree": "Masters",
			"majors": ["CS"],
			"dates": 2013,
			"url": "http://pondiuni.edu.in"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
}

var work ={
	"jobs":[
		{
			"employer":"Group10",
			"title":"Intern - Software Developer",
			"dates":"January 2016 - Present",
			"description":"Manages CMS based website using Drupal"
		}
	]
}

var projects = {
	"projects":[
		{
			"title":"Portfolio Mockup to HTML",
			"dates":2016,
			"description":"Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
			"images":["images/197x148.gif"]
		}
	]
}


/* Name and Role from bio JSON */
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);



/* Print header on index page */
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

/* Contact Info from bio JSON */
var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


/* Add skills if any */
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

/* Add contact info in heade an dfooter */
for(contact in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[contact]);
	$("#footerContacts").append(formattedContactInfo[contact]);
}

/* function to display work */

function displayWork(){
	if(work.jobs.length > 0){
		$("#workExperience").append(HTMLworkStart);	

		for(job in work.jobs){
		
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}

	}
}

projects.display = function(){
	if(projects.projects.length > 0){
		for(project in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[project].images){
				var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}

education.display = function(){
	if(education.schools.length > 0 || education.onlineCourses.length > 0){
		for(school in education.schools){
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			
		}	
	}
}

displayWork();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

 
