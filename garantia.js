document.getElementById("enviarGarantia").addEventListener("click", async function () {
  const jsPDFRef = window.jspdf || window.jspdf?.jsPDF || window.jspdf?.default;
  const { jsPDF } = jsPDFRef;

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const marca = document.getElementById("marca").value.trim();
  const modelo = document.getElementById("modelo").value.trim();
  const cor = document.getElementById("cor").value.trim();
  const problema = document.getElementById("problema").value.trim();

  if (!nome || !telefone || !marca || !modelo || !problema || !cor) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const pdf = new jsPDF();
  const hoje = new Date().toLocaleDateString();

  pdf.setFont("Helvetica", "bold");
  pdf.setFontSize(16);
  pdf.text("TERMO DE GARANTIA", 70, 20);

  pdf.setFontSize(12);
  pdf.setFont("Helvetica", "normal");
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

  const blob = pdf.output("blob");

  const formData = new FormData();
  formData.append("file", blob, "garantia.pdf");

  try {
    const response = await fetch("https://file.io/?expires=1d", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success && data.link) {
      const link = data.link;
      const mensagem = `Olá ${nome}, segue o link com o seu termo de garantia:\n${link}`;
      const numeroFormatado = telefone.replace(/\D/g, "");

      const urlWhatsapp = `https://wa.me/${numeroFormatado}?text=${encodeURIComponent(mensagem)}`;
      window.open(urlWhatsapp, "_blank");
    } else {
      console.error("Erro na resposta do File.io:", data);
      alert("Erro ao gerar link do PDF. Tente novamente.");
    }
  } catch (err) {
    console.error("Erro ao enviar para File.io:", err);
    alert("Falha ao enviar a garantia. Verifique a conexão.");
  }
});
