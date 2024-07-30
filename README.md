
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

    `cd seu-repositorio`
    
    `npm install` 
    
4.  Execute a aplicação:
  
    `ionic serve` 
    

----------

**By: Gustavo Brito**


# Sensors and Images

This repository contains a project developed with Angular and Ionic, focused on integrating and utilizing device sensors and reading QR codes. The project is hosted on Firebase.

## Features

### 1. Camera Flash Control

-   The home page (`HomePage`) allows you to turn the device's camera flash on and off.
-   Uses the `MediaDevices` API to access the camera and manipulate video settings.

### 2. Sensor Reading

-   The motion page (`MovimentoPage`) allows the reading of the device's accelerometer and gyroscope sensors.
-   Displays data for the X, Y, and Z axes for both sensors.
-   Allows enabling and disabling device motion events.

### 3. QR Code Reading

-   The QR code page (`QrcodePage`) allows reading various barcode and QR code formats.
-   Uses the `@zxing/library` for reading codes.
-   Displays the read code and allows storing it.

## Technologies Used

-   **Angular**: Framework for application development.
-   **Ionic**: Framework for hybrid application development.
-   **Firebase**: Platform used for project hosting.
-   **@zxing/library**: Library for reading barcodes and QR codes.

## Project Structure

-   **HomePage**: Home page with camera flash control.
-   **MovimentoPage**: Page for reading motion sensors.
-   **QrcodePage**: Page for reading QR codes.

## How to Run the Project

1.  Clone the repository:
    
    `git clone https://github.com/GustavoBritodev/App-de-Sensor-e-Imagens`
    
2.  Install the dependencies:
    
    `cd your-repository`
    
    `npm install`
    
3.  Run the application:
    
    `ionic serve`
    

----------

**By: Gustavo Brito**
