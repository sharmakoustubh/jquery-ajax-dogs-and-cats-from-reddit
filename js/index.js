$('.btn').click(function() {
  
  $('.text').text('loading . . .');
  
  $.ajax({
    type: "GET",
    data: {
      q: $(".animal:checked").val(),
      restrict_sr: "true",
    },
    url:"https://www.reddit.com/r/aww/search.json",
    //url: "https://www.reddit.com/r/aww/search.json?q=dogs&restrict_sr=true",
    success: function(response) {
      $('.text').html('')
   for(var i=0; i<response.data.children.length; i++){
     var image = "<img src='" + response.data.children[i].data.thumbnail + "'/>'";
     $('.text').append(image);
       //$('.text').text(JSON.stringify(response));
   }
    },
 
  });
 
  
});