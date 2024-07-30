
# Sensores e Imagens

Este repositório contém um projeto desenvolvido com Angular e Ionic, focado na integração e utilização de sensores do dispositivo e leitura de códigos QR. O projeto é hospedado no Firebase.

## Funcionalidades

### 1. Controle de Flash da Câmera

-   A página inicial (`HomePage`) permite ligar e desligar o flash da câmera do dispositivo.
-   Utiliza a API de `MediaDevices` para acessar a câmera e manipular as configurações de vídeo.

### 2. Leitura de Sensores

-   A página de movimento (`MovimentoPage`) permite a leitura dos sensores de acelerômetro e giroscópio do dispositivo.
-   Exibe os dados dos eixos X, Y e Z para ambos os sensores.
-   Permite ativar e desativar os eventos de movimentação do dispositivo.

### 3. Leitura de Códigos QR

-   A página de QR code (`QrcodePage`) permite a leitura de diversos formatos de código de barras e QR codes.
-   Utiliza a biblioteca `@zxing/library` para a leitura dos códigos.
-   Exibe o código lido e permite armazená-lo.

## Tecnologias Utilizadas

-   **Angular**: Framework para desenvolvimento da aplicação.
-   **Ionic**: Framework para desenvolvimento de aplicações híbridas.
-   **Firebase**: Plataforma utilizada para hospedagem do projeto.
-   **@zxing/library**: Biblioteca para leitura de códigos de barras e QR codes.

## Estrutura do Projeto

-   **HomePage**: Página inicial com controle de flash da câmera.
-   **MovimentoPage**: Página para leitura de sensores de movimento.
-   **QrcodePage**: Página para leitura de códigos QR.

## Como Executar o Projeto

1.  Clone o repositório:
    
    `git clone https://github.com/GustavoBritodev/App-de-Sensor-e-Imagens` 
    
2.  Instale as dependências:

    `cd seu-repositorio
    npm install` 
    
3.  Execute a aplicação:
  
    `ionic serve` 
    

----------

**By: Gustavo Brito**
