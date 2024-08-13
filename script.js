// Função para digitar a mensagem com um efeito de digitação
function typeMessage(element, message, delay, callback) {
    let i = 0;
    function type() {
        if (i < message.length) {
            element.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 30); // Velocidade de digitação (30ms por caractere)
        } else if (callback) {
            setTimeout(callback, 500); // Tempo de espera antes de começar a próxima ação
        }
    }
    setTimeout(type, delay); // Adiciona um atraso antes de iniciar a digitação
}

// Função para mostrar uma mensagem específica
function showMessage(id, message, delay, callback) {
    const element = document.getElementById(id);
    element.classList.add('show');
    typeMessage(element, message, delay, callback);
}

// Mensagens para serem exibidas
const messages = [
    { id: 'msg1', text: 'Ops...', delay: 1000 },
    { id: 'msg2', text: 'Por pouco você não caiu num golpe!', delay: 1500 },
    { id: 'msg3', text: 'Não vou dizer meu nome ainda... não sei se posso confiar em você!', delay: 1500 },
    { id: 'msg4', text: 'Mas deixa eu te mostrar como você poderia ter perdido várias informações pessoais só de ler um simples QR code.', delay: 2000 },
    { id: 'msg5', text: 'Como sei que o mundo está corrido, vou deixar você escolher...', delay: 1500 },
    { id: 'msg6', text: 'Quer encerrar por aqui ou quer aprender mais sobre como se proteger? Prometo que 3 minutos da sua vida serão bem gastos.', delay: 2000 },
    { id: 'msg7', text: 'Garanto que você não vai se arrepender! Mas como na vida tudo é questão de escolhas...!', delay: 2500 }
];

let messageIndex = 0;

// Função para mostrar a próxima mensagem
function showNextMessage() {
    if (messageIndex < messages.length) {
        const { id, text, delay } = messages[messageIndex];
        showMessage(id, text, delay, () => {
            messageIndex++;
            showNextMessage();
        });
    } else {
        // Mostrar os botões de escolha após todas as mensagens
        document.getElementById('choices').style.display = 'flex';
    }
}

// Inicia a exibição das mensagens
showNextMessage();

// Adiciona eventos aos botões
document.getElementById('btnNo').addEventListener('click', () => {
    clearChat(); // Limpa o chat

    const element = document.createElement('div');
    element.classList.add('message', 'bot');
    document.getElementById('chat').appendChild(element);

    typeMessage(element, 'Poxa, bobão... fazer o quê, né? Vê se não faz feio e para de tentar trapacear na prova! Isso é coisa de BOBÃO', 0, showEndButton);
});

document.getElementById('btnYes').addEventListener('click', () => {
    window.location.href = 'page2.html'; // Redireciona para a página de detalhes
});

// Função para limpar o chat
function clearChat() {
    const chat = document.getElementById('chat');
    chat.innerHTML = ''; // Limpa todo o conteúdo do chat
}

// Função para mostrar o botão "Fim"
function showEndButton() {
    const endButton = document.createElement('button');
    endButton.textContent = 'Até mais bobão!';
    endButton.classList.add('end-button');
    endButton.addEventListener('click', () => {
        alert('Você encerrou a conversa.');
    });
    document.getElementById('chat').appendChild(endButton);
    // Rola para baixo para mostrar o botão "Fim"
    endButton.scrollIntoView({ behavior: 'smooth', block: 'end' });
}
