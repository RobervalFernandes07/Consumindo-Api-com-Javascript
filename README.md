# Consumindo API com JavaScript
Este projeto demonstra como consumir uma API REST usando JavaScript, utilizando a função fetch e async/await para realizar uma requisição assíncrona. O código se conecta à API DummyJSON e exibe a resposta no console.

Funcionalidade
Realiza uma requisição GET à API fornecida.
Verifica se a resposta foi bem-sucedida (código de status 200).
Converte a resposta para JSON.
Exibe os dados retornados no console do navegador.
Como executar o código

1. Pré-requisitos:
   Navegador moderno com suporte para fetch e async/await.
   
Passos:

3. Passos:
   Copie o código abaixo para um arquivo .html ou .js, dependendo do ambiente:

       const URL = 'https://dummyjson.com/products';
    
    async function chamarAPi() {
   
   const resp = await fetch(URL);
   
   if (resp.status === 200) {
   const obj = await resp.json();
   console.log(obj);
        }
    }
    
    chamarAPi();

Se estiver em um arquivo .html, adicione o script ao elemento <script> ou carregue o arquivo .js com <script src="seu-arquivo.js"></script>.

Execute:

Abra o arquivo em um navegador.

Abra o console do desenvolvedor (Ctrl+Shift+I no Chrome).

Veja os dados retornados pela API exibidos no console.
API Usada
URL: https://dummyjson.com/products


Esta API retorna uma lista de produtos em formato JSON. Para mais informações sobre a API, visite DummyJSON.

# Observações

Caso a API retorne um erro, ele não será tratado neste código. Recomenda-se adicionar um bloco try-catch para lidar com possíveis exceções.

Teste o código em ambientes seguros (HTTPS) para evitar problemas de CORS.
