let editando = null;

function adicionarUsuario() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;

    if (!nome || !sobrenome || !email) {
        alert('Preencha todos os campos!');
        return;
    }

    if (editando) {
        editando.innerHTML = `
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Sobrenome:</strong> ${sobrenome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <button onclick="editarUsuario(this)">Editar</button>
            <button onclick="deletarUsuario(this)">Deletar</button>
        `;
        editando = null;
    } else {
        document.getElementById('user-grid').innerHTML += `
            <div class="user-item">
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Sobrenome:</strong> ${sobrenome}</p>
                <p><strong>Email:</strong> ${email}</p>
                <button onclick="editarUsuario(this)">Editar</button>
                <button onclick="deletarUsuario(this)">Deletar</button>
            </div>
        `;
    }

    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('email').value = '';
}

function editarUsuario(button) {
    const item = button.parentElement;
    const [nomeCompleto, sobrenomeCompleto, emailCompleto] = item.querySelectorAll('p');

    document.getElementById('nome').value = nomeCompleto.textContent.replace('Nome: ', '');
    document.getElementById('sobrenome').value = sobrenomeCompleto.textContent.replace('Sobrenome: ', '');
    document.getElementById('email').value = emailCompleto.textContent.replace('Email: ', '');

    editando = item;
}

function deletarUsuario(button) {
    button.parentElement.remove();
}
