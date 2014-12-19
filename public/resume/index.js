window.onload = function() {
  var printLink = document.getElementById('print');

  printLink.addEventListener('click', function(event) {
    event.preventDefault();
    
    window.print();
  });
};