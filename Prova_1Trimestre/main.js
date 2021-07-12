/**
 * Variável de controle - nameValue {string}: responsável por armazenar o valor do [input (type="text")] do nome do cliente
 */
var nameValue = "";

/**
 *Função responsável por alterar o valor da variável de controle {nameValue}
 * @Returns {void}
 * @param value {string} - Valor a ser atribuído na variável {nameValue}
 */
const setNameValue = (value) => {
  nameValue = value;
};

/**
 * Variável de controle - contentValue {string}: responsável por armazenar o valor do [textarea] do conteúdo da entrega do cliente
 */
var contentValue = "";

/**
 *Função responsável por alterar o valor da variável de controle {contentValue}
 * @Returns {void}
 * @param value {string} - Valor a ser atribuído na variável {contentValue}
 */
const setContentValue = (value) => {
  contentValue = value;
};

/**
 * Variável de controle - dateValue {string}: responsável por armazenar o valor do [input (type="date")] do prazo da entrega do cliente
 */
var dateValue = "";

/**
 *Função responsável por alterar o valor da variável de controle {dateValue}
 * @Returns {void}
 * @param value {string} - Valor a ser atribuído na variável {dateValue}
 */
const setDateValue = (value) => {
  dateValue = value;
};

/**
 * Função responsável por criar o componente que será adicionado na lista e o adiciona-lo com o método .append do JQuery
 * @Returns {void}
 * @param valueToAdd {string} - Valor do item já formatado para adicionar a lista
 */
function ListItemComponent(valueToAdd) {
  $("#list").append(`
     <a href="#" class="list-group-item list-group-item-action">
       ${valueToAdd}
     </a>
   `);
}

/**
 * Método responsável por alterar o valor da variável global de controle <nameValue> para o valor que o usuário digitar a cada alteração do valor do input
 */
$("#nameInput").change(({ target }) => {
  setNameValue(target.value);
});

/**
 * Método responsável por alterar o valor da variável global de controle <contentValue> para o valor que o usuário digitar a cada alteração do valor do input
 */
$("#contentInput").change(({ target }) => {
  setContentValue(target.value);
});

/**
 * Método responsável por alterar o valor da variável global de controle <dateValue> para o valor que o usuário digitar a cada alteração do valor do input
 */
$("#dateInput").change(({ target }) => {
  /**
   * O valor é atribuído da seguinte maneira:
   * Criamos uma nova data com o valor retornado do [input (type="date")] e então utilizamos o método .toLocaleDateString para formata-lo de acordo com a localidade e transforma-lo em uma string
   */
  setDateValue(new Date(`${target.value}:00:00:00`).toLocaleDateString());
});

/**
 * Método responsável por escutar o evento de submit do formulário e a cada evento disparado, validar o valor dos inputs e caso a validação passe, formatar o valor que deve ser mostrado no item da lista e chamar a função responsável por montar o componente e então zerar os valores das variáveis globais de controle e dos inputs de dados.
 */
$("#list-form").submit((e) => {
  e.preventDefault();
  if (nameValue.length > 0 && contentValue.length > 0 && dateValue.length > 0) {
    const valueToAdd = `<strong>Nome:</strong> ${nameValue} | <strong>Conteúdo da entrega:</strong> ${contentValue} | <strong>Prazo de entrega:</strong> ${dateValue}`;
    ListItemComponent(valueToAdd);

    nameValue = "";
    contentValue = "";
    dateValue = "";

    $("#nameInput").val("");
    $("#contentInput").val("");
    $("#dateInput").val("");
  }
});
