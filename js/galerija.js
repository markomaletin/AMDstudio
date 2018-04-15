
var trenutna_slika=null;
var sve_slike= document.getElementsByClassName("slika");
var slika=document.getElementById("full_slika");


function ugasi() {
    var obj=document.getElementById("full");
    obj.style.display="none";
}



function prikazi(slika_za_prikaz) {

    if (screen.availWidth>600) {
        var obj = document.getElementById("full");

        slika.src = slika_za_prikaz.src;
        obj.style.display = "block";
        trenutna_slika = slika_za_prikaz;
    }
}

function sledeca_slika() {
    for (var i=0; i< sve_slike.length; i++)
    {

        if(sve_slike[i]===trenutna_slika && i+1!==sve_slike.length)
        {

            console.log(i);
            trenutna_slika=sve_slike[i+1];
            slika.src = trenutna_slika.src;
            break;

        }
    }

}

function prethodna_slika() {
    for (var i=0; i< sve_slike.length; i++)
    {
        if(sve_slike[i]===trenutna_slika  && i!==0)
        {
            console.log(i);
            trenutna_slika=sve_slike[i-1];
            slika.src = trenutna_slika.src;
            break;
        }
    }
}
