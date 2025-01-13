const popupImages = document.querySelectorAll('.popup-image');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.querySelector('.close-btn');

window.onload = () => {
    var grid = document.querySelector('.masonry-grid');
    var masonry = new Masonry( grid, 
    {
        itemSelector: '.masonry-grid-item',
        columnWidth: '.masonry-grid-item',
        gutter: 10
    });
   
}
// Function to handle the click event for each image
popupImages.forEach(image => {
    image.addEventListener('click', function() {
      popup.style.display = 'flex';
      const imgSrc = this.getAttribute('src');
      popupImg.setAttribute('src', imgSrc);
    });
  });
    
    // Close the popup when close button is clicked
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });
    
    // Close the popup when clicking outside of the image
    window.addEventListener('click', function(event) {
      if (event.target === popup) {
        popup.style.display = 'none';
      }
    });

function UnderlineLink(id)
{
    document.getElementById(id).style.transform="scale(1)";
}
function DeleteUnderlineLink(id)
{
    document.getElementById(id).style.transform="scale(0)";
}
function animate(obj, initVal, lastVal, duration, plus) 
{
    let startTime = null;

    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();

    //pass the current timestamp to the step function
    const step = (currentTime ) => {

    //if the start time is null, assign the current time to startTime
    if (!startTime) {
        startTime = currentTime ;
    }

    //calculate the value to be used in calculating the number to be displayed
    const progress = Math.min((currentTime - startTime)/ duration, 1);

    //calculate what to be displayed using the value gotten above
    obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
    if(!plus)
        obj.innerHTML+="&nbsp";
    else
        obj.innerHTML+="+&nbsp";

    //checking to make sure the counter does not exceed the last value (lastVal)
    if (progress < 1) {
        window.requestAnimationFrame(step);
    } else {
        window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };
    //start animating
        window.requestAnimationFrame(step);
    }
    
function load() {
    let text1 = document.getElementById('counter1');
    let text2 = document.getElementById('counter2');
    let text3 = document.getElementById('counter3');

    animate(text1, 0, 12, 2000, false);
    animate(text2, 0, 100, 2000, true);
    animate(text3, 0, 4, 2000, true);
}