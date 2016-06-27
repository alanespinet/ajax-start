$('#myButton').on('click', function(e){
  $.ajax({
    url: "http://www.fvi-grad.com/ajax/lesson1.txt",
    success: function(resp, txt, xhr){
      $("#myP").html(resp);
    }
  });
});
