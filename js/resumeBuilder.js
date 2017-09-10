/*
 This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    name: 'Weishuo QIAN',
    role: 'Data Scientist',
    welcomeMessage: 'Welcome to view my resume, but I\'m NOT searching for a job.' +
    'This site is ONLY for practicing purpose of the FrontEnd Nano Degree class at Udacity.',
    bioPic: 'images/fry.jpg',
    contacts: {
        mobile: '+86-156-xxxx-4075',
        email: 'xxxx@qq.com',
        github: 'koyo922',
        twitter: 'xxxx@qq.com',
        location: 'Beijing'
    },
    skills: [
        'Machine Learning', 'Python Data Analysis',
        'Java Developing', 'Front End'
    ]
};
bio.display = function () {
    var header = $('#header');
    // header
    var name = HTMLheaderName.replace('%data%', bio.name);
    header.prepend(name);
    var role = HTMLheaderRole.replace('%data%', bio.role);
    header.prepend(role);
    // contact
    var mobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var email = HTMLemail.replace('%data%', bio.contacts.email);
    var twitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var github = HTMLgithub.replace('%data%', bio.contacts.github);
    var location = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#topContacts').append([mobile, email, github, twitter, location].join(' '));
    $('#footerContacts').append([mobile, email, github, twitter, location].join(' '));
    // skills
    var bioPic = HTMLbioPic.replace('%data%', bio.bioPic);
    var welcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    header.append(bioPic + welcomeMsg);
    header.append(HTMLskillsStart);
    bio.skills.forEach(function (s) {
        var skill = HTMLskills.replace('%data%', s);
        $('#skills').append(skill);
    });
};
bio.display();

var work = {
    jobs: [
        {
            employer: 'Yuanfudao',
            title: 'Algorithm Engineer',
            location: 'Beijing',
            dates: '2016-05-01',
            description: 'Audio Recognition related research & engineering work. ' +
            'Using Kaldi for audio processing and TensorFlow for end2end method.'
        },
        {
            employer: 'Panasonic',
            title: 'Software Engineer',
            location: 'Tokyo',
            dates: '2015-10-01',
            description: '<a href="https://www.automotivelinux.org/" ' +
            'style="display: inline-block">AGL</a> related work. Installing AGL on a Radio-Controlling-Vehicle ' +
            'and try to control it over wireless device.'
        }
    ]
};
work.display = function () {
    work.jobs.forEach(function (job) {
        $('#workExperience').append(HTMLworkStart);
        var employer = HTMLworkEmployer.replace('%data%', job.employer);
        var title = HTMLworkTitle.replace('%data%', job.title);
        var dates = HTMLworkDates.replace('%data%', job.dates);
        var location = HTMLworkLocation.replace('%data%', job.location);
        var description = HTMLworkDescription.replace('%data%', job.description);
        $('.work-entry:last').append(employer + title
            + dates + location + description
        );
    });
};
work.display();


var project = {
    projects: [
        {
            title: 'Ancient Chinese poetry reciting auto-judgement',//'小猿背古诗',
            dates: '2016-11-1',
            description: 'Giving real-time character-level feedback to students who are reciting a poetry.', //'语音识别，自动判错',
            images: [
                'https://placehold.it/200x150.png',
                'https://placehold.it/200x150.png'
            ]
        },
        {
            title: 'Pronunciation Evaluation in Oral English Lesson', //'猿辅导少儿英语口语课',
            dates: '2017-2-1',
            description: 'Online real-time pronunciation evaluation for kids learning English as a foreign language.',//在线即时的口语评分',
            images: [
                'https://placehold.it/200x150.png',
                'https://placehold.it/200x150.png'
            ]
        },
        {
            title: 'Online Oral English Quiz Set',//'猿题库英语听说练习册',
            dates: '2017-3-1',
            description: 'A new question type in the Gaokao(University Entrance Exam) of Guangdong Province, which is much like the speaking part in TOEFL.',//'广东省高考的一种题型，类似TOEFL的口语考试',
            images: [
                'https://placehold.it/200x150.png',
                'https://placehold.it/200x150.png'
            ]
        }
    ]
};
project.display = function () {
    project.projects.forEach(function (p) {
        $('#projects').append(HTMLprojectStart);
        var title = HTMLprojectTitle.replace('%data%', p.title);
        var dates = HTMLprojectDates.replace('%data%', p.dates);
        var description = HTMLprojectDescription.replace('%data%', p.description);
        $('.project-entry:last').append(title + dates + description);

        p.images.forEach(function (img) {
            var image = HTMLprojectImage.replace('%data%', img);
            $('.project-entry:last').append(image);
        });
    });
};
project.display();

var education = {
    schools: [
        {
            name: 'CAS',
            degree: 'Master',
            location: 'Beijing',
            dates: '2015-7-1',
            url: 'http://english.cas.cn/',
            majors: ['Data Mining', 'Computer Network']
        },
        {
            name: 'Wuhan Univ.',
            degree: 'Bachelor',
            location: 'Wuhan',
            dates: '2012-7-1',
            url: 'http://whu.edu.cn/',
            majors: ['GIS', 'Software Engineering']
        }
    ],
    onlineCourses: [
        {
            title: 'Deep Learning Nano Degree',
            school: 'Udacity',
            dates: '2017-09-07',
            url: 'https://cn.udacity.com/dlnd'
        },
        {
            title: 'Front End Nano Degree',
            school: 'Udacity',
            dates: 'learning...',
            url: 'https://cn.udacity.com/fend'
        }
    ]
};

education.display = function () {
    var educationDiv = $('#education');
    education.schools.forEach(function (s) {
        educationDiv.append(HTMLschoolStart);

        var name = HTMLschoolName.replace('%data%', s.name);
        var degree = HTMLschoolDegree.replace('%data%', s.degree);
        var dates = HTMLschoolDates.replace('%data%', s.dates);
        var location = HTMLschoolLocation.replace('%data%', s.location);
        var major = HTMLschoolMajor.replace('%data%', s.majors.join(', '));

        $('.education-entry:last').append(
            name + degree + dates + location + major
        );
    });

    if (education.onlineCourses.length !== 0) {
        educationDiv.append(HTMLonlineClasses);
    }
    education.onlineCourses.forEach(function (o) {
        educationDiv.append(HTMLschoolStart);

        var title = HTMLonlineTitle.replace('%data%', o.title);
        var school = HTMLonlineSchool.replace('%data%', o.school);
        var dates = HTMLonlineDates.replace('%data%', o.dates);
        var url = HTMLonlineURL.replace('%data%', o.url);
        $('.education-entry:last').append(title + school + dates + url);
    })
};
education.display();

$('#mapDiv').append(googleMap);
