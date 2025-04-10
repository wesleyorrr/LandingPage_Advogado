function scrollToContato() {
    document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
  }
  
  document.getElementById("formContato").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = this[0].value;
    const telefone = this[1].value;
    const email = this[2].value;
    const assunto = this[3].value;
    const mensagem = this[4].value;
  
    const texto = `Olá, meu nome é ${nome}. Assunto: ${assunto}. Mensagem: ${mensagem}. Meu telefone é ${telefone} e email é ${email}`;
    const whatsappUrl = `https://wa.me/55SEUNUMEROAQUI?text=${encodeURIComponent(texto)}`;
    window.open(whatsappUrl, '_blank');
  });