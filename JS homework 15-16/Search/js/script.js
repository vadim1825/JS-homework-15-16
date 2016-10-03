
$(function() {

    //define template

	var tmpl = _.template($('#images').html());

    //to the search button hang event handler

    $('.form_button_search').click(function(e) {

        //take the value of the search string

    	var myRequest = $('.form_search_input').val();

        //send the request and the received data insert into the template

        $.ajax({

            url: 'https://pixabay.com/api/?key=3421288-570d399c428382f1ea4de29f0&q=' + myRequest,

            dataType: 'jsonp',

            success: function(data) {

                var result = tmpl(data);

                $('.result_wrapper').html(result);

            }

        });

        //to prevent the page reload

        e.preventDefault();

    });


});