$('#buttonCurso').click(() => {
    $.ajax({
        url: './curso.txt',
        type: 'GET',
        dataType: 'text',
        async: true,
        success: (data) => {
            
            $('#labelCurso').html(' | ' + data);
        }
    })
})