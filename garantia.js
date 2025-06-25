document.getElementById("enviarGarantia").addEventListener("click", function () {
  const { jsPDF } = window.jspdf;
  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const marca = document.getElementById("marca").value.trim();
  const modelo = document.getElementById("modelo").value.trim();
  const cor = document.getElementById("cor").value.trim();
  const problema = document.getElementById("problema").value.trim();

  if (!nome || !telefone || !marca || !modelo || !problema) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  const pdf = new jsPDF('p','mm','a4');
  const hoje = new Date().toLocaleDateString();

  // Cabeçalho
  pdf.setFontSize(14);
  pdf.setFont("helvetica", "bold");
  pdf.text("TERMO DE GARANTIA", 105, 20, { align: "center" });
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "normal");
  pdf.text("SUA ASSISTÊNCIA TÉCNICA • CNPJ: 00.000.000/0000-00", 105, 27, {
    align: "center",
  });
  pdf.line(10, 30, 200, 30);

  // Termos
  const termos = [
    "1) A GARANTIA DE 90 (noventa) dias está de acordo com o art. 26 II do CDC.",
    "2) Estão excluídos acessórios e partes externas (capas, películas, cabos, etc.).",
    "3) A garantia é cancelada por quedas, líquidos, exposição a mau uso ou violação.",
    "4) Atualizações ou limpeza não estão cobertas.",
    "5) Sem apresentação do termo ou nota, a garantia é inválida.",
    "6) Cobre somente o serviço descrito.",
  ];
  let y = 40;
  termos.forEach((t) => {
    pdf.text(t, 10, y);
    y += 6;
  });

  y += 8;
  pdf.text("DADOS DO EQUIPAMENTO:", 10, y);
  y += 6;
  pdf.line(10, y, 200, y);
  y += 5;
  pdf.text(`Data: ${hoje}`, 10, y);
  pdf.text(`Marca: ${marca}`, 70, y);
  pdf.text(`Modelo: ${modelo}`, 120, y);
  y += 8;
  pdf.text(`Serviço realizado: ${problema}`, 10, y);

  y += 15;
  pdf.line(10, y, 200, y);
  y += 5;
  pdf.text("Cliente: ________________________    Técnico: ________________________", 10, y);

  y += 20;
  pdf.setFontSize(9);
  pdf.text(
    "Site: www.suaassistencia.com.br  |  Email: deusimarj23@gmail.com  |  Telefone: (61) 99376-8275",
    10,
    y
  );

  // Salva o PDF
  pdf.save(`termo-garantia-${nome.replace(/ /g, "_")}.pdf`);

  // Mensagem no WhatsApp
  const numero = telefone.replace(/\D/g, "");
  const mensagem = `Olá ${nome}, tudo bem? Aqui é da assistência técnica!\n\nAcabamos de gerar seu *Termo de Garantia* referente ao serviço realizado no seu aparelho.\n\n📄 O arquivo foi baixado no seu dispositivo — por favor, mantenha esse documento salvo, pois ele é necessário em caso de garantia.\n\nQualquer dúvida, estamos à disposição!`;

  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`, "_blank");
});
