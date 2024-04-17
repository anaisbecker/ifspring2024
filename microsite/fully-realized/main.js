const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');

window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })

    navLi.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)) {
            li.classList.add('active')
        }
    })
})


function scrollInto(id) {
    var elmnt = document.getElementById(id);
    elmnt.scrollIntoView({
        behavior: "smooth", 
        block: "start",
        inline: "nearest"
    });
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
    content.style.display = "none";
    } else {
    content.style.display = "block";
    }
});
}

if($("nav .container ul li a").text() == "intro")
{
    $("#intro p .appear").css("font-weight","700");
}
else if($("nav .container ul li a").text() == "life")
{
    $("#life p .appear").css("font-weight","700");
}
else if($("nav .container ul li a").text() == "publications")
{
    $("#publications p .appear").css("font-weight","700");
}
else if($("nav .container ul li a").text() == "views")
{
    $("#views p .appear").css("font-weight","700");
}


jQuery( document ).ready(function( $ ) {
 
	if ( jQuery( '.accordion' )[0] ){
 
		jQuery( '.accordion' ).find( '.item' ).click( function( e ){ //Click function to toggle extending lists
 
			e.preventDefault();		
 
			jQuery( this ).next().slideToggle( 'fast' ).css( 'zoom', '1' ); //Find the next element after the clicked element	
                        jQuery(".accordion > li > div").not($(this).next()).slideUp( 'fast' ).css( 'zoom', '1' );
			jQuery( this ).parent( 'li' ).toggleClass( 'collapse' ); //Add a class for styling
 
		} );
 
		jQuery( '.accordion > li' ).each( function( $ ){ //Function initially hide lists with the override class of "extended"
 
			if ( !jQuery( this ).hasClass( 'extended' ) ){
 
				jQuery( this ).find( 'div' ).slideUp( 'fast' ).css( 'zoom', '1' ); //hide all lists without a parent of "extended"
				jQuery( this ).toggleClass( 'collapse' ); //Add a class for styling
 
			}
 
		} );
 
 
	}
 
} );