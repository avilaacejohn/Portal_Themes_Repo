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
          Descrption here
//-------------------------------//

//-----------START---------------//
          
       //your script here
          
//------------END----------------//