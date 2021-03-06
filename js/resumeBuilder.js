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
	"biopic":"images/logo.jpg"
};


var education = {
	"schools": [
		{
			"name": "Pondicherry University",
			"location": "Puducherry",
			"degree": "Masters",
			"majors": ["CS"],
			"dates": '2016',
			"url": "http://pondiuni.edu.in",
			"image":"images/fry.jpg"
		},
		{
			"name": "B. R. Ambedkar",
			"location": "Bihar",
			"degree": "Masters",
			"majors": ["Mathematics"],
			"dates": '2012',
			"url": "http://pondiuni.edu.in",
			"image":"images/fry.jpg"
		},
		{
			"name": "L. S. College",
			"location": "Bihar",
			"degree": "Bachelors",
			"majors": ["Mathematics"],
			"dates": '2010',
			"url": "http://pondiuni.edu.in",
			"image":"images/fry.jpg"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": '2014',
			"url": "http://www.udacity.com/course/ud804"
		}
	]
};

var work ={
	"jobs":[
		{
			"employer":"Group10",
			"title":"Intern - Software Developer",
			"dates":"January 2016 - Present",
			"location": "Gurgaon, India",
			"description":"Manages CMS based website using Drupal"
		}
	]
};

var projects = {
	"projects":[
		{
			"title":"Portfolio Mockup to HTML",
			"dates":'2016',
			"description":"Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
			"images":["images/2048.png"]
		},
		{
			"title":"Reader of Appliance Display",
			"dates":'2015',
			"description":"Developed an Android App using OpenCV and Tesseract. The app detects and read seven-segment digits.text-to-speech feature and easy access with volume buttons.",
			"images":["images/road.png"]
		},
		{
			"title":"2048",
			"dates":'2016',
			"description":"Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
			"images":["images/2048.png"]
		}
	]
};


/* Name and Role from bio JSON */


bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);




	/* Print header on index page */
	$("#biopic").append(formattedBioPic);

	$("#header-body").append(formattedName);
	$("#header-body").append(formattedRole);
	$("#header-body").append(formattedWelcomeMsg);



	/* Contact Info from bio JSON */
	var formattedContactInfo = [];
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
	formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


	/* Add skills if any */
	if(bio.skills.length > 0) {
		$("#header-body").append(HTMLskillsStart);

		for(var i in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}

	/* Add contact info in heade an dfooter */
	for(var contact in formattedContactInfo) {
		$("#topContacts").append(formattedContactInfo[contact]);
		$("#footerContacts").append(formattedContactInfo[contact]);
	}

};

/* function to display work */

work.display = function(){
	if(work.jobs.length > 0){
		$("#workExperience").append(HTMLworkStart);	

		for(var job in work.jobs){
		
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
};

/* function to display projects */
projects.display = function(){
	if(projects.projects.length > 0){
		for(var project in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			
			for(var img in projects.projects[project].images){
				var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			
		}
	}
};

/* function to display education */
education.display = function(){
	if(education.schools.length > 0 || education.onlineCourses.length > 0){
		for(var school in education.schools){
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			var formattedSchoolImage = HTMLschoolImage.replace("%data%", education.schools[school].image);

			$(".education-entry:last").append(formattedSchoolImage);
			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolMajor);
			
		}	
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);



 
