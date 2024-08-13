document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente carregado e analisado');

    function typeMessage(element, message, delay, callback) {
        let i = 0;
        element.innerHTML = ''; // Limpa o conteúdo atual
        function type() {
            if (i < message.length) {
                element.innerHTML += message.charAt(i);
                i++;
                setTimeout(type, 30); // Velocidade de digitação (30ms por caractere)
            } else if (callback) {
                setTimeout(callback, 100); // Tempo de espera antes de começar a próxima ação
            }
        }
        setTimeout(type, delay); // Adiciona um atraso antes de iniciar a digitação
    }

    function clearChat() {
        const chat = document.getElementById('chat');
        chat.innerHTML = ''; // Limpa todo o conteúdo do chat
    }

    function showMessage(messages, index = 0) {
        if (index >= messages.length) return;

        const { id, text, delay } = messages[index];
        const element = document.createElement('div');
        element.classList.add('message', 'bot'); // Adiciona a classe 'bot' para estilo

        // Adiciona um container para a imagem e o texto
        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.innerHTML = `<img src="bot.jpg" alt="Bot" class="message-img"> <span class="message-text">${text}</span>`; // Adiciona a imagem e o texto

        element.appendChild(messageContent);
        document.getElementById('chat').appendChild(element);

        typeMessage(messageContent.querySelector('.message-text'), text, delay, () => {
            element.classList.add('show');
            showMessage(messages, index + 1);
        });
    }

    // Mensagens para serem exibidas
    const messages = [
        { id: 'msg8', text: 'Olha só, você voltou! Fico feliz em ver que você se importa com a segurança das suas informações.', delay: 2000 },
        { id: 'msg9', text: ':)', delay: 1500 },
        { id: 'msg10', text: 'Legal... legal...', delay: 1500 },
        { id: 'msg11', text: 'Bem, vamos direto ao ponto, porque são só 3 minutos!', delay: 1500 },
        { id: 'msg12', text: 'Quando você escaneou o QR code, abriu uma porta enorme para que seu dispositivo pudesse ser infectado.', delay: 2000 },
        { id: 'msg13', text: '"Mas eu uso iPhone", "celular da NASA", ou até o bom e velho Nokia tijolão!', delay: 2000 },
        { id: 'msg14', text: 'Acredite, o dispositivo é o menor dos problemas.', delay: 3000 },
        { id: 'msg15', text: 'Para um hacker, o alvo sempre foi e sempre será a parte mais vulnerável: o ser humano.', delay: 2000 },
        { id: 'msg16', text: 'Computadores e celulares só fazem o que você manda!', delay: 2000 },
        { id: 'msg17', text: 'Com um pouco de manipulação e engenharia social, consegui te fazer ler esse QR code.', delay: 2000 },
        { id: 'msg18', text: 'Nossos e-mails, WhatsApps, Instagrams estão constantemente recebendo links e arquivos suspeitos.', delay: 2000 },
        { id: 'msg19', text: 'E muitas vezes a gente acessa sem pensar.', delay: 2000 },
        { id: 'msg20', text: 'Cuide das suas informações. Não se conecte a redes Wi-Fi desconhecidas.', delay: 2500 },
        { id: 'msg21', text: 'Use senhas diferentes para cada acesso, e guarde-as em locais seguros!', delay: 2500 },
        { id: 'msg22', text: 'Sei que a gente costuma ser meio esquecido por natureza...', delay: 2500 },
        { id: 'msg23', text: 'E sério, deixa de ser feio(a) querendo trapacear nas provas ou trabalhos!', delay: 3000 },
        { id: 'msg24', text: 'Olha, não é brincadeira. Meu criador, um tal de GDR, me ensinou tudo isso.', delay: 3000 },
        { id: 'msg25', text: 'Ele disse que é super fácil descobrir onde você mora, quem são seus pais, sua família, amigos...', delay: 3000 },
        { id: 'msg26', text: 'Essas informações podem não parecer tão importantes para você, mas para um hacker, são ouro!', delay: 3000 },
        { id: 'msg27', text: 'É assim que começam os trotes por telefone...', delay: 3000 },
        { id: 'msg28', text: 'Ou como você perde o seu Instagram porque sua senha é algo tipo 1234bilubilu.', delay: 3000 },
        { id: 'msg29', text: 'Pra finalizar, pense três vezes antes de clicar, abrir ou baixar qualquer coisa na internet.', delay: 2000 },
        { id: 'msg30', text: 'Se você chegou até aqui, conte para os seus amigos.', delay: 2000 },
        { id: 'msg31', text: 'Diga para não escanear o QR code, e veja se eles te ouvem.', delay: 2000 },
        { id: 'msg32', text: 'Lembre-se, não é brincadeira!', delay: 2000 },
        { id: 'msg33', text: 'Meu nome é QR, fui direto ao ponto.', delay: 2000 },
        { id: 'msg34', text: 'Obrigado...', delay: 2000 }
    ];

    clearChat();
    showMessage(messages);
});
