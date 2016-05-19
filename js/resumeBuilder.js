
/*
	Skills array that will be used to list the resume's skills
	Intro string that will be added in the header section of the resume
*/

var skills = ["HP ALM", "Team Lead", "JavaScript", "JQuery", "HTML", "CSS", "Java", "SQL","HP UFT", "Fast Learner", "Proactive", "Test Plans", "Functional Requirements", "UI Testing", "Defect Tracking", "Status Reporting", "Test Execution"];
var intro = "Hi! my name is Sergio, I'm a Mexican computer geek and have been living in Charlotte, NC for the past 5 years, my main work experience has been on the Software Quality Assurance side of the industry, however I'm greatly interested in development and have been preparing myself for a possible change of paths taking online courses and practicing on my free time. I'm currently unemployed due to some personal nuances, I'm also enroled in a masters degree course with a Spanish school: Universidad Internacional de la Rioja, coursing the master Direccion e Ingenieria de Sitios Web (Web Site Management and Engineering) that I'll be finishing by mid 2017"

/*
	JSON Objects for the different sections of the resume, these have been validated with http://jsonlint.com/ to conform to the JSON standards
*/

var bio = {
	"name" : "Sergio Enriquez Martinez",
	"role" : "QA Analyst",
	"phone" : "704.390.1825",
	"email" : "senriquezmartinez@gmail.com",
	"location" : "Charlotte, NC",
	"pictureURL" : "images/SergioFront2.jpg",
	"gitHub" : "cheko12chk",
	"welcomeMsg" : intro,
	"skills" : skills
};

var work = {
	"jobs": [
		{
			"employer" : "Infosys Technologies Ltd.",
			"location" : "Charlotte, NC",
			"datesWorked" : "February 2010 - September 2015",
			"title" : "Technology Analyst",
			"description" : "Worked as Senior QA Analyst and Team Lead for a couple Bank of America projects, managing the testing efforts for teams spread between Mexico, US and India. Duties included test planning, scheduling test efforts, reporting test findings, requirement analysis, test efforts coordination"
		},
		{
			"employer" : "Softtek Information Services",
			"location" : "Monterrey, NL, MX",
			"datesWorked" : "December 2007 - February 2010",
			"title" : "Test Analyst",
			"description" : "Worked as Test Analyst for projects with American Corporations like Citi Bank and Kaplan University, performing testing, creating test cases based of requirements, performing test execution, defect reporting and tracking to closure"
		}
	]
};

var education = {
	"schools" : [
		{
			"name" : "Universidad Internacional de la Rioja",
			"location" : "Mexico-Online",
			"degree" : "Masters",
			"majors" : ["Maestria en Direccion e Ingenieria de Sitios Web"],
			"datesAttended" : "2017",
			"schoolURL" : "http://mexico.unir.net/"
		},
		{
			"name" : "Instituto Tecnologico de San Luis Potosi",
			"location" : "San Luis Potosi, SLP, MX",
			"degree" : "BS",
			"majors" : ["Computer Systems Engineering"],
			"datesAttended" : "2007",
			"schoolURL" : "http://www.itslp.edu.mx/"
		}

	],
	"onlineClasses" : [
		{
			"title" : "How to Use Git and GitHub",
			"school" : "Udacity.com",
			"datesAttended" : "2016",
			"courseURL" : "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity.com",
			"datesAttended" : "2016",
			"courseURL" : "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title" : "Intro to Java Programming",
			"school" : "Udacity.com",
			"datesAttended" : "2014",
			"courseURL" : "https://www.udacity.com/course/intro-to-java-programming--cs046"
		}
	]

};

var projects = {
	"project" : [
		{
			"title" : "Marketing Review Center",
			"datesWorked" : "August 2012 to September 2015",
			"description" : "Performed as Team Lead in charge of organizing the testing efforts for the MRC application, scheduling testing timelines, gathering and reporting findings of the testing activities, coordinating a team of people distributed between Mexico, US and India",
			"images" : ""
		},
		{
			"title" : "BofA Request Processor",
			"datesWorked" : "March 2010 to August 2012",
			"description" : "Performed as BAU Lead in charge of regression testing efforts for the critical Request Processor application of Bank of America, coordinating manual and automated regression efforts that alligned to major releases within the bank, impacting a wide array of internal and external facing applications",
			"images" : ""
		}
	]
};

/*
	Display method of the Bio object, this is used to create the header of the resume
*/
bio.displayBio = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var picture = HTMLbioPic.replace("%data%", bio.pictureURL);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	$("#header").append(picture);
	$("#header").append(formattedWelcomeMsg);

	if(bio.skills.length > 0){
		var formattedSkill;
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < skills.length; i++) {
			formattedSkill = HTMLskills.replace("%data%", skills[i]);
			$("#skills").append(formattedSkill);
		}
	}

	var formattedPhone = HTMLmobile.replace("%data%", bio.phone);
	var formattedLocation = HTMLlocation.replace("%data%", bio.location);
	var formattedEmail = HTMLemail.replace("%data%", bio.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.gitHub);
	$("#topContacts").append(formattedPhone);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	$("#footerContacts").append(formattedPhone);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);
}

/*
	Display method of the work object used to populate the Work Experience section in the resume.
*/
work.displayWork = function(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked)
		$(".work-entry:last").append(formattedDate);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

/*
	Display method of the projects object that populates the Projects section of the resume
*/
projects.displayProjects = function() {
	for(p in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[p].title);
		var formattedDatesWorked = HTMLprojectDates.replace("%data%", projects.project[p].datesWorked);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[p].description);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedDatesWorked);
		$(".project-entry:last").append(formattedProjectDescription);
	}
};

/*
	Display method of the Education object, it populates the Education section
*/
education.displayEducation = function(){
	for(s in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[s].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[s].datesAttended);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[s].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[s].majors);
		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchoolNameDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	$("#education").append(HTMLonlineClasses);
	for(o in education.onlineClasses){
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[o].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[o].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[o].datesAttended);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineClasses[o].courseURL);
		var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineTitleSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineUrl);
	}
}

/*
	Calls to the diferent display methods to form the resume page. This section also inserts the map at the bottom of the resume
*/

bio.displayBio();
work.displayWork();
projects.displayProjects();
education.displayEducation();
$("#mapDiv").append(googleMap);




/*$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

function logClicks(x, y){
	console.log("X Location : " + x + " Y Location : " + y);
}

function inName(fullName) {
	var finalName = fullName;
	var names = fullName.split(" ");
	names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
	names[1] = names[1].toUpperCase();
	if(names.length === 3){
		names[2] = names[2].toUpperCase();
	}
	finalName = names.join(" ");
	return finalName;	
}*/

