// 2. Create your own resume data in JSON format

let resume = [
    {
        "Basics" : {
            "Name": "Shiva prasad Makthala",
            "Age": 23,
            "Email": "mshivaprasadg15@gmail.com",
            "Phone No": 9705535056,
            "Location": "Yadadri Dist, Hyderabad, Telangana"
        }
    },
    {
        "Education": {
            "B.Tech": "Guru Nanak Institutions,Ibrahimpatnam, Hyderabad (with 8.4 CGPA)" ,
            "Diploma": "Kasireddy Narayana Reddy College, Abdullapurmet, Hyderabad (with 84%)",
            "SSC": "Pochampally pupils High School, Pochampally, Yadadri (with 8.7 CGPA)"
        }
    },
    {
        "Skills": {
            1: "HTML, CSS , JavaScript",
            2: "Basics in C",
            3: "Basics in Matlab, ECADD"
        }
    },
    {
        "Certificates":{
            1: "MATLAB Certified by Pixel Quest",
            2: "Training Program of Manufacturing of Turbo generators by BHEL, Hyderabad"
        }
    },
    {
        "Projects": {
            "Mini Project": "IoT Based Home Automation",
            "Description": "IoT home automation is the ability to control domestic appliances by electronically controlled, internet-connected systems",
            "Major Project": "Solar Powered Face Recognition System",
            "Description": "Facial recognition is the process of identifying or verifying the identity of a person using their face."
        }
    },
    {
        "Languages": "English, Telugu, Hindi",
        "Interests": "Playing sports, Watching Sports & news channels, browsing internet about new technologies"
    }
];

console.log(resume);


// output in nodejs:
// {
//     Basics: {
//       Name: 'Shiva prasad Makthala',
//       Age: 23,
//       Email: 'mshivaprasadg15@gmail.com',
//       'Phone No': 9705535056,
//       Location: 'Yadadri Dist, Hyderabad, Telangana'
//     }
//   },
//   {
//     Education: {
//       'B.Tech': 'Guru Nanak Institutions,Ibrahimpatnam, Hyderabad (with 8.4 CGPA)',
//       Diploma: 'Kasireddy Narayana Reddy College, Abdullapurmet, Hyderabad (with 84%)',
//       SSC: 'Pochampally pupils High School, Pochampally, Yadadri (with 8.7 CGPA)'
//     }
//   },
//   {
//     Skills: {
//       '1': 'HTML, CSS , JavaScript',
//       '2': 'Basics in C',
//       '3': 'Basics in Matlab, ECADD'
//     }
//   },
//   {
//     Certificates: {
//       '1': 'MATLAB Certified by Pixel Quest',
//       '2': 'Training Program of Manufacturing of Turbo generators by BHEL, Hyderabad'
//     }
//   },
//   {
//     Projects: {
//       'Mini Project': 'IoT Based Home Automation',
//       Description: 'Facial recognition is the process of identifying or verifying the identity of a person using their face.',
//       'Major Project': 'Solar Powered Face Recognition System'
//     }
//   },
//   {
//     Languages: 'English, Telugu, Hindi',
//     Interests: 'Playing sports, Watching Sports & news channels, browsing internet about new technologies'
//   }