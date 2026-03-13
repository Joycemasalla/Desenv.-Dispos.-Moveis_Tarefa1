# Tarefa 1: Introdução ao React Native

Este repositório contém os exercícios da primeira tarefa da disciplina de Programação para Dispositivos Móveis, ministrada pelo professor Thiago Goldoni Thomé.

## 📝 Enunciado

A tarefa consiste em três exercícios práticos para introduzir os conceitos básicos do React Native.

### Exercício 1: Input de usuário e alerta

**Objetivo:** Capturar o nome do usuário através de um `TextInput` e exibir um `Alert` com o valor digitado ao pressionar um `Button`.

### ✅ Requisitos 
1. Importar `TextInput`, `Button`, `Alert`, `View` e `Text`.
2. Utilizar o hook `useState` para armazenar o nome digitado.
3. Renderizar um `TextInput` associado ao estado.
4. Criar um `Button` que, ao ser pressionado, chama `Alert.alert(...)` para exibir o nome.

### Exercício 2: Imagens e ScrollView

**Objetivo:** Exibir uma sequência de imagens e utilizar `ScrollView` para permitir a rolagem.

### ✅ Requisitos 
1. Adicionar 6 imagens à pasta `assets/`.
2. Importar as imagens no código.
3. Utilizar `ScrollView` para envolver os componentes `Image`.
4. Aplicar estilos para definir a largura e altura das imagens.

### Exercício 3: Lista de itens dinâmica

**Objetivo:** Criar uma lista dinâmica onde o usuário pode adicionar itens.

### ✅ Requisitos 
1. Utilizar `useState` para armazenar a lista de itens e o texto digitado.
2. Ao clicar em um `Button`, adicionar o texto do `TextInput` à lista.
3. Limpar o `TextInput` após a adição.
4. Exibir os itens da lista dentro de um `ScrollView` utilizando o método `map`.

## 📁 Estrutura do Repositório

O repositório está organizado da seguinte forma:

```
.
├── Exercicio1/
│   ├── App.tsx
│   └── ...
├── Exercicio2/
│   ├── App.tsx
│   └── assets/
│       ├── img1.png
│       └── ...
└── Exercicio3/
    ├── App.tsx
    └── ...
```

Cada exercício está contido em sua própria pasta, com o código principal no arquivo `App.tsx`.

## 🚀 Como Executar

Cada exercício é um projeto Expo independente. Para executá-los, siga os passos abaixo:

1. **Navegue até a pasta do exercício:**
   ```bash
   cd Exercicio1
   ```
   (ou `Exercicio2`, `Exercicio3`)

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```
   ou
   ```bash
   expo start
   ```

4. **Execute no seu dispositivo:**
   - Baixe o aplicativo **Expo Go** na [App Store](https://apps.apple.com/us/app/expo-go/id982107779) ou [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent).
   - Escaneie o QR Code exibido no terminal para abrir o aplicativo no seu celular.

## 👨‍💻 Autor

Joyce Masalla

## 👨‍🏫 Professor

Thiago Goldoni Thomé
(thiago.thome@professor.faminas.edu.br)
