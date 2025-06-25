document.getElementById("enviarGarantia").addEventListener("click", async function () {
  const { jsPDF } = window.jspdf;
  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  // ... demais campos

  if (!nome || !telefone || !marca || !modelo || !problema) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  const pdf = new jsPDF();
  // monta o PDF ...
  // ...

  // Tentar upload na transfer.sh
  try {
    const blob = pdf.output("blob");
    const response = await fetch("https://transfer.sh/termo-garantia.pdf", {
      method: "POST",
      headers: { "Content-Type": "application/pdf" },
      body: blob,
    });

    if (!response.ok) throw new Error("Upload falhou");

    const link = await response.text();
    const numero = telefone.replace(/\D/g, "");
    const mensagem = `Olá ${nome}, segue o link com o seu termo de garantia:\n${link}`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`, "_blank");
  } catch (err) {
    console.error(err);
    // Fallback: download local
    pdf.save("termo-garantia.pdf");
    alert("PDF gerado e baixado. Agora você pode enviar manualmente para o cliente via WhatsApp.");
  }
});
