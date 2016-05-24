/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var email = "danny@udacity.com";
// var newEmail = email.replace("udacity", "gmail");
// console.log(email);
// console.log(newEmail);
//
// var awesomeThoughts = "My name is Danny and I am Awesome!";
// var funthoughts = awesomeThoughts.replace("Awesome", "FUN");
// $("#main").append(funthoughts);
//
 var name = "Danny Truong";
 var role = "Software Engineer";
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

//var skills = ["awesomeness", "programming", "teaching", "JS"];
//$("#main").append(skills);
//$("#main").append(skills[0]);
//$("#main").append(skills.length);
var bio = {
  "name" : "Danny Truong",
  "role" : "Software Engineer",
  "contacts" : {
    "mobile" : "337-304-3125",
    "email" : "Dannyalmighty@icloud.com",
    "location" : "Baton Rouge, LA"
  },
  "welcomeMessage" : "Welcome to my resume page",
  "skills" : [ "Java (4 years)", "SQL (2.5 years)", "XML (1 year)", "Python (1 year)",
              "CSS (1 year)", "HTML (1 year)", "JavaScript (1 year)", "AngularJS (6 months)",
              "Git & github", "SharePoint", "Eclipse", " MySQL WorkBench", "SQLite",
            "Visual Studio", "Apple Xcode", "Android Studio", "Robotics", "Data Analysis",
          "Testing experience", "Leadership Training", "Agile & Scrum Training"],
  "biopic" : "images/biopic.jpg"
}


var projects = {
  "projects" : [
    {
      "title" : "ClearPath Robot",
      "dates" : "January 2016 - may 2016",
      "description" : "Use of computer vision with Kinect sensor and Path Algorithm",
      "images" : []
    },
    {
      "title" : "French Quarter Festival Android App",
      "dates" : "May 2015 - September 2015",
      "description" : "use of Cloud Data, UX/UI Designer, Search Algorithms",
      "images" : ["images/fqf1.png", "images/fqf2.png", "images/fqf3.png"]
    },
    {
      "title" : "DreamLink Android App",
      "dates" : "September 2015 - May 2016",
      "description" : "Use of Cloud Data, UX/UI Designer, Artificial Intelligence",
      "images" : []
    },
    {
      "title" : "LightRover Robot",
      "dates" : "August 2015 - December 2015",
      "description" : "Use of SLAM, Shortest Path Algorithms, Sensors",
      "images" : []
    }
  ]
}

var education = {
  "schools": [
    {
      "name" : "Louisiana State University",
      "city" : "Baton Rouge",
      "degree" : "Bachelor of Science",
      "major" : "Computer Science",
      "graduation" : "May 2016"
    },
    {
      "name" : "Louisiana State University",
      "city" : "Baton Rouge",
      "degree" : "Bachelor of Science",
      "major" : "Kinesiology",
      "graduation" : "May 2016"
    }
  ]
}

var work = {
  "jobs" : [
    {
      "employer" : "Blue Cross Blue Shield",
      "position" : "Software Engineer Intern",
      "location" : "Baton Rouge, LA",
      "dates" : "October 2015 - June 2016",
      "description" : "Business Tools support, Database design and query optimization, Quality Assurance"
    },
    {
      "employer" : "Stryker Studio",
      "position" : "Web and Mobile Application Developer",
      "location" : "New Orleans, LA",
      "dates" : "September 2015 - December 2015",
      "description" : "Design, Develop, and Test mobile and web applications"
    },
    {
      "employer" : "GE Capital",
      "position" : "Software Engineer Intern",
      "location" : "New Orleans, LA",
      "dates" : "May 2015 - August 2015",
      "description" : "Design, Develop, and Test the Android French Quarter Festival App"
    }
  ]
}

  var formatBioPic = HTMLbioPic.replace("%data%",bio.biopic);
  $("#header").append(formatBioPic);
  var formatWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").append(formatWelcomeMsg);
  var formattedContact = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedContact);
  formattedContact = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedContact);
  formattedContact = HTMLlocation.replace("%data%", bio.contacts["location"]);
  $("#topContacts").append(formattedContact);


$("#main").append.bio;
  $("#header").append(HTMLskillsStart);
for(skill in bio.skills){


  var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
  $("#skills").append(formattedSkill);
}

function displayWork(){
  for (job in work.jobs) {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    //concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

// Call the function to display work because functions do not automatically display.
displayWork();

// Encapsulated functions
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjTitle);

    var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjDates);

    var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjDescription);

    if(projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjImage);
      }
    }
  }
}
projects.display();

// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;
//   logClicks(x,y);
// })

function locationizer(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs){
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}
//console.log(locationizer(work));

// Uppercase the first letter of the first name and Uppercase the entire last name.
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
//$('#main').append(internationalizeButton);


$("#mapDiv").append(googleMap);
