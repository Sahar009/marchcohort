$(document).ready(function(){
$('#add-task').click(function(){
    const taskText = $('#new-task').val()
    // console.log(taskText);
    // validate input value
    if(taskText !== ""){
        $('#task-list').append(`<li>${taskText} <div><button class="Remove-btn">Remove</button></div></li>`)
        $('#new-task').val('')
    }
    else{
        alert('field cannot be empty')
    }
})

$("#task-list").on('click','.Remove-btn',function(e){
    $(this).closest('li').remove();
    // console.log('bttn');
})

})

