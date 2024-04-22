// jQuery code to add hover effect to #name element
$(document).ready(function(){
    var colors = ['wheat', 'brown', 'turquoise', 'red']; // Define array of colors
  
    $('#name').hover(function(){
      var randomColor = colors[Math.floor(Math.random() * colors.length)]; // Choose a random color from the array
      $(this).css('color', randomColor); // Change color to the random color on hover
    }, function(){
      $(this).css('color', ''); // Reset color when mouse leaves
    });
  });