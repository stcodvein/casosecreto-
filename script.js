// CONTEÚDO DOS DOCUMENTOS DE EVIDÊNCIAS
const documentData = {
    'doc-1': {
        code: 'INCIDENTE_001',
        title: 'O CASO ANAKIN',
        content: `
            <p><strong>REGISTRO DE OCORRÊNCIA:</strong></p>
            <p>Eloy compartilhara publicamente um print de uma conversa com sua amiga Athena, acompanhado do comentário de que a considerava "a Padmé do meu Anakin". Na mesma postagem, havia uma brincadeira sobre o destino dos personagens na ficção.</p>
            <br>
            <p><strong>ANÁLISE DO AUDITOR:</strong></p>
            <p>A amizade de Eloy e Athena já era frequentemente interpretada por terceiros como algo romântico — embora, para Eloy, fosse estritamente uma amizade próxima. A comparação com Anakin e Padmé, mesmo feita em tom brincalhão, reforçou essa impressão externa e causou um desconforto legítimo em Leona.</p>
            <br>
            <p><strong>NOTA DE RESPONSABILIDADE:</strong></p>
            <p><em>A intenção brincalhona de Eloy não apaga o impacto e o sentimento gerados em Leona. O investigador reconhece a falta de sensibilidade no episódio.</em></p>
        `
    },
    'doc-2': {
        code: 'ANOMALIA_002',
        title: 'A TERÇA-FEIRA',
        content: `
            <p><strong>REGISTRO DE AFASTAMENTO:</strong></p>
            <p>O distanciamento entre as partes teve início em uma terça-feira. Quando Leona perguntou se eles seriam apenas amigos, Eloy concordou sem compreender plenamente o impacto daquela resposta ou o que estava prestes a perder.</p>
            <br>
            <p><strong>FALHA DE CONDUTA:</strong></p>
            <p>Nos dias seguintes, Eloy agiu com uma aparente normalidade, sem demonstrar a falta que Leona fazia, fazendo com que o silêncio parecesse indiferença.</p>
            <br>
            <p><strong>REGISTRO DA ANOMALIA:</strong></p>
            <p>Desde então, o dia da semana "terça-feira" tornou-se uma anomalia no calendário mental de Eloy. Para tentar corrigir o trauma temporal, Eloy implementou informalmente um calendário com duas segundas-feiras por semana, na tentativa inútil de pular as terças-feiras.</p>
        `
    },
    'doc-3': {
        code: 'CONTRATO_003',
        title: 'A CLÁUSULA DO BEIJO',
        content: `
            <p><strong>ACORDO NÃO OFICIAL #01:</strong></p>
            <p>Fica estabelecida a tradição do "beijo de bom-dia" como ritual compulsório de abertura de jornada entre as partes.</p>
            <br>
            <p><strong>OBSERVAÇÕES DE CAMPO:</strong></p>
            <p>Em dias em que a cláusula era negligenciada por correria ou esquecimento, registrava-se a superstição imediata de que o restante do dia seria irremediavelmente ruim.</p>
            <br>
            <p><em>Nota Íntima:</em> Um gesto simples que se tornou um pilar fundamental da rotina afetiva dos envolvidos.</p>
        `
    },
    'doc-4': {
        code: 'CONTRATO_004',
        title: 'A CLÁUSULA DA MORDIDA',
        content: `
            <p><strong>ACORDO NÃO OFICIAL #02:</strong></p>
            <p>Fica acordada a permissão irrestrita para a execução da "mordida na bochecha".</p>
            <br>
            <p><strong>PARECER JURÍDICO:</strong></p>
            <p>Trata-se de uma cláusula sem qualquer validade no direito civil, porém revestida de altíssimo valor afetivo e absoluto absurdo cotidiano.</p>
            <br>
            <p>Assim como no Contrato #03, a omissão deste ritual gerava alegações imediatas de "má sorte" para as horas seguintes.</p>
        `
    },
    'doc-5': {
        code: 'REGISTRO_005',
        title: 'O SUBMUNDO',
        content: `
            <p><strong>REGISTRO MITOLÓGICO:</strong></p>
            <p>As conversas entre Eloy e Leona frequentemente transitavam por tópicos de mitologia grega, com atenção especial a Hades, Perséfone e as complicações causadas por Zeus.</p>
            <br>
            <p><strong>ANÁLISE PSICOLÓGICA:</strong></p>
            <p>Eloy tentou arquivar sentimentos, memórias e culpa como se fossem relatórios administrativos e pastas confidenciais. A tentativa falhou miseravelmente.</p>
            <br>
            <p><strong>PISTA DE IDENTIDADE:</strong></p>
            <p>O sobrenome <em>Morpheus</em> — ligado ao deus dos sonhos e das memórias — surge como chave para entender por que este arquivo continua ativo.</p>
        `
    }
};

// ESTADO DA APLICAÇÃO
const readDocs = new Set();
const totalDocs = 5;

