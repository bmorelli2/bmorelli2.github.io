$(document).ready(function(){
  var anchor = $("#portAttach");

  $(portfolioArray).each(function(index){
    var htmlCard = "<div class='p-card' data-id=" + index + ">" +
                    "<div class='p-card-imgCont'>" +
                    "<img src='" + this.src + "' alt='" + this.title + "' />" +
                    "</div>" +
                    "<div class='p-card-header'>" +
                    this.title +
                    "</div>"+
                    "</div>";
    $(anchor).append(htmlCard);
  });

  $(".p-card").on('click', function(){
    var cardIndex = $(this).attr('data-id');
    var prompt = "<div class='disable'>" +
                "<div class='p-window col-s-8 col-m-7 col-l-6'>" +
                "<div class='p-window-header'>" +
                portfolioArray[cardIndex].title +
                "</div>" +
                "<div class='p-window-imgCont'>" +
                "<img src='" + portfolioArray[cardIndex].src + "' alt='" + portfolioArray[cardIndex].title + "' />" +
                "</div>" +
                "<div class='p-window-disc'>" +
                portfolioArray[cardIndex].disc +
                "</div>" +
                "</div>" +
                "</div>";

    $("body").addClass("body-disable");
    $("body").before(prompt);

    $(".disable").on('click', function(){
      restoreView();
    });

    $(document).on('scroll', function(){
      restoreView();
    });

    function restoreView(x){
        $(".disable").remove();
        $("body").removeClass("body-disable");
    }
  });
  getInsta();
});

function getInsta(){
  var a = '696845800.975527c.47f7440dcb1e4a8fbcee05a1dbe03612',
      b = 696845800,
      c = 12;

  $.ajax({
    url: 'https://api.instagram.com/v1/users/' + b + '/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: a, count: c},
    success: function(json){

        for( x in json.data ){

        $('#instaAttach').append( '<div class="p-card">' +
                                  '<a href="' + json.data[x].link + '" title="Instagram.com/bellimorelli">' +
                                  '<div class="p-card-img">' +
                                  '<img src="' + json.data[x].images.low_resolution.url + '">' +
                                  '</div>' +
                                  '</a>' +
                                  '</div>');
      }
    }
  });
}
