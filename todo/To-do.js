$(document).ready(function(){
$('#add-task').click(function(){
    const taskText = $('#new-task').val()
    // console.log(taskText);
    // validate input value
    if(taskText !== ""){
        $('#task-list').append(`<li>${taskText} <button class="Remove-btn">Remove</button></li>`)
        $('#new-task').val('')
    }
    else{
        alert('field cannot be empty')
    }
})




})