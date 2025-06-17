// Função principal que é executada quando o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Elementos da interface
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const alertClose = document.querySelector('.alert-close');
    const alertBar = document.querySelector('.alert-bar');
    const toolButtons = document.querySelectorAll('.tool-button');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Inicialização do mapa
    initMap();
    
    // Configuração de eventos
    
    // Toggle sidebar
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });
    
    // Close alert
    alertClose.addEventListener('click', function() {
        alertBar.style.display = 'none';
    });
    
    // Tool buttons
    toolButtons.forEach(button => {
        button.addEventListener('click', function() {
            toolButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Aqui você pode adicionar lógica para mudar as camadas do mapa
            // baseado na ferramenta selecionada
            updateMapLayers(this.querySelector('i').className);
        });
    });
    
    // Nav items
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Aqui você pode adicionar lógica para mudar a visualização
            // baseado no item do menu selecionado
            updateView(this.querySelector('span').textContent);
        });
    });
    
    // Simulate real-time update
    setInterval(updateDateTime, 60000);
    updateDateTime(); // Chamada inicial
    
    // Configuração do painel oculto
    setupHiddenPanel();
});

// Função para inicializar o mapa
function initMap() {
    // Verifica se o elemento do mapa existe
    if (!document.getElementById('map')) return;
    
    console.log("Inicializando mapa...");
    
    // Aqui você implementaria a inicialização real da biblioteca de mapas
    // Exemplo com Leaflet:
    /*
    const map = L.map('map').setView([-15.7942, -47.8822], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Adicionar camadas específicas para monitoramento hidrológico
    addHydrologicalLayers(map);
    */
}

// Função para atualizar camadas do mapa baseado na seleção
function updateMapLayers(selectedTool) {
    console.log(`Ferramenta selecionada: ${selectedTool}`);
    // Implemente a lógica para mostrar/ocultar camadas do mapa
}

// Função para atualizar a visualização baseada no menu
function updateView(selectedView) {
    console.log(`Visualização selecionada: ${selectedView}`);
    // Implemente a lógica para mudar a visualização principal
}

// Atualiza data e hora no rodapé
function updateDateTime() {
    const now = new Date();
    const timeElement = document.getElementById('update-time');
    
    if (timeElement) {
        timeElement.textContent = 
            `${now.getDate().toString().padStart(2, '0')}/` +
            `${(now.getMonth()+1).toString().padStart(2, '0')}/` +
            `${now.getFullYear()} ` +
            `${now.getHours().toString().padStart(2, '0')}:` +
            `${now.getMinutes().toString().padStart(2, '0')}`;
    }
}

// Configura o painel oculto
function setupHiddenPanel() {
    const panelItems = document.querySelectorAll('.panel-item');
    
    panelItems.forEach(item => {
        item.addEventListener('click', function() {
            const groupName = this.querySelector('span').textContent;
            console.log(`Abrindo grupo: ${groupName}`);
            // Aqui você implementaria a lógica para abrir o grupo no WhatsApp
            // Por exemplo: window.open(`https://wa.me/groupinvitelink`);
        });
    });
}

// Função para carregar dados em tempo real
async function loadRealTimeData() {
    try {
        // Aqui você implementaria a chamada a uma API real
        // const response = await fetch('https://api.hydromonitor.com/data');
        // const data = await response.json();
        // updateUIWithData(data);
    } catch (error) {
        console.error("Erro ao carregar dados:", error);
    }
}

// Função para atualizar a UI com novos dados
function updateUIWithData(data) {
    // Implemente a lógica para atualizar a interface com os dados recebidos
    console.log("Atualizando UI com novos dados:", data);
}