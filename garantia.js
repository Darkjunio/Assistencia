document.getElementById("enviarGarantia").addEventListener("click", async function () {
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

  const blob = pdf.output("blob");

  try {
    const response = await fetch("https://transfer.sh/garantia.pdf", {
      method: "POST",
      body: blob,
      headers: {
        "Content-Type": "application/pdf"
      }
    });

    const link = await response.text();

    const mensagem = `Olá ${nome}, segue o link com o seu termo de garantia: ${link}`;
    const numeroFormatado = telefone.replace(/\D/g, "");
    const urlWhatsapp = `https://wa.me/${numeroFormatado}?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsapp, "_blank");
  } catch (err) {
    console.error(err);
    alert("Falha ao enviar a garantia.");
  }
});
