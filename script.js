// Criar corações subindo
function criarCoracao() {
    const heartsContainer = document.querySelector('.hearts-container');
    if (!heartsContainer) return;
    
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(criarCoracao, 300);

// Navegação entre páginas
function proximaPagina() {
    document.querySelector('.page-1').classList.remove('active');
    document.querySelector('.page-2').classList.add('active');
    setTimeout(iniciarFogosEstrelas, 100);
}

function proximaPagina2() {
    document.querySelector('.page-2').classList.remove('active');
    document.querySelector('.page-3').classList.add('active');
}

function proximaPagina3() {
    document.querySelector('.page-3').classList.remove('active');
    document.querySelector('.page-4').classList.add('active');
    setTimeout(iniciarCenaPiquenique, 100);
}

function proximaPagina4() {
    document.querySelector('.page-4').classList.remove('active');
    document.querySelector('.page-5').classList.add('active');
}

function verificarResposta() {
    const resposta = document.getElementById('resposta-feitico').value.trim().toLowerCase();
    const mensagemErro = document.getElementById('mensagem-erro');
    
    if (resposta === 'wingardium leviosa' || resposta === 'wingardiumleviosa') {
        mensagemErro.style.color = '#00ff88';
        mensagemErro.textContent = 'Correto! Avançando...';
        setTimeout(() => {
            document.querySelector('.page-5').classList.remove('active');
            document.querySelector('.page-6').classList.add('active');
        }, 1500);
    } else {
        mensagemErro.style.color = '#ff0066';
        mensagemErro.textContent = 'Resposta incorreta! Tente novamente.';
    }
}

function verificarRespostaGato() {
    const resposta = document.getElementById('resposta-gato').value.trim().toLowerCase();
    const mensagemErro = document.getElementById('mensagem-erro-gato');
    
    if ((resposta.includes('carinho') && resposta.includes('cabeça')) || 
        (resposta.includes('carinho') && resposta.includes('cabeca')) ||
        resposta === 'carinho na cabeça' || 
        resposta === 'carinho na cabeca') {
        mensagemErro.style.color = '#00ff88';
        mensagemErro.textContent = 'Miau! Correto! 🐱';
        setTimeout(() => {
            document.querySelector('.page-6').classList.remove('active');
            document.querySelector('.page-7').classList.add('active');
        }, 1500);
    } else {
        mensagemErro.style.color = '#ff0066';
        mensagemErro.textContent = 'Miau... Resposta incorreta! Tente novamente.';
    }
}

function responderSim() {
    document.querySelector('.page-8').classList.remove('active');
    document.querySelector('.page-9').classList.add('active');
    
    for (let i = 0; i < 50; i++) {
        setTimeout(criarCoracao, i * 50);
    }
}

// Botão "não" foge do mouse
function fugirBotao(btn) {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    btn.style.position = 'absolute';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

// Fogos de artifício e estrelas na página 2
let fogosInterval = null;

function iniciarFogosEstrelas() {
    const fogosContainer = document.querySelector('.fogos-container');
    const estrelasContainer = document.querySelector('.estrelas-fundo');
    
    if (!fogosContainer || !estrelasContainer) {
        console.log('Containers não encontrados');
        return;
    }
    
    fogosContainer.innerHTML = '';
    estrelasContainer.innerHTML = '';
    
    // Criar estrelas no fundo
    for (let i = 0; i < 150; i++) {
        const estrela = document.createElement('div');
        estrela.classList.add('estrela-fundo');
        estrela.innerHTML = '✦';
        estrela.style.left = Math.random() * 100 + '%';
        estrela.style.top = Math.random() * 100 + '%';
        estrela.style.animationDelay = Math.random() * 2 + 's';
        estrelasContainer.appendChild(estrela);
    }
    
    if (fogosInterval) clearInterval(fogosInterval);
    
    // Criar fogos de artifício
    fogosInterval = setInterval(() => {
        criarFogoArtificio(fogosContainer);
    }, 800);
}

function criarFogoArtificio(container) {
    const x = Math.random() * 100;
    const y = 20 + Math.random() * 30;
    const cores = ['#ff0066', '#ff6b9d', '#8b5cf6', '#ec4899', '#ffd700', '#00ff88'];
    const cor = cores[Math.floor(Math.random() * cores.length)];
    
    for (let i = 0; i < 30; i++) {
        const particula = document.createElement('div');
        particula.classList.add('particula-fogo');
        particula.style.left = x + '%';
        particula.style.top = y + '%';
        particula.style.background = cor;
        particula.style.boxShadow = `0 0 10px ${cor}`;
        
        const angulo = (Math.PI * 2 * i) / 30;
        const distancia = 50 + Math.random() * 100;
        const dx = Math.cos(angulo) * distancia;
        const dy = Math.sin(angulo) * distancia;
        
        particula.style.setProperty('--dx', dx + 'px');
        particula.style.setProperty('--dy', dy + 'px');
        
        container.appendChild(particula);
        
        setTimeout(() => {
            particula.remove();
        }, 1000);
    }
}

// Cena do piquenique com estrelas
let estrelasInterval = null;

function iniciarCenaPiquenique() {
    const estrelasContainer = document.querySelector('.estrelas-container');
    
    if (!estrelasContainer) return;
    
    estrelasContainer.innerHTML = '';
    
    for (let i = 0; i < 100; i++) {
        const estrela = document.createElement('div');
        estrela.classList.add('estrela');
        estrela.innerHTML = '✦';
        estrela.style.left = Math.random() * 100 + '%';
        estrela.style.top = Math.random() * 70 + '%';
        estrela.style.animationDelay = Math.random() * 2 + 's';
        estrelasContainer.appendChild(estrela);
    }
    
    if (estrelasInterval) clearInterval(estrelasInterval);
    
    estrelasInterval = setInterval(() => {
        const estrelaCadente = document.createElement('div');
        estrelaCadente.classList.add('estrela-cadente');
        estrelaCadente.style.left = Math.random() * 100 + '%';
        estrelaCadente.style.top = Math.random() * 30 + '%';
        estrelasContainer.appendChild(estrelaCadente);
        
        setTimeout(() => {
            estrelaCadente.remove();
        }, 3000);
    }, 2000);
}

// Desafio da Max (Stranger Things)
let tentativas = 0;
let maxInterval = null;

function iniciarDesafio() {
    document.querySelector('.page-7').classList.remove('active');
    document.querySelector('.page-7-desafio').classList.add('active');
    tentativas = 0;
    document.getElementById('tentativas').textContent = 'Tentativas: 0';
    moverMaxAleatoriamente();
}

function desistirDesafio() {
    alert('Ah não! Você desistiu do desafio! Tente novamente!');
}

function moverMaxAleatoriamente() {
    const maxImg = document.getElementById('max-fugindo');
    
    function moverMax() {
        const maxWidth = 150;
        const maxHeight = 150;
        const x = Math.random() * (window.innerWidth - maxWidth - 100) + 50;
        const y = Math.random() * (window.innerHeight - maxHeight - 200) + 100;
        
        maxImg.style.left = x + 'px';
        maxImg.style.top = y + 'px';
    }
    
    moverMax();
    maxInterval = setInterval(moverMax, 1000);
}

function maxCapturada() {
    tentativas++;
    document.getElementById('tentativas').textContent = 'Tentativas: ' + tentativas;
    
    if (tentativas >= 5) {
        clearInterval(maxInterval);
        alert('Parabéns! Você conseguiu! 🎉');
        setTimeout(() => {
            document.querySelector('.page-7-desafio').classList.remove('active');
            document.querySelector('.page-8').classList.add('active');
        }, 500);
    }
}


function irParaPaginaDefinitiva() {
    const page8 = document.querySelector('.page-8');
    const page9 = document.querySelector('.page-9');
    if (page8) page8.classList.remove('active');
    if (page9) page9.classList.add('active');
}

function responderSim() {
    const page9 = document.querySelector('.page-9');
    const page10 = document.querySelector('.page-10');
    
    if (page9) page9.classList.remove('active');
    if (page10) page10.classList.add('active');
    
    // Tocar música
    const audio = document.getElementById('audio-final');
    if (audio) {
        audio.play().catch(() => {});
    }
    
    for (let i = 0; i < 50; i++) {
        setTimeout(criarCoracao, i * 50);
    }
}
