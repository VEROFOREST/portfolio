
// anime les liens de la barre de navigation du footer 
$(function(){

    $(".navbar a, footer #top").on("click", function(event){
    
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate({scrollTop: $(hash).offset().top} , 2000 , function(){window.location.hash = hash;})
        
    });

})
 $(function(){
    $('#phone').click(function(){
       $('#number-phone').toggle() // AFFICHE ET CACHE A CHAQUE CLIQUE SUR LE BOUTTON MON NUMERO
    });
 });


$(function(){
    $('#discord').click(function(){
       $('#discord-name').toggle() // AFFICHE ET CACHE A CHAQUE CLIQUE SUR LE BOUTTON MON DISCORD
    });
 });

document.querySelector(".card-flip").classList.toggle("flip");

/* 
 * Holder.js for demo image
 * Just for demo purpose
 */
// Holder.addTheme('gray', {
//   bg: '#777',
//   fg: 'rgba(255,255,255,.75)',
//   font: 'Helvetica',
//   fontweight: 'normal'

// }