var perfUsuario = "Técnico";

// Recupera a página atual armazenada no localStorage
var pageAtual = localStorage.getItem('pageAtual') || 'bntDashMenu';

// var pageAtual = sessionStorage.getItem('paginaAtual') || 'DashboardGeral.html';
// atualizarPageAtualMenu(pageAtual);

menuLateral.innerHTML = `
    <img src="../assets/images/Logo.png" class="logo" alt="Logo">

    <ul id="menuList">
        <li>
            <a href="DashboardGeral.html" id="bntDashMenu" class="menu-link" onclick="atualizarPageAtualMenu(this)">
                <img src="../assets/images/dashboard.png" width="37px" alt="icon dashboard"> Dashboard
            </a>
        </li>
        <li>
            <a href="teste.html" id="bntLabMenu" class="menu-link" onclick="atualizarPageAtualMenu(this)">
                <img src="../assets/images/carbon_labs.png" alt="icon laboratório"> Laboratórios
            </a>
        </li>
        <li>
            <a href="#" id="bntPCsMenu" class="menu-link" onclick="atualizarPageAtualMenu(this)">
                <img src="../assets/images/icon_computer-outline.png" alt="icon PC"> Computadores
            </a>
        </li>
        <li>
            <a href="#" id="bntUsersMenu" class="menu-link" onclick="atualizarPageAtualMenu(this)">
                <img src="../assets/images/iwwa_user.png" alt="icon usuários"> Usuários
            </a>
        </li>
        <li>
            <a href="#" id="bntConfigMenu" class="menu-link" onclick="atualizarPageAtualMenu(this)">
                <img src="../assets/images/carbon_settings-edit.png" alt=""> Configurações
            </a>
        </li>
    </ul>

    <div class="footer">
        <span>EigTech - © 2023</span>
    </div>
`;

menuTop.innerHTML = `
    <div class="usuario">
        <span>Olá, <b>Username</b></span>
        <select class="sl_perfil" id="sl_perfil" onclick="atualizarPerfilExibicao()">
            <option value="admin">Perf. Admin</option>
            <option value="tecnico" selected>Perf. Técnico</option>
        </select>
    </div>

    <button class="btn-logout" onclick="logout()">
        <img src="../assets/images/Vector_logout.png" alt="icon logout"> Logout
    </button>
`;

// Restaura a classe pgAtual na página atual ao iniciar
document.getElementById('bntDashMenu').classList.add('pgAtual');

exibirMenuPerfil(perfUsuario);

function atualizarPerfilExibicao() {
    perfUsuario = sl_perfil.value;

    exibirMenuPerfil(perfUsuario);
}

function exibirMenuPerfil(perfUsuario) {
    if (perfUsuario == "admin") {
        bntUsersMenu.style.display = 'flex';
        bntConfigMenu.style.display = 'none';
        
    } else {
        bntUsersMenu.style.display = 'none';
        bntConfigMenu.style.display = 'flex';
    }    
}

function atualizarPageAtualMenu(page) {
    // Remove a classe pgAtual de todos os links do menu
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => link.classList.remove('pgAtual'));

    // Adiciona a classe pgAtual ao link clicado
    page.classList.add('pgAtual');

    // Atualiza a variável pageAtual com base no texto do link clicado
    // pageAtual = page;
    // Armazena a página atual no armazenamento local
    // sessionStorage.setItem('paginaAtual', page.href);

    // Atualiza a variável pageAtual e armazena no localStorage
    pageAtual = page.id;
    localStorage.setItem('pageAtual', pageAtual);
}

function logout() {
    //...
    window.location = "../telaLogin.html";
}