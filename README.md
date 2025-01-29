# Personal Loan App

Este é um case desenvolvido para demonstrar a criação de uma aplicação de simulação de empréstimos. O objetivo do projeto é simular de maneira clara e eficiente as condições de pagamento de um empréstimo, com base em dados como valor solicitado, taxa de juros e prazo.

0 projeto foi desenvolvido utilizando **TypeScript** e **Next.js**, garantindo uma aplicação escalável e de alto desempenho, focada em uma experiência de usuário ágil e eficiente.

## Rodando o projeto

**Clone o repositório:**

```bash
git clone https://github.com/allanferreira/personal-loan-app.git
cd personal-loan-app
```

**Instale as dependências:**

```bash
npm i
```

**Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

## Comandos

Aqui estão os principais comandos para rodar o projeto:

- **`dev`**: Para rodar o servidor de desenvolvimento, utilizando o **Turbopack** para maior performance.
- **`build`**: Para criar a versão otimizada para produção.
- **`start`**: Para rodar a versão de produção do aplicativo.
- **`lint`**: Para verificar se o código segue os padrões de qualidade e estilo definidos.
- **`test`**: Para executar os testes unitários e garantir que o código está funcionando corretamente.

## Sobre o projeto

### Funcionalidades

A aplicação oferece uma simulação de empréstimo com um formulário **minúsculo** de duas etapas, seguidos da tela de resultado da simulação.

1. **Etapa um:** O usuário informa o **valor do empréstimo** e o **prazo de pagamento** em meses.
2. **Etapa dois:** O usuário informa sua **data de nascimento**, sendo opcional o **nome** e **renda**.
3. **Resultado:** O sistema exibe o resultado da simulação, mostrando o **valor total a ser pago**, o **valor das parcelas mensais** e os **juros totais pagos**.

### Tecnologias Utilizadas

As tecnologias mais modernas foram utilizadas para garantir um código limpo, organizado e de fácil manutenção:

- **Next.js**: Para construir a aplicação com foco em performance e escalabilidade.
- **Formik** e **Yup**: Para criar formulários interativos e validar os dados de maneira eficiente.
- **Day.js**: Para manipulação de datas de forma simples e eficaz.
- **Axios**: Para realizar requisições HTTP com alto desempenho.

## Organização e padrões

### Arquitetura Baseada em Componentes

Cada componente é responsável por uma renderização visual específica e pelo seu próprio controle da interação com o usuário. Os componentes são organizados pelo seu propósito, sua características e relação com o negócio.

### Arquitetura em Camadas

1. **Camada de Apresentação:** Responsável pela interação com o usuário, utilizando componentes visuais.
2. **Camada de Aplicação:** Gerencia a comunicação com a API e provê funções reutilizáveis para requisições HTTP.
3. **Camada de Domínio:** Lógica de negócios e regras de domínio.
4. **Camada de Infraestrutura:** Funcionalidades auxiliares para lidar com operações como datas e valores monetários.

### Arquitetura Modular

A aplicação foi dividida em módulos independentes e reutilizáveis, onde cada módulo encapsula uma funcionalidade específica. Essa abordagem é aplicada desde as camadas principais até as mais profundas do projeto. Padrões como High Order Functions, Barrels e Factories são utilizados para viabilizar essa estrutura.

- **app/**: Contém as páginas principais do app, a página de simulação e a página de resultado, onde o usuário vê o cálculo do empréstimo.
- **components/**: Componentes reutilizáveis e focados na interface visual, como campos de formulário e botões, sem lógica de negócios.
- **features/**: Módulos completos de funcionalidades ligados a lógica de negócio, como a simulação de empréstimo, que incluem componentes, hooks, lógica de estado, tipos e utilitários.
- **services/**: Módulos responsáveis pelas requisições à API.
- **domain/**: Módulos responsáveis pela lógica de negócios, como o módulo **loanSimulation**, que contém as fórmulas para o cálculo do empréstimo.
- **utils/**: Funções auxiliares, como formatação de valores monetários, manipulação de datas e geração de identificadores únicos, para tornar o código mais modular e reutilizável.

### Separação de responsabilidades

Algumas boas práticas foram seguidas durante o desenvolvimento deste projeto para garantir a qualidade e a manutenção fácil do código:

- Nunca deve se ter dependências externas ou regras de negócio em arquivos da pasta app.
- Regras de negócio visuais devem estar na pasta features, e regras gerais em domain.
- Toda dependência externa deve estar abstraída em um componente ou função pura nas pastas components ou utils, respectivamente. Essas pastas não contêm regras de negócio.
- Todos os arquivos TypeScript devem ter testes, e todos os módulos importados em um arquivo devem usar mock para garantir apenas o teste do arquivo em questão.

## Considerações Finais

O **Personal Loan App** foi desenvolvido como um case para demonstrar a implementação de um simulador de crédito estruturado de forma modular, escalável e com boas práticas de desenvolvimento. A arquitetura do projeto permite fácil manutenção, reutilização de componentes e uma separação clara das responsabilidades.

Se você chegou até aqui, obrigado pelo interesse! Caso tenha sugestões, feedbacks ou queira contribuir, fique à vontade para abrir uma issue ou um pull request.

🚀 **Bons códigos!**
