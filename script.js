// Selecionando elementos que serão manipulados
let digitalElement = document.querySelector(".digital");
let hElement = document.querySelector(".p_h");
let mElement = document.querySelector(".p_m");
let sElement = document.querySelector(".p_s");

// Função que atualiza o relogio
function updateClock() {
  // Função que controla datas
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Inserindo a hora no relogio digital
  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minutes)}:${fixZero(seconds)}`;

  // Inserindo a hora no relogio analogico calculando quantos graus o ponteiro ira se mover de acordo com o tempo
  let hDeg = (360 / 12) * hour - 90;
  let mDeg = (360 / 60) * minutes - 90;
  let sDeg = (360 / 60) * seconds - 90;

  // Inserindo as propriedades dentro do ponteiro
  hElement.style.transform = `rotate(${hDeg}deg)`;
  mElement.style.transform = `rotate(${mDeg}deg)`;
  sElement.style.transform = `rotate(${sDeg}deg)`;
}

// Função para formatar o relogio digital (10:5:5 fica 10:05:05)
function fixZero(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000); // Chama a função que atualiza o relogio a cada 1s
updateClock();
