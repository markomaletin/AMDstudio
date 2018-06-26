
var zaglavlje =  document.getElementsByTagName('header')[0];
var logo =  document.getElementById("logo");
var navigacija = document.getElementById("navigacija");
var meni= document.getElementById("meni_dugme");



addEventListener('load',function () { window.scrollTo(0,0) });

addEventListener("scroll", function () {

    if (window.scrollY > 10)
    {
        zaglavlje.style.transitionDuration = '500ms';
        zaglavlje.style.height = '70px';
        zaglavlje.style.backgroundSize = "100px";
        logo.style.transitionDuration = '500ms';
        logo.style.height='70px';
        navigacija.style.transitionDuration = '500ms';
        navigacija.style.top=' 10px';


    }
    else
    {
        zaglavlje.style.transitionDuration = '500ms';
        zaglavlje.style.height = '120px';
        zaglavlje.style.backgroundSize = "150px";
        logo.style.transitionDuration = '500ms';
        logo.style.height='120px';
        navigacija.style.transitionDuration = '500ms';
        navigacija.style.top='35px';
    }

    if(meni.style.display==='block')
    {
        meni.style.transitionDuration='500ms';
        meni.style.display='none';
    }

});

addEventListener('load', function () {

    document.getElementById("meni_dugme").style.display='none';

});

addEventListener('click', function(e){
    if (!meni.contains(e.target))
    {

        if( e.target.id ==="otvori_meni_dugme")
        {

            if(meni.style.display==='none')
            {
                meni.style.transitionDuration='500ms';
                meni.style.display='block';
            }
            else
            {
                meni.style.transitionDuration='500ms';
                meni.style.display='none';
            }
        }
        else
            meni.style.display='none';

    }
});


