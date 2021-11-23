window.onload = function()
{
   var x = document.getElementById("x");
   var y = document.getElementById("y");
   var y2 = document.getElementById("y2");
   var y3 = document.getElementById("y3");
   var y4 = document.getElementById("y4");
   var y5 = document.getElementById("y5");
   var menuscroll = document.getElementById("xyz"); 
   var menuscroll2 = document.getElementById("xyz2");
   var menuscroll3 = document.getElementById("xyz3");
   var menuscroll4 = document.getElementById("xyz4");
   var menuscroll5 = document.getElementById("xyz5");

   
   
   window.onscroll = function()
   {
       var yScrollAxis = window.pageYOffset;
       
       if (yScrollAxis > 105)
           x.classList.add('animate__animated', 'animate__fadeInUp');
       if (yScrollAxis > 150)
            y.classList.add('animate__animated', 'animate__fadeInUp');
            y2.classList.add('animate__animated', 'animate__fadeInUp');
            y3.classList.add('animate__animated', 'animate__fadeInUp');
            y4.classList.add('animate__animated', 'animate__fadeInUp');
            y5.classList.add('animate__animated', 'animate__fadeInUp');

        if (yScrollAxis > 700) 
            menuscroll5.style.textDecoration = "underline";
            menuscroll2.style.textDecoration = "none";
        if (yScrollAxis < 700) 
             menuscroll5.style.textDecoration = "none";
        if (yScrollAxis > 1500) 
            menuscroll5.style.textDecoration = "none";
        if (yScrollAxis < 700)
            menuscroll2.style.textDecoration = "underline"

        if (yScrollAxis > 120) {
            menuscroll4.classList.add('fadeanimacja');
            menuscroll.style.display = "block";
            menuscroll2.style.display = "block";
            menuscroll3.style.display = "block";
            menuscroll4.style.display = "block";
            menuscroll5.style.display = "block";
        }else{
            menuscroll.style.display = "none";
            menuscroll2.style.display = "none";
            menuscroll4.style.display = "none";
            menuscroll3.style.display = "none";
            menuscroll5.style.display = "none";
        }
       test.innerHTML = yScrollAxis;
   
   
   
    };
};