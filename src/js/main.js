// import 'regenerator-runtime/runtime';
// import axios from 'axios';

(function () {
  const doc = document.documentElement

  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    /* global ScrollReveal */
    const sr = window.sr = ScrollReveal()

    sr.reveal('.feature, .testimonial', {
      duration: 600,
      distance: '50px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 100
    })

    /* global anime */
    const heroAnimation = anime.timeline({ autoplay: false })
    const strokedElement = document.querySelector('.stroke-animation')

    strokedElement.setAttribute('stroke-dashoffset', anime.setDashoffset(strokedElement))

    heroAnimation.add({
      targets: '.stroke-animation',
      strokeDashoffset: {
        value: 0,
        duration: 2000,
        easing: 'easeInOutQuart'
      },
      strokeWidth: {
        value: [0, 2],
        duration: 2000,
        easing: 'easeOutCubic'
      },
      strokeOpacity: {
        value: [1, 0],
        duration: 1000,
        easing: 'easeOutCubic',
        delay: 1000
      },
      fillOpacity: {
        value: [0, 1],
        duration: 500,
        easing: 'easeOutCubic',
        delay: 1300
      }
    }).add({
      targets: '.fadeup-animation',
      offset: 1300, // Starts at 1300ms of the timeline
      translateY: {
        value: [100, 0],
        duration: 1500,
        easing: 'easeOutElastic',
        delay: function (el, i) {
          return i * 150
        }
      },
      opacity: {
        value: [0, 1],
        duration: 200,
        easing: 'linear',
        delay: function (el, i) {
          return i * 150
        }
      }
    }).add({
      targets: '.fadeleft-animation',
      offset: 1300, // Starts at 1300ms of the timeline
      translateX: {
        value: [40, 0],
        duration: 400,
        easing: 'easeOutCubic',
        delay: function (el, i) {
          return i * 100
        }
      },
      opacity: {
        value: [0, 1],
        duration: 200,
        easing: 'linear',
        delay: function (el, i) {
          return i * 100
        }
      }
    })

    doc.classList.add('anime-ready')
    heroAnimation.play()
  }
}())


const sendemail = async () => {
  let input = document.getElementById('emailform').value;
  let checker = Boolean
  if (/^\w+([\+.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    .test(input)) {
    checker = true
    console.log('SENDING')
    let bodytext = '<head><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></head><body><p>We are excited to connect with you and learn how User HQ can benefit your company! I will be reaching out soon with the next steps, and more information about our platform. If you would like to move forward after that we can schedule a meeting and keep the ball rolling!</p><p>Looking forward to working together,<br>Chase Logan</p><br><a href="https://www.explico.io"><img style="width:64px; height:64px; margin-top:15px;"src="https://wgautomatestorage.blob.core.windows.net/uhq-logos/transparent_square.png?sp=r&st=2022-08-12T19:34:14Z&se=2023-08-13T03:34:14Z&spr=https&sv=2021-06-08&sr=b&sig=ooJASRLO5dgvDKYN9%2FmTUKTRevTCqjidXqIazuWu5D8%3D"></a></body>'
    let payload = { 'subject': "Thank You For Your Interest In User HQ!", 'recipients': input, 'body': bodytext }
    let emailerpost = await axios.post('https://prod-10.centralus.logic.azure.com:443/workflows/0b29a89e49d54f68b232e5a948d7b92d/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=LmVxu1W0gmaqsx7nctq1h8qLmgRXZZNhYTnxkclIkSM', payload)
    console.log(emailerpost)
    var successelement = document.getElementById("subsuccess");
    successelement.style.display = "block";
    var element = document.getElementById("formaterror");
    element.style.display = "none";
  }
  else {
    checker = false
    var successelement = document.getElementById("subsuccess");
    successelement.style.display = "none";
    var element = document.getElementById("formaterror");
    element.style.display = "block";
  }
}

const sendemail2 = async () => {
  let input = document.getElementById('emailform2').value;
  let checker = Boolean
  if (/^\w+([\+.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    .test(input)) {
    checker = true
    console.log('SENDING')
    let bodytext = '<head><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></head><body><p>We are excited to connect with you and learn how User HQ can benefit your company! I will be reaching out soon with the next steps, and more information about our platform. If you would like to move forward after that we can schedule a meeting and keep the ball rolling!</p><p>Looking forward to working together,<br>Chase Logan</p><br><a href="https://www.explico.io"><img style="width:64px; height:64px; margin-top:15px;"src="https://wgautomatestorage.blob.core.windows.net/uhq-logos/transparent_square.png?sp=r&st=2022-08-12T19:34:14Z&se=2023-08-13T03:34:14Z&spr=https&sv=2021-06-08&sr=b&sig=ooJASRLO5dgvDKYN9%2FmTUKTRevTCqjidXqIazuWu5D8%3D"></a></body>'
    let payload = { 'subject': "Thank You For Your Interest In User HQ!", 'recipients': input, 'body': bodytext }
    let emailerpost = await axios.post('https://prod-10.centralus.logic.azure.com:443/workflows/0b29a89e49d54f68b232e5a948d7b92d/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=LmVxu1W0gmaqsx7nctq1h8qLmgRXZZNhYTnxkclIkSM', payload)
    console.log(emailerpost)
    var successelement = document.getElementById("subsuccess2");
    successelement.style.display = "block";
    var element = document.getElementById("formaterror2");
    element.style.display = "none";
  }
  else {
    checker = false
    var successelement = document.getElementById("subsuccess2");
    successelement.style.display = "none";
    var element = document.getElementById("formaterror2");
    element.style.display = "block";
  }
}

