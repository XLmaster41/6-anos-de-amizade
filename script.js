function tocarMusica() {
    const audio = document.getElementById('musica');
    const inicio = document.getElementById('inicio');
    const conteudo = document.getElementById('conteudo');
    const contents = document.querySelectorAll('.content');

    audio.play();
    inicio.style.display = 'none';           // esconde o botão
    conteudo.style.display = 'flex';         // mostra o conteúdo
    conteudo.style.flexDirection = 'column'; // garante empilhamento

    contents.forEach((div, index) => {
        setTimeout(() => {
            div.classList.add('show');
        }, index * 1616);
    });
}
function ajustarEscala() {
    const conteudo = document.getElementById('conteudo');
    const escalaX = window.innerWidth / 360;
    const escalaY = window.innerHeight / 800;
    const escala = Math.min(escalaX, escalaY); // garante que não ultrapasse a tela
    conteudo.style.transform = `scale(${escala})`;
}

window.addEventListener('resize', ajustarEscala);
window.addEventListener('load', ajustarEscala);

function criarCora() {
    const coracao = document.createElement('div');
    coracao.classList.add('cora');
    coracao.innerText = '❤️';

    const tamanho = Math.random() * 20 + 10; // 10px a 30px
    const left = Math.random() * window.innerWidth;
    const duracao = Math.random() * 3 + 2; // 2s a 5s

    coracao.style.left = `${left}px`;
    coracao.style.fontSize = `${tamanho}px`;
    coracao.style.animationDuration = `${duracao}s`;

    document.getElementById('chuva-coracoes').appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, duracao * 1000);
}


// Controle do coração central
function mostrarCoracao() {
    document.getElementById('coracao').classList.add('ativo');
}
function ocultarCoracao() {
    document.getElementById('coracao').classList.remove('ativo');
}

// Controle da chuva de corações
let chuvaIntervalo;

function iniciarChuva() {
    if (chuvaIntervalo) return;
    chuvaIntervalo = setInterval(criarCora, 45);  // começa a gerar corações em intervalos
}
function pararChuva() {
    clearInterval(chuvaIntervalo);
    chuvaIntervalo = null;
}

// Função automática com tempos definidos
window.addEventListener('load', () => {
    // Coração
    setTimeout(mostrarCoracao, 2000);
    setTimeout(ocultarCoracao, 40000);

    // Chuva de corações
    setTimeout(iniciarChuva, 40500);
    setTimeout(pararChuva, 60000);
    setTimeout(iniciarChuva, 75000);
    setTimeout(pararChuva, 95000);
    // Textos
    setTimeout(() => mostrarTexto('texto1'), 2500);
    setTimeout(() => ocultarTexto('texto1'), 8000);

    setTimeout(() => mostrarTexto('texto2'), 10000);
    setTimeout(() => ocultarTexto('texto2'), 16000);

    setTimeout(() => mostrarTexto('texto3'), 18000);
    setTimeout(() => ocultarTexto('texto3'), 22000);

    setTimeout(() => mostrarTexto('texto4'), 24000);
    setTimeout(() => ocultarTexto('texto4'), 30000);

    setTimeout(() => mostrarTexto('texto5'), 32000);
    setTimeout(() => ocultarTexto('texto5'), 38000);

    setTimeout(() => mostrarTexto('texto6'), 40000);
    setTimeout(() => ocultarTexto('texto6'), 60000);
});

function mostrarTexto(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add("ativo");
}

function ocultarTexto(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove("ativo");
}
