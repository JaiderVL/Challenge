const muneco = document.querySelector(".img_muneco");
const text_1 = document.getElementById("text_1");
const text_2 = document.getElementById("text_2");
const text_result = document.querySelector(".text_result");
const container_result = document.querySelectorAll(".hidden");

function encriptarBtn() {
  hidden();
  const input = document.getElementById("container_text").value.trim();

  if (input) {
    const output = encriptar(input);
    text_result.textContent = output;
  } else {
    text_result.textContent = "Por favor, ingrese texto.";
  }

  document.getElementById("container_text").value = "";
  document.getElementById("btn_copy").innerText = "Copiar";
}

function desencriptarBtn() {
  hidden();
  const input = document.getElementById("container_text").value.trim();

  if (input) {
    const output = desencriptar(input);
    text_result.textContent = output;
  } else {
    text_result.textContent = "Por favor, ingrese texto.";
  }

  document.getElementById("container_text").value = "";
  document.getElementById("btn_copy").innerText = "Copiar";
}

function encriptar(text) {
  const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  matrizCodigo.forEach(([letra, codigo]) => {
    text = text.replaceAll(letra, codigo);
  });
  return text;
}

function desencriptar(text) {
  const matrizCodigo = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
  ];
  matrizCodigo.forEach(([codigo, letra]) => {
    text = text.replaceAll(codigo, letra);
  });
  return text;
}

function hidden() {
  muneco.classList.add("hidden");
  text_1.classList.add("hidden");
  text_2.classList.add("hidden");
  container_result[0].classList.add("activate");
  container_result[1].classList.add("activate");
  text_result.classList.add("container_result");
}

document.getElementById("btn_copy").addEventListener("click", () => {
  const content = text_result.textContent;

  if (content) {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        document.getElementById("btn_copy").innerText = "¡Copiado!";
      })
      .catch((err) => {
        console.error("Error al copiar: ", err);
      });
  }
});
