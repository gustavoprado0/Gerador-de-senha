const name = prompt("Qual o seu nome ?")
alert("Bem vindo! " + name)





function gerarSenha() {
  // Caracteres permitidos na senha
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // Comprimento da senha desejado
  const comprimentoSenha = 12;

  let senha = '';
  for (let i = 0; i < comprimentoSenha; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(indiceAleatorio);
  }

  // Exibe a senha gerada
  document.getElementById('password').textContent = 'Senha: ' + senha;
}