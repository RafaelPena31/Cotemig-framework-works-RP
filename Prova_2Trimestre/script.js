/* PROPRIEDADES */

/**
 * @file Manipulador das propriedades do personagem
 * @author Rafael Augusto Pena Pereira Mesquita
 */

/**
 * @description Variável de controle: characterName {HTMLElement}: responsável por armazenar o [input (type="text")] do nome do personagem
 */
let characterName = document.getElementById("nome");

/**
 * @description Variável de controle: characterClass {HTMLElement}: responsável por armazenar o [input (type="text")] da classe do personagem
 */
let characterClass = document.getElementById("classe");

/**
 * @description Variável de controle: characterBreed {HTMLElement}: responsável por armazenar o [input (type="text")] da raça do personagem
 */
let characterBreed = document.querySelector('input[name="raca"]:checked');

/**
 * @description Variável de controle: score {HTMLElement}: responsável por armazenar o [input (type="text")] da pontuação dos atributos do personagem
 */
let score = document.getElementById("pt");

/* ====================================================================== */

/* Variáveis dos inputs dos atributos */
var forca = document.getElementById("forca");
var destreza = document.getElementById("destreza");
var inteligencia = document.getElementById("inteligencia");
var carisma = document.getElementById("carisma");
var sabedoria = document.getElementById("sabedoria");

/* Variáveis dos inputs de resultado das propriedades do personagem */
var resultName = document.getElementById("nomeResult");
var resultClass = document.getElementById("classResult");
var resultBreed = document.getElementById("racaResult");
var resultForca = document.getElementById("forcaResult");
var resultDestreza = document.getElementById("destrezaResult");
var resultInteligencia = document.getElementById("inteligenciaResult");
var resultCarisma = document.getElementById("carismaResult");
var resultSabedoria = document.getElementById("sabedoriaResult");

/**
 * @description Função responsável por atribuir os valores dos inputs de entrada do personagem para os de saída
 * @returns {void}
 */
function saveCharacter() {
  resultName.value = characterName.value;
  resultClass.value = characterClass.value;
  resultBreed.value = characterBreed.value;
  resultForca.value = forca.value;
  resultDestreza.value = destreza.value;
  resultInteligencia.value = inteligencia.value;
  resultCarisma.value = carisma.value;
  resultSabedoria.value = sabedoria.value;
}

/**
 * @description Função responsável por atribuir valor a um atributo em específico e subtrair a pontuação de acordo com as regras de negócio estipulada
 *
 * @param attr {string} - Valor que representa qual o atributo a ser alterado
 * @returns {void}
 */
function adicionaAtributo(attr) {
  switch (attr) {
    case "forca":
      if (score.value > 0) {
        score.value = +score.value - 1;
        forca.value = +forca.value + 1;
      }
      break;

    case "destreza":
      if (score.value > 0) {
        score.value = +score.value - 1;
        destreza.value = +destreza.value + 1;
      }
      break;

    case "inteligencia":
      if (score.value > 0) {
        score.value = +score.value - 1;
        inteligencia.value = +inteligencia.value + 1;
      }
      break;

    case "carisma":
      if (score.value > 0) {
        score.value = +score.value - 1;
        carisma.value = +carisma.value + 1;
      }
      break;

    case "sabedoria":
      if (score.value > 0) {
        score.value = +score.value - 1;
        sabedoria.value = +sabedoria.value + 1;
      }
      break;

    default:
      break;
  }
}

/**
 * @description Função responsável por desatribuir valor a um atributo em específico e subtrair a pontuação de acordo com as regras de negócio estipulada
 *
 * @param attr {string} - Valor que representa qual o atributo a ser alterado
 * @returns {void}
 */
function removeAtributo(attr) {
  switch (attr) {
    case "forca":
      if (score.value >= 0 && forca.value > 0) {
        score.value = +score.value + 1;
        forca.value = +forca.value - 1;
      }
      break;

    case "destreza":
      if (score.value >= 0 && destreza.value > 0) {
        score.value = +score.value + 1;
        destreza.value = +destreza.value - 1;
      }
      break;

    case "inteligencia":
      if (score.value >= 0 && inteligencia.value > 0) {
        score.value = +score.value + 1;
        inteligencia.value = +inteligencia.value - 1;
      }
      break;

    case "carisma":
      if (score.value >= 0 && carisma.value > 0) {
        score.value = +score.value + 1;
        carisma.value = +carisma.value - 1;
      }
      break;

    case "sabedoria":
      if (score.value >= 0 && sabedoria.value > 0) {
        score.value = +score.value + 1;
        sabedoria.value = +sabedoria.value - 1;
      }
      break;

    default:
      break;
  }
}
