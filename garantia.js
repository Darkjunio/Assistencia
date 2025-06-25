document.getElementById("enviarGarantia").addEventListener("click", function () {
  const { jsPDF } = window.jspdf;

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const cor = document.getElementById("cor").value;
  const problema = document.getElementById("problema").value;

  if (!nome || !telefone || !marca || !modelo || !problema) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  const pdf = new jsPDF();
  const hoje = new Date().toLocaleDateString();

  pdf.text("TERMO DE GARANTIA", 70, 20);
  pdf.text(`Cliente: ${nome}`, 10, 40);
  pdf.text(`Telefone: ${telefone}`, 10, 50);
  pdf.text(`Aparelho: ${marca} ${modelo} - ${cor}`, 10, 60);
  pdf.text(`Serviço: ${problema}`, 10, 70);
  pdf.text(`Data: ${hoje}`, 10, 80);
  pdf.text("Garantia: 90 dias corridos", 10, 90);
  pdf.text("Termos:", 10, 110);
  pdf.text("- A garantia cobre apenas o serviço executado.", 10, 120);
  pdf.text("- Danos físicos ou violação anulam a garantia.", 10, 130);
  pdf.text("- Não nos responsabilizamos por dados perdidos.", 10, 140);
  pdf.text("Assinatura: _________________________", 10, 160);
  pdf.text("Atendimento: Sua Assistência Técnica", 10, 180);

  // Baixa o PDF automaticamente
  pdf.save("garantia.pdf");

  // Abre o WhatsApp com a mensagem padrão
  const mensagem = `Olá ${nome}, sua garantia foi gerada com sucesso! 📄\n\n📌 Aparelho: ${marca} ${modelo} (${cor})\n🛠️ Serviço: ${problema}\n📅 Data: ${hoje}\n\n📎 O termo foi baixado no seu dispositivo. Por favor, anexe o arquivo ao enviar esta mensagem.`;

  const numeroFormatado = telefone.replace(/\D/g, "");
  const urlWhatsapp = `https://wa.me/${numeroFormatado}?text=${encodeURIComponent(mensagem)}`;
  window.open(urlWhatsapp, "_blank");
});
