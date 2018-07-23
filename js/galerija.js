$(document).ready(function () {
    var trenutna_slika=null;
    var sve_slike= $(".slika");
    var slika= $("#full_slika");
    var postolje= $("#full");

    function ugasi() {
        postolje.css("display","none")
    }

    $("#close").click(function () {
        postolje.css("display","none")
    });

    sve_slike.click(function () {
        if (screen.availWidth>600) {



            slika.attr("src",$(this).attr("src"));
            postolje.css("display","block");
            trenutna_slika = $(this);
            $("#napred, #nazad").css("top", parseInt((postolje.css("height")).substr(0,(postolje.css("height")).length - 2))/2-50 +"px");
            slika.css("margin-left", (parseInt((postolje.css("width")).substr(0,(postolje.css("width")).length - 2)) - parseInt((slika.css("width")).substr(0,(slika.css("width")).length - 2)))/2 +"px" );

        }
    });

    $("#napred").click(function () {

        for (var i=0; i< sve_slike.length; i++)
        {
            if( sve_slike.eq(i).attr("src") === trenutna_slika.attr("src") && i+1!==sve_slike.length)
            {
                console.log(postolje.css("height"));
                trenutna_slika = sve_slike.eq(i+1);
                slika.attr("src", trenutna_slika.attr("src"));
                slika.css("margin-left", (parseInt((postolje.css("width")).substr(0,(postolje.css("width")).length - 2)) - parseInt((slika.css("width")).substr(0,(slika.css("width")).length - 2)))/2 +"px" );
                $("#napred, #nazad").css("top", parseInt((postolje.css("height")).substr(0,(postolje.css("height")).length - 2))/2-50 +"px");
                break;

            }

        }

    });

    $("#nazad").click(function () {

        for (var i=0; i< sve_slike.length; i++)
        {
            if(sve_slike.eq(i).attr("src") === trenutna_slika.attr("src") && i!==0)
            {
                trenutna_slika = sve_slike.eq(i-1);
                slika.attr("src", trenutna_slika.attr("src"));
                slika.css("margin-left", (parseInt((postolje.css("width")).substr(0,(postolje.css("width")).length - 2)) - parseInt((slika.css("width")).substr(0,(slika.css("width")).length - 2)))/2 +"px" );
                $("#napred, #nazad").css("top", parseInt((postolje.css("height")).substr(0,(postolje.css("height")).length - 2))/2-50 +"px");
                break;
            }
        }

    });

});

