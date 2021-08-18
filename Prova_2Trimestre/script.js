let characterName = document.getElementById("nome");
let characterClass = document.getElementById("classe");
let characterBreed = document.querySelector('input[name="raca"]:checked');

let score = document.getElementById("pt");

var forca = document.getElementById("forca");
var destreza = document.getElementById("destreza");
var inteligencia = document.getElementById("inteligencia");
var carisma = document.getElementById("carisma");
var sabedoria = document.getElementById("sabedoria");

var resultName = document.getElementById("nomeResult");
var resultClass = document.getElementById("classResult");
var resultBreed = document.getElementById("racaResult");
var resultForca = document.getElementById("forcaResult");
var resultDestreza = document.getElementById("destrezaResult");
var resultInteligencia = document.getElementById("inteligenciaResult");
var resultCarisma = document.getElementById("carismaResult");
var resultSabedoria = document.getElementById("sabedoriaResult");

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
