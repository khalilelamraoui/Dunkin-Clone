// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//     document.getElementById("months").classList.toggle("show");
//     document.getElementById("days").classList.toggle("show");
//   }
// window.onclick = function(e) {
//   if (!e.target.matches('.dropbtn')) {
//     var myDropdown = document.getElementById("myDropdown");
//     if (myDropdown.classList.contains('show')) {
//       myDropdown.classList.remove('show');
//     }
//   }
//   if (!e.target.matches('.dropbtn2')){
//     var myDropdown2 = document.getElementById("months");
//     if (myDropdown2.classList.contains('show')) {
//       myDropdown2.classList.remove('show');
//     }
//   }
//   if (!e.target.matches('.dropbtn3')){
//     var myDropdown3 = document.getElementById("days");
//     if (myDropdown3.classList.contains('show')) {
//       myDropdown3.classList.remove('show');
//     }
//   }
// }

function myFunction(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}