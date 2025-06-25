// Marcas e modelos
const modelosPorMarca = {
  Apple: [
    "iPhone 2G", "iPhone 3G", "iPhone 3GS", "iPhone 4", "iPhone 4S",
    "iPhone 5", "iPhone 5c", "iPhone 5s", "iPhone 6", "iPhone 6s",
    "iPhone 7", "iPhone 8", "iPhone X", "iPhone XR", "iPhone XS",
    "iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15",
    "iPhone SE (1ª geração)", "iPhone SE (2ª geração)", "iPhone SE (3ª geração)",
    "iPhone 14 Pro", "iPhone 14 Pro Max", "iPhone 15 Pro", "iPhone 15 Pro Max"
  ],
  Samsung: [
    "Galaxy S", "Galaxy S2", "Galaxy S3", "Galaxy S4", "Galaxy S5",
    "Galaxy S6", "Galaxy S7", "Galaxy S8", "Galaxy S9", "Galaxy S10",
    "Galaxy S20", "Galaxy S21", "Galaxy S22", "Galaxy S23",
    "Galaxy Note", "Galaxy Note II", "Galaxy Note 3", "Galaxy Note 4",
    "Galaxy Note 5", "Galaxy Note 8", "Galaxy Note 9", "Galaxy Note 10",
    "Galaxy Note 20 Ultra", "Galaxy A10", "Galaxy A20", "Galaxy A30",
    "Galaxy A50", "Galaxy A70", "Galaxy A71", "Galaxy A72", "Galaxy M12",
    "Galaxy M31", "Galaxy M32", "Galaxy M52", "Galaxy M53"
  ],
  Xiaomi: [
    "Redmi 1S", "Redmi 2", "Redmi 3", "Redmi 4", "Redmi 5", "Redmi 6",
    "Redmi 7", "Redmi 8", "Redmi 9", "Redmi 10",
    "Redmi Note 3", "Redmi Note 4", "Redmi Note 5", "Redmi Note 6",
    "Redmi Note 7", "Redmi Note 8", "Redmi Note 9", "Redmi Note 10",
    "Redmi Note 11", "Redmi Note 12", "Poco F1", "Poco X3", "Poco X4 Pro",
    "Mi 8", "Mi 9", "Mi 10", "Mi 11", "Mi 12", "Mi 13"
  ],
  Motorola: [
    "Moto G1", "Moto G2", "Moto G3", "Moto G4", "Moto G5", "Moto G6",
    "Moto G7", "Moto G8", "Moto G9", "Moto G10", "Moto G20", "Moto G30",
    "Moto G50", "Moto G60", "Moto G71", "Moto G82", "Moto E1", "Moto E2",
    "Moto E3", "Moto E4", "Moto E5", "Moto E6", "Moto E7", "Moto E20",
    "Moto E32", "Moto Edge", "Moto Edge 20", "Moto Edge 30", "Moto Edge 30 Ultra"
  ],
  Asus: [
    "Zenfone 2", "Zenfone 3", "Zenfone 4", "Zenfone 5", "Zenfone 6",
    "Zenfone 7", "Zenfone 8", "Zenfone 9", "ROG Phone", "ROG Phone 2",
    "ROG Phone 3", "ROG Phone 5", "ROG Phone 6"
  ],
  Realme: [
    "Realme 1", "Realme 2", "Realme 3", "Realme 5", "Realme 6",
    "Realme 7", "Realme 8", "Realme 9", "Realme GT", "Realme GT Neo 2",
    "Realme GT 2 Pro"
  ],
  LG: [
    "LG Optimus One", "LG G2", "LG G3", "LG G4", "LG G5", "LG G6",
    "LG K8", "LG K10", "LG K20", "LG K40", "LG K50", "LG V20", "LG V30",
    "LG V40", "LG V50", "LG Velvet", "LG Wing"
  ],
  Huawei: [
    "Huawei Ascend P1", "Huawei Ascend P2", "Huawei P8", "Huawei P9",
    "Huawei P10", "Huawei P20", "Huawei P30", "Huawei P40", "Huawei P50",
    "Huawei Mate 7", "Huawei Mate 8", "Huawei Mate 9", "Huawei Mate 10",
    "Huawei Mate 20", "Huawei Mate 30", "Huawei Mate 40", "Huawei Nova 3",
    "Huawei Nova 4", "Huawei Nova 5", "Huawei Nova 6", "Huawei Nova 7", "Huawei Nova 8"
  ],
  Sony: [
    "Sony Xperia S", "Sony Xperia Z", "Sony Xperia Z1", "Sony Xperia Z2",
    "Sony Xperia Z3", "Sony Xperia Z5", "Sony Xperia XZ", "Sony Xperia XZ1",
    "Sony Xperia XZ2", "Sony Xperia 10", "Sony Xperia 5", "Sony Xperia 1",
    "Sony Xperia 1 IV", "Sony Xperia 1 V"
  ],
  OnePlus: [
    "OnePlus One", "OnePlus 2", "OnePlus 3", "OnePlus 5", "OnePlus 6",
    "OnePlus 7", "OnePlus 8", "OnePlus 9", "OnePlus 10", "OnePlus 11"
  ],
  Nokia: [
    "Nokia 1100", "Nokia 3310", "Nokia 5230", "Nokia Lumia 520", "Nokia 2",
    "Nokia 3", "Nokia 5", "Nokia 6", "Nokia 7", "Nokia 8", "Nokia 9",
    "Nokia G10", "Nokia G20", "Nokia G50"
  ],
  Google: [
    "Pixel", "Pixel 2", "Pixel 3", "Pixel 4", "Pixel 5", "Pixel 6", "Pixel 7"
  ],
  Alcatel: [
    "Alcatel One Touch", "Alcatel 1", "Alcatel 3", "Alcatel 5"
  ],
  ZTE: [
    "ZTE Blade", "ZTE Axon 7", "ZTE Axon 9", "ZTE Axon 10", "ZTE Axon 30"
  ],
  Lenovo: [
    "Lenovo A1000", "Lenovo A2010", "Lenovo K6", "Lenovo K8", "Lenovo K10",
    "Lenovo Z6", "Lenovo Legion Phone Duel", "Lenovo Legion 2 Pro"
  ],
  Vivo: [
    "Vivo Y11", "Vivo Y15", "Vivo Y20", "Vivo Y30", "Vivo V15", "Vivo V20",
    "Vivo V23", "Vivo X50", "Vivo X60", "Vivo X90"
  ],
  Oppo: [
    "Oppo A3s", "Oppo A5", "Oppo A9", "Oppo Reno", "Oppo Reno 2", "Oppo Reno 5",
    "Oppo Find X", "Oppo Find X2", "Oppo Find X3", "Oppo Find X5"
  ],
  Meizu: [
    "Meizu MX5", "Meizu M3", "Meizu M6", "Meizu 16", "Meizu 17", "Meizu 18"
  ],
  BlackBerry: [
    "BlackBerry Bold 9900", "BlackBerry Key2", "BlackBerry Motion"
  ],
  Panasonic: [
    "Panasonic Eluga I7", "Panasonic Eluga I9"
  ],
  Tecno: [
    "Tecno Spark 7", "Tecno Spark 8", "Tecno Camon 19", "Tecno Camon 20"
  ],
  Infinix: [
    "Infinix Hot 10", "Infinix Hot 11", "Infinix Zero 5G 2022"
  ],
  Lava: [
    "Lava Z2", "Lava Blaze 2"
  ],
  Micromax: [
    "Micromax In Note 1", "Micromax In 1b"
  ],
  Coolpad: [
    "Coolpad Cool 10", "Coolpad Cool 12"
  ],
  Zopo: [
    "Zopo Speed 7", "Zopo Color F3"
  ],
  Sharp: [
    "Sharp Aquos R6", "Sharp Aquos R7"
  ],
  Fairphone: [
    "Fairphone 3", "Fairphone 4"
  ],
  Essential: [
    "Essential Phone PH-1"
  ],
  Nubia: [
    "Nubia Red Magic 6", "Nubia Red Magic 7"
  ],
  Outros: [
    "Outro modelo (especifique nas observações)"
  ]
};

const marcaSelect = document.getElementById("marca");
const modeloSelect = document.getElementById("modelo");

// Atualiza modelos quando marca muda
marcaSelect.addEventListener("change", () => {
  const marca = marcaSelect.value;
  const modelos = modelosPorMarca[marca] || [];

  modeloSelect.innerHTML = "";

  modelos.forEach(modelo => {
    const opt = document.createElement("option");
    opt.value = modelo;
    opt.textContent = modelo;
    modeloSelect.appendChild(opt);
  });

  if (modelos.length === 0) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "Nenhum modelo encontrado";
    modeloSelect.appendChild(opt);
  }
});

// Envia pro WhatsApp
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const cpf = document.getElementById("cpf").value;

  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const cor = document.getElementById("cor").value;
  const senha = document.getElementById("senha").value;

  const problema = document.getElementById("problema").value;
  const aberto = document.querySelector('input[name="aberto"]:checked').value;
  const obs = document.getElementById("obs").value;

  // MONTA A MENSAGEM
  let mensagem = `📋 *Ficha de Manutenção*\n\n`;
  mensagem += `👤 *Cliente*\n`;
  mensagem += `• Nome: ${nome}\n`;
  mensagem += `• Telefone: ${telefone}\n`;
  if (email) mensagem += `• Email: ${email}\n`;
  mensagem += `• CPF: ${cpf}\n\n`;

  mensagem += `📱 *Dispositivo*\n`;
  mensagem += `• Marca: ${marca}\n`;
  mensagem += `• Modelo: ${modelo}\n`;
  mensagem += `• Cor: ${cor}\n`;
  mensagem += `• Senha (uso técnico): ${senha || "Não informado"}\n\n`;

  mensagem += `🔧 *Manutenção*\n`;
  mensagem += `• Problema: ${problema}\n`;
  mensagem += `• Já foi aberto? ${aberto}\n`;
  if (obs) mensagem += `• Obs: ${obs}\n`;

  // DEFINE O NÚMERO DE ENVIO (SEU NÚMERO)
  const numero = "5561993768275"; // DDD + número, sem + nem espaços

  // MONTA O LINK COM A MENSAGEM CODIFICADA
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  // ABRE O WHATSAPP COM A MENSAGEM
  window.open(url, "_blank");
});