// LISTA DE FRASES DO BOTÃO FUJÃO
const rejectPhrases = [
    "tem certeza? 🥺",
    "leona, pensa bem",
    "ISSO É PERSEGUIÇÃO",
    "o réu solicita clemência",
    "não vale, eu sou sensível 💔",
    "ERRO: botão em fuga"
];
let rejectPhraseIndex = 0;

// ELEMENTOS DO DOM
document.addEventListener('DOMContentLoaded', () => {
    const btnSec1 = document.getElementById('btn-sec-1');
    const btnSec2 = document.getElementById('btn-sec-2');
    const btnSec3 = document.getElementById('btn-sec-3');
    const btnSec4 = document.getElementById('btn-sec-4');
    const btnSec5 = document.getElementById('btn-sec-5');
    const btnSec6 = document.getElementById('btn-sec-6');
    const btnForgive = document.getElementById('btn-forgive');
    const btnReject = document.getElementById('btn-reject');
    const btnRestart = document.getElementById('btn-restart');

    const modal = document.getElementById('evidence-modal');
    const modalDocCode = document.getElementById('modal-doc-code');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const btnMarkRead = document.getElementById('btn-mark-read');

    let currentOpenDoc = null;

    function showSection(secId) {
        document.querySelectorAll('.step-section').forEach(sec => {
            sec.classList.add('hidden');
            sec.classList.remove('active');
        });
        const target = document.getElementById(secId);
        if (target) {
            target.classList.remove('hidden');
            target.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    btnSec1.addEventListener('click', () => showSection('sec-2'));
    btnSec2.addEventListener('click', () => showSection('sec-3'));
    btnSec3.addEventListener('click', () => {
        if (readDocs.size === totalDocs) {
            showSection('sec-4');
        }
    });
    btnSec4.addEventListener('click', () => showSection('sec-5'));
    btnSec5.addEventListener('click', () => showSection('sec-6'));
    btnSec6.addEventListener('click', () => showSection('sec-7'));
    btnForgive.addEventListener('click', () => showSection('sec-8'));

    btnRestart.addEventListener('click', () => {
        readDocs.clear();
        updateProgress();
        document.querySelectorAll('.evidence-item').forEach(item => {
            item.classList.remove('read');
            const statusEl = item.querySelector('.doc-status');
            if (statusEl) statusEl.textContent = 'NÃO LIDO';
        });
        btnSec3.classList.add('btn-disabled');
        btnSec3.disabled = true;

        btnReject.style.position = 'static';
        btnReject.style.transform = 'none';
        rejectPhraseIndex = 0;
        btnReject.textContent = 'rejeitar o perdão 💔';

        showSection('sec-1');
    });

    document.querySelectorAll('.evidence-item').forEach(item => {
        item.addEventListener('click', () => {
            const docId = item.getAttribute('data-doc');
            if (documentData[docId]) {
                currentOpenDoc = docId;
                modalDocCode.textContent = documentData[docId].code;
                modalTitle.textContent = documentData[docId].title;
                modalText.innerHTML = documentData[docId].content;
                modal.classList.remove('hidden');
            }
        });
    });

    function closeModal() {
        modal.classList.add('hidden');
        currentOpenDoc = null;
    }

    btnCloseModal.addEventListener('click', closeModal);

    btnMarkRead.addEventListener('click', () => {
        if (currentOpenDoc) {
            readDocs.add(currentOpenDoc);
            const item = document.querySelector(`.evidence-item[data-doc="${currentOpenDoc}"]`);
            if (item) {
                item.classList.add('read');
                const statusEl = item.querySelector('.doc-status');
                if (statusEl) statusEl.textContent = 'LIDO';
            }
            updateProgress();
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    function updateProgress() {
        const count = readDocs.size;
        document.getElementById('progress-text').textContent = `${count} / ${totalDocs}`;
        const percentage = (count / totalDocs) * 100;
        document.getElementById('progress-fill').style.width = `${percentage}%`;

        if (count === totalDocs) {
            btnSec3.classList.remove('btn-disabled');
            btnSec3.disabled = false;
        }
    }

    // BOTÃO FUJÃO (BOTÃO REJEITAR)
    function escapeButton(e) {
        rejectPhraseIndex = (rejectPhraseIndex + 1) % rejectPhrases.length;
        btnReject.textContent = rejectPhrases[rejectPhraseIndex];

        const container = document.getElementById('decision-area');
        const containerRect = container.getBoundingClientRect();
        const btnRect = btnReject.getBoundingClientRect();

        btnReject.style.position = 'absolute';

        const maxX = containerRect.width - btnRect.width;
        const maxY = containerRect.height - btnRect.height;

        const newX = Math.max(0, Math.min(Math.random() * maxX, maxX));
        const newY = Math.max(0, Math.min(Math.random() * maxY, maxY));

        btnReject.style.left = `${newX}px`;
        btnReject.style.top = `${newY}px`;
    }

    btnReject.addEventListener('mouseenter', escapeButton);
    btnReject.addEventListener('touchstart', (e) => {
        e.preventDefault();
        escapeButton(e);
    });
    btnReject.addEventListener('click', (e) => {
        e.preventDefault();
        escapeButton(e);
    });
});