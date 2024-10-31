// data.js
import service1 from '../../assets/images/serviceImg/person-taking-driver-s-license-exam-min (1).webp'
import service3 from '../../assets/images/serviceImg/Leonardo_Phoenix_A_warm_and_inviting_image_of_a_young_adult_fe_3.webp'
import service2 from '../../assets/images/serviceImg/happy-charismatic-man-driving-car-min (1).webp'



const data = [
    { 
      image: service1,
      title: 'Beginner Course (Automatic & Manual)',
      service: 'Service 1',
      description: "We provide expert driving instruction tailored to beginner drivers. Whether you're starting from scratch or need help mastering the basics",
      link: '/beginner',
    },
    {
      image: service3,
      title: 'Refresher Course (Automatic & Manual)',
      service: 'Service 2',
      description: "Revive your driving skills with our refresher course. Perfect for those who haven’t driven in a while, we focus on rebuilding confidence",
      link: '/refresher-course',
    },
    {
      image: service2,
      title: 'Crash Course (Automatic & Manual)',
      service: 'S',
      description: 'Our intensive Crash Course is designed for rapid learning, focusing on essential driving skills to prepare you for your driving test in a short period.',
      link: '/crash-course',
    }
    
    // Add more data as needed
  ];
  
  export default data;
  