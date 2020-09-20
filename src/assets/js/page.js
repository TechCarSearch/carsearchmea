var menuRight = document.getElementById('cbp-spmenu-s2'),
    body = document.body;
showRight.onclick = function() {
    $('.nbg').fadeIn();
    classie.toggle(this, 'active');
    classie.toggle(menuRight, 'cbp-spmenu-open');
    //disableOther( 'showRight' );


};
showclose.onclick = function() {
    $('.nbg').fadeOut();
    classie.toggle(this, 'active');
    classie.toggle(menuRight, 'cbp-spmenu-open');
    //disableOther( 'showRight' );


};
nbg.onclick = function() {
    $('.nbg').fadeOut();
    classie.toggle(this, 'active');
    classie.toggle(menuRight, 'cbp-spmenu-open');
    //disableOther( 'showRight' );


};


$('#area').keyup(function(){
    $('.word-counter').text(this.value.length+'/1000');
})

$('#area2').keyup(function(){
$('.word-counter.w2').text(this.value.length+'/1000');
})

function showDiv() {
   document.getElementById('popup1').style.display = "block";
}
function showDiv2() {
   document.getElementById('popup1').style.display = "block";
}
function closDiv() {
document.getElementById('popup1').style.display = "none";
}