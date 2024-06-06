$(document).ready(function(){
    $('#task-form').submit(function(event){
        event.preventDefault(); // Evita o comportamento padrão do formulário de recarregar a página

        var taskName = $('#task-input').val(); // Obtém o valor do campo de entrada

        if(taskName.trim() !== ''){ // Verifica se o campo não está vazio
            var listItem = $('<li></li>').text(taskName); // Cria um novo elemento <li> com o nome da tarefa
            $('#task-list').append(listItem); // Adiciona o elemento à lista de tarefas

            // Limpa o campo de entrada após adicionar a tarefa
            $('#task-input').val('');
        }
    });

    // Adiciona um evento de clique para marcar/desmarcar tarefas como completas
    $(document).on('click', 'li', function(){
        $(this).toggleClass('completed'); // Adiciona ou remove a classe 'completed' ao item clicado
    });
});