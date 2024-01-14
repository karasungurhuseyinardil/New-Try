
 var mainimg = document.querySelector('img');
 var images = ['assets/snowy.jpg', 'assets/rainy.jpg', 'assets/sunny.jpg', 'assets/clear.jpg','assets/foggy.jpg'];
 
 var num = 0;
 
 function next() {
     num++;
     if (num === images.length) {
         num = 0;
     }
     mainimg.src = images[num];
 }
 
 function back() {
     num--;
     if (num < 0) {
         num = images.length - 1;
     }
     mainimg.src = images[num];
 }
 