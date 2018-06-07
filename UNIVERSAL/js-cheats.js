//-------------------------------//
MEET THE STAFF COMPONENT ON HOME PAGE QUICKIE LANG
//-------------------------------//

//-----------START---------------//


// COPY ME TO CUSTOM.JS in PORTAL
          
$('.staff_home__container ul.staff__list li.staff__item').each(function(){
    test = $(this).find('.staff-member__description p').first().html().slice(0,300);
    staffname = $(this).find('.staff-member__name').text().replace(/ /g,"").slice(-5,-2);
    console.log('#' + staffname);
    console.log(test + '...');
    test2 = test + '...';
    $(this).find('.staff-member__description').html(test2);
//STEP 1 > update link below
    $(this).find('.staff-member__description').append('&nbsp;<a class="team_linkstyle" href="https://my.vetmatrix.com/1234567/MEET-THE-STAFF-LINK.html#' + staffname + '">Read More</a>');
});
//STEP 1.2 > update component name
$('.staff_YOURCOMPONENTNAME__container ul#staff__list li.staff__item').each(function(){
staffname = $(this).find('.staff-member__name').text().replace(/ /g,"").slice(-5,-2);
console.log('#' + staffname);
$(this).find('.staff-member').attr('id',staffname);
$('footer').append('<a id="' + staffname + '" href="#' + staffname + '"></a>');
});

setTimeout(function(){
	var linklocation = window.location.href.slice(-4);
	console.log(linklocation);
	linklink = 'a' + linklocation;
	$(linklink)[0].click();
},500);
          


//HOW TO INSTALL?


// NOTE for STEP 1 > Please dont delete the (#) Pound sign just simply copy paste your link before the pound sign

// STEP 1: Add the Link of Meet the staff to the script in this case > https://my.vetmatrix.com/1234567/MEET-THE-STAFF-LINK.html

// STEP 2: Add and Make sure to copy the DATA COMPONENT NAME for it is important in the script. in this case the component name is > YOURCOMPONENTNAME add this to the script .staff_YOURCOMPONENTNAME__container

// STEP 3: start adding the Doctors and staff under the MEET THE STAFF COMPONENT

// STEP 4: after aadding those doctors go to home page. and to the default home staff component and turn off all the default doctors and staff

// STEP 5: SCROLL DOWN and Simply turn on those doctors you see below. NOTE: Make sure to put it in the right order as how you put it on the meet the staff page. Recommendation: start it from the bottom then go up. :bungasm: :)

// credits to Sir Harold 






//------------END----------------// --------------- >> second commit to universal MEET THE STAFF COMPONENT ON HOME PAGE QUICKIE LANG Franclin James Lim - 2018-march-20





//-------------------------------//
VIDEOS THAT WONT AUTOPLAY OVERRIDE SCRIPT
//-------------------------------//

//-----------START---------------//
          
setInterval(function(){
    $('.covervid-video').get(0).play();
},500);

          //   (.covervid-video <-- is the class for the video.) 
          //     Just add your class here.

//------------END----------------// --------------- >> second commit to universal js-cheats VIDEOS THAT WONT AUTOPLAY OVERRIDE SCRIPT Franclin James Lim - 2018-march-21











//-------------------------------//
           Modal
//-------------------------------//

//-----------START---------------//
          
//       
$(document).ready(function() {
    if(localStorage.getItem('popState') == 'shown'){
        $("#popup").delay(2000).fadeIn();
        localStorage.setItem('popState','shown')
    }

    $('#popup-close').click(function(e) // You are clicking the close button
    {
    $('#popup').fadeOut(); // Now the pop up is hidden.
    });
    $('#popup').click(function(e) 
    {
    $('#popup').fadeOut(); 
    });
});

//------------END----------------//

















//-------------------------------//
           NAVBAR FIX
//-------------------------------//

//-----------START---------------//

NAVBAR FIX

.wrap__navigation .wrap--inner {
    max-width: 1000px;
}
setInterval(function(){
$('.wrap__navigation .wrap--inner').attr('style','max-width: 1240px;');
},2000);

//------------END----------------//










//-------------------------------//
    WHITE BACKGROUND ON LOGO
//-------------------------------//

//-----------START---------------//
          //add this to custom.js
    var x = 0;
    setInterval(function(){
        if (x === 0){
            $('.undrlogobg').appendTo('.wrap__logoHeader .logo');//this will append the div below the logo
        x++;
        }
        else{
            return;
        }
    },500);


/*

//========ADD THIS TO CUSTOM CSS============
.undrlogobg{
    width: 431px;
    height: 135px;
    position: absolute;
    padding: 25px;
    background-color: #ffffff9e;
    border-radius: 10px!important;
    z-index: -1;
    top:0px;
}
.wrap__rotate-container--bottom.fixed .undrlogobg{
    display:none;
}




//add this to the header partials under custom-header

<div class="undrlogobg"></div>



*/

//------------END----------------//

























//-------------------------------//
           Description
//-------------------------------//

//-----------START---------------//
          
//       Place your script here

//------------END----------------//