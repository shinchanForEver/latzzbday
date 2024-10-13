document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll('.scroll-animate');
  
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-in-view');
            }
        });
    });
  
    elements.forEach(el => {
        observer.observe(el);
    });
});

function displayer_changer(){
  var background_audio=document.getElementById('background_audio');
  background_audio.play();
  document.querySelector('.pop_up_container').style.visibility='hidden';
  document.body.style.overflow='auto';
}

function openDialer() {
  // Replace '1234567890' with the phone number you want to dial
  window.location.href = "tel:+919444133344";
}

//poem text
let count = 1;
    let intervalId; // To store the interval ID

    function visibility_hidder() {
      // Reset count and hide all spans initially
      count = 1;
      for (let i = 1; i <= 6; i++) {
        document.getElementById(`text_appear_${i}`).style.visibility = 'hidden';
      }

      // Start displaying the poem with intervals
      intervalId = setInterval(poem_displayer, 1750); // Call poem_displayer every 1.75 seconds

      // Stop the interval after 10.5 seconds
      setTimeout(() => {clearInterval(intervalId);background_audio.play();}, 11500);
    }

    function poem_displayer() {
      // Display the current span
      if (count <= 6) {
        document.getElementById(`text_appear_${count}`).style.visibility = 'visible';
        count++;
      }
    }

    // Get the audio element and add an event listener to play event
    var audio_content = document.getElementById('myaudio');
    audio_content.addEventListener('play', () => {
      background_audio.pause();
      visibility_hidder(); // Trigger poem display when the audio plays
      
    });

    audio_content.addEventListener('play', () => {
      background_audio.play();
    });
    var audio_content_1 = document.getElementById('final_audio');
    audio_content_1.addEventListener('play', () => {
      var background_audio=document.getElementById('background_audio');
      setTimeout(function() {
        document.getElementById('text_visible').style.visibility = 'visible';
    }, 144000);
    setTimeout(function() {
      document.getElementById('text_visible_2').style.visibility = 'visible';
  }, 195000);
    setTimeout(function() {
      document.getElementById('text_visible_3').style.visibility = 'visible';
    }, 240000);
  setTimeout(function() {
    document.getElementById('text_visible_4').style.visibility = 'visible';
    }, 210000);
      background_audio.pause();
    });
    audio_content_1.addEventListener('pause', () => {
      background_audio.play();
    });

