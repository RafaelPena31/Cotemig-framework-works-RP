/**
 * Método responsável por escutar o evento de keypress e, a cada evento disparado, ativar a animação de "shake" na label do respectivo [input] da seguinte maneira:
 * Adicionamos a classe CSS responsável por configurar a animação
 * Após 200ms removemos a classe sendo o valor (200) o tempo da animação no componente
 */
$("#nameInput").keypress((e) => {
  $("#labelNameInput").addClass("shake-animate");
  setTimeout(() => $("#labelNameInput").removeClass("shake-animate"), 200);
});

/**
 * Método responsável por escutar o evento de keypress e, a cada evento disparado, ativar a animação de "shake" na label do respectivo [input] da seguinte maneira:
 * Adicionamos a classe CSS responsável por configurar a animação
 * Após 200ms removemos a classe sendo o valor (200) o tempo da animação no componente
 */
$("#contentInput").keypress((e) => {
  $("#labelContentInput").addClass("shake-animate");
  setTimeout(() => $("#labelContentInput").removeClass("shake-animate"), 200);
});

/**
 * Método responsável por escutar o evento de keypress e, a cada evento disparado, ativar a animação de "shake" na label do respectivo [input] da seguinte maneira:
 * Adicionamos a classe CSS responsável por configurar a animação
 * Após 200ms removemos a classe sendo o valor (200) o tempo da animação no componente
 */
$("#dateInput").change((e) => {
  $("#labelDateInput").addClass("shake-animate");
  setTimeout(() => $("#labelDateInput").removeClass("shake-animate"), 200);
});
