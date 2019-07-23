/*
Q1:
Check if jQuery is loaded
*/
$(document).ready(function () {


    $('#q1').html("jquery is realoded ")
});

/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/

$()
$(document).ready(function () {

    $('.go_to_down').on('click', function () {

        $('body, html').animate({
            scrollTop: $(".go_to_top").offset().top

        }, 300)

    });


    $('.go_to_top').on('click', function () {

        $('body, html').animate({
            scrollTop: $(".go_to_down").offset().top

        }, 300)

    });

});

/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/
$(document).ready(function () {
    $('#btn1').click(function () {
        $('#box').animate({
            width: +500,
            height: +200

        });
    });

    $('#btn2').click(function () {
        $('#box').animate({
            width: 150,
            height: 150
        });
    });

});

/*
Q4:
Learn how to fadein your boxes
*/
$(document).ready(function () {
    $('#display_boxes').click(function () {
        $('#div1').fadeIn(1000)
        $('#div2').fadeIn(2000)
        $('#div3').fadeIn(3000)
    });



});

/*
Q5:
User must first accept then he or she can signup
*/
$(document).ready(function () {

    $('#accept').change(function () {

        if ($('#accept').prop("checked")) {
            $('#submitbtn').removeAttr("disabled")
        } else {
            $('#submitbtn').attr("disabled", "disabled")

        }

    })

});

/*
Q6:
Let them print
*/
$(document).ready(function () {

    $('.printPage').click(function () {

        window.print()

    })


});

/*
Q7:
Can username be too long? Yest it can - lets limit that
*/
$(document).ready(function () {
    $("#textarea").attr('maxlength', '6');

});



/*
Q8:
Wanna make some words bolder, do it with jQuery
*/
$(document).ready(function () {

    $('.boldjq').css("font-weight", "bold");



});

/*
Q9:
Add new div to your website
*/
$(document).ready(function () {

    $('.append_div').click(function () {

        $('.append_here').append('<div> this is div from jquery </div>')

    });

});

/*
Q10:
Select values from a JSON object using jQuery
*/


/*
Q11:
Add element within ul list
*/
$(document).ready(function () {

    $('#btnclick').click(function () {

        $('#header ul').append("<li>" + $('#li_ppend_form').val() + "</li>")

    });

});

/*
Q12:
Know what user puts into textbox
*/

$(document).ready(function () {
    $("#usertext").keyup(function () {

        $(".live_write").text($("#usertext").val());

    });

});

/*
Q13:
Change input value
*/
$(document).ready(function () {

$('#button').attr('value', "trump is stubed")

});



// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 