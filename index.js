const DadosDePrompt = prompt("Insira o Primeiro Valor a ser somado");
const DadosDePromptSegundoValor = prompt("Insira o Segundo Valor");

const resultSoma = Number(DadosDePrompt) + Number(DadosDePromptSegundoValor);
const resultSub = Number(DadosDePrompt) - Number(DadosDePromptSegundoValor);
alert(`a Soma é ${resultSoma}`);
alert(`a Sub é ${resultSub}`);

if (DadosDePrompt === DadosDePromptSegundoValor) {
  alert("Numeros Identicos");
} else {
  const result = Number(DadosDePrompt) - Number(DadosDePromptSegundoValor);
  alert("Numeros nao identicos");
  alert(result);
}

if (DadosDePrompt && DadosDePromptSegundoValor % 2 === 0) {
  alert("par");
} else {
  alert("impar");
}
