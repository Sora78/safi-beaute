
function adjustSidebar() {
    if($(window).width() < 801)
    {
        $('.sidebar').addClass('sidebarHide');
        $( ".sidebarBTN" ).text('►');
        $( ".sidebarBTN" ).css('right', '-50px');
    } else if($(window).width() > 800)
    {
        $('.sidebar').removeClass('sidebarHide');
        $( ".sidebarBTN" ).text('◄');
        $( ".sidebarBTN" ).css('right', '-3%');
    } 
}


$(document).ready(function(){
    // Appel initial
    adjustSidebar();

    // Appel lors du redimensionnement de la fenêtre
    $(window).resize(function() {
        adjustSidebar();
    });
});

$( ".sidebarBTN" ).on( "click", function() {
    
    $('.sidebar').toggleClass('sidebarHide')

    if ($(".sidebar").hasClass('sidebarHide') == true){
        $( ".sidebarBTN" ).text('►');
        $( ".sidebarBTN" ).css('right', '-50px');
    }
    else if ($(".sidebar").hasClass('sidebarHide') == false){
        $( ".sidebarBTN" ).text('◄');
        $( ".sidebarBTN" ).css('right', '-3%');
    }
});



// if($(window).height() < 500)
// {
//     $('.sidebar').toggleClass('sidebarHide');
//     $( ".sidebarBTN" ).text('►');
//     $( ".sidebarBTN" ).css('right', '-50px');
//     $( ".sidebar" ).css('position', 'fixed');
// } 


//////////   TOGGLE DARK MODE - START   //////////

    var DarkModeCookie = getCookie("DarkModeStatut");

    var body = document.getElementsByTagName('body')[0];
    var dark_theme_class = 'dark-theme';
    var theme = '';
    theme = getCookie('themesafi');

    if(theme != '') {
        body.classList.add(theme);
    }

    var biancaCheck = document.getElementById("darkToggle").style;
    var grisCheck = document.getElementById("lightToggle").style;

    if(theme == "dark-theme" ){
        var elementA = document.body;
        elementA.classList.toggle("dark-mode");

        $("#boxDarkMode").css("background-color", "#eaeaea"); 

        $('#darkToggle').css('display', 'block');
    
        $('#lightToggle').css('display', 'none');

        if(biancaCheck.display == "none" ){        
            var grisTranslate = document.getElementById("darkToggle");
            var boxDarkMode = document.getElementById("boxDarkMode");     

            biancaTranslate.classList.toggle("translateEmojiDark");  
        
            grisCheck.classList.toggle("translateEmojiDark");
        }
        else if (biancaCheck.display == "block"){
    
            $('.emojiToggle').css('transform', 'translate(30px, 0px)');
        }
    }
    else if(theme == "light"){
        $('#lightToggle').css('display', 'block');
        $('#darkToggle').css('display', 'none'); 

        $("#boxDarkMode").css("background-color", "#454545"); 


        if(grisCheck.display == "none" ){        
            var biancaTranslate = document.getElementById("lightToggle");
            var boxDarkMode = document.getElementById("boxDarkMode"); 
            biancaTranslate.classList.toggle("translateEmojiLight");  
        }
        else if (grisCheck.display == "block"){
            $('.emojiToggle').css('transform', 'translate(1px, 0px)');
        }    
    }

    document.addEventListener('DOMContentLoaded', function () {


        $('#boxDarkMode').on('click', function () {

            if (body.classList.contains(dark_theme_class)) {

                body.classList.remove(dark_theme_class);
                $('#mode').text('Light Mode')
                setCookie('themesafi', 'light');

            }
            else {

                $('#mode').text('Dark Mode')
                body.classList.add(dark_theme_class);
                setCookie('themesafi', 'dark-theme');

            }

        });

    });

    function setCookie(name, value) {

        var d = new Date();
        d.setTime(d.getTime() + (365*24*60*60*1000));
        var expires = "expires=" + d.toUTCString();
        console.log(expires)
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
        console.log(document.cookie)

    }

    function getCookie(cname) {

        var theme = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');

        for(var i = 0; i < ca.length; i++) {
            
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            
            if (c.indexOf(theme) == 0) {
                return c.substring(theme.length, c.length);
            }
        }
        return "";
    }
      
    function darkModeClick() {
        
        
        var theme = getCookie('themesafi');
        
        var elementA = document.body;
        elementA.classList.toggle("dark-mode");   // Le fond du body qui change de couleur.
        
        var elementB = document.getElementById("darkToggle");           
        elementB.classList.toggle("translateEmojiDark");           // Ici le translate opère.

        var elementB = document.getElementById("lightToggle");
        elementB.classList.toggle("translateEmojiDark");           // Ici le translate opère.
        
        if(theme == "dark-theme"){
            $("#boxDarkMode").css("background-color", "#454545");
            $('.emojiToggle').css('transform', 'translate(0px, 0px)');

        }
        else if(theme == "light"){
            $("#boxDarkMode").css("background-color", "#dddddd");
            $('.emojiToggle').css('transform', 'translate(28px, 0px)');
            
        }
        else{
            // $("#boxDarkMode").css("background-color", "#dddddd");
            
        }

        (setTimeout( function(){
            $('img',"#boxDarkMode").toggle();      //  Toggle for switching gris and bianca on click.

        }, 180)) 

    } 


//////////   TOGGLE DARK MODE - END   //////////




// Récupérer toutes les images et la modale
var images = document.querySelectorAll('.photo');
var modal = document.getElementById('modal');
var modalImg = document.getElementById('modal-image');
var close = document.getElementsByClassName("close")[0];

// Boucle pour chaque image
images.forEach(img => {
  img.onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
});

// Cliquez sur le bouton de fermeture pour fermer la modale
modal.onclick = function() { 
  modal.style.display = "none";
}
