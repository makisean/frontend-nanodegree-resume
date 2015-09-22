/*
This is empty on purpose! Your code to build the resume will go here.
 */


for(var i = 0; i < 9; i++){
console.log(i);

}


var skills = ["ppc", "seo", "cro", "javascript"];

var bio = {
	"name" : "Sean" ,
	"role" : "Web Developer" ,
	"contactInfo" : "952-797-4422" ,
	"pictureURL"  : "http://www.example.com/images/image.png" ,
	"welcomeMessage" : "Hi, I'm Sean and learning" ,
	"skills" : skills
};

var work = {
	"jobs" : [
		{
			"employer" : "adshark marketing",
			"title" : "President",
			"dates" : "2014 - 2015",
			"location" : "Fargo, ND",
			"description" : "being a boss"
		},
		{
			"employer" : "UTC Aerospace systems",
			"title" : "Quality Engineer Intern",
			"dates" : "2012 - 2013",
			"location" : "Jamestown, ND",
			"description" : "being a chump"
		}
	]
};




var education = {
	"schools" : [
		{
			"name" : "NDSU",
			"city" : "Fargo",
			"major" : "Industrial Engineering"
		},
		{
			"name" : "UMN",
			"city" : "Minneapolis",
			"major" : "Digital Marketing"
		}
	],

	"onlineCourses" : [
		{
			"title" : "Javascript",
			"school" : "Udacity",
			"dates" : 2015
		}
	]};


var projects = {

	"projects" : [
		{
			"name" : "Best Paintball Reviews",
			"date" : "2012-2015",
			"description": "affiliate site and dropshipping ecommerce"
		},
		{
			"name" : "Skydiving Library",
			"date" : "2012-2015",
			"description": "affiliate site and dropshipping ecommerce"
		}
	]};

projects.display = function(){
//append all project info to the projects section
	for(project in projects.projects){

	 	$("#projects").append(HTMLprojectStart);

	 	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].name);
	 	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
	 	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

	 	$(".project-entry:last").append(formattedProjectTitle);
	 	$(".project-entry:last").append(formattedProjectDates);
	 	$(".project-entry:last").append(formattedProjectDescription);
	}

};

projects.display();

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.skills);
$("#main").append(work["position"]);
$("#main").append(education.name);
$("#main").append(bio.skills[0]);


if (bio.skills.length > 0) {
	
	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
	

};




function displaywork(){
	for(myJobs in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[myJobs].employer);
		var formattedEmployerTitle = HTMLworkTitle.replace("%data%", work.jobs[myJobs].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[myJobs].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[myJobs].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[myJobs].description);

		var workFullDetails = formattedEmployer + formattedEmployerTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription;

		$(".work-entry:last").append(workFullDetails);
	};
}


displaywork();

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#main").append(internationalizeButton);

function inName(fullname){

	var name = fullname.split(" ");

var formattedFirstName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
var formattedLastName = name[1].toUpperCase();

var formattedFullName = formattedFirstName + " " + formattedLastName;

return formattedFullName;

}

var myname = "Sean Maki";

$("#mapDiv").append(googleMap);