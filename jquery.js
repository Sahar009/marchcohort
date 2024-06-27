// $(selector).action()

// $(document).ready(function(){

// })
// javascript
// var toggleMode = document.getElementById('toggle-mode')
// toggleMode.addEventListener('click',function(){

// })

$(document).ready(function(){
    $('body').addClass('light-mode')
  $('#toggle-mode').click(function(){
    $('body').toggleClass('dark-mode light-mode')
})  
})

// $('body').removeClass('joseph')

// $('#joseph').click(function(){
//     $('body').toggleClass('joseph')
// })



// $('#toggle-mode').click(function(){
//     $('body').addClass('dark-mode light-mode')
// })
