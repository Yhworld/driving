// data.js
import service1 from '../../assets/images/serviceImg/person-taking-driver-s-license-exam-min.webp'
import service3 from '../../assets/images/serviceImg/Leonardo_Phoenix_A_warm_and_inviting_image_of_a_young_adult_fe_3.webp'
import service2 from '../../assets/images/serviceImg/happy-charismatic-man-driving-car-min (1).jpg'



const data = [
    {
      image: service1,
      title: 'Beginner Course',
      service: 'Service 1',
      description: 'We provide expert audio system consultation and installation services for homes, businesses, and events, we ensure a top-quality listening experience..',
      link: '/audioservice',
    },
    {
      image: service3,
      title: 'Refresher Course',
      service: 'Service 2',
      description: 'We specialize in video production services, serving a diverse range of clients and projects with game changing cutting-edge technology,',
      link: '/videoservice',
    },
    {
      image: service2,
      title: 'Pass Plus',
      service: 'S',
      description: 'we\'re experts at creating captivating visual content that sets your brand apart. Whether it\'s promotional videos or product showcases',
      link: '/editing',
    },
    // Add more data as needed
  ];
  
  export default data;
  