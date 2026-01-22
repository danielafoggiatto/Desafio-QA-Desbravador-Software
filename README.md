# Testes Automatizados – Desafio QA | Desbravador Software

Este repositório contém a implementação do **teste técnico prático de QA**, com foco na validação do fluxo de reservas online do sistema da **Desbravador Software**.

O projeto foi desenvolvido com uma abordagem **realista de Qualidade de Software**, priorizando:
- análise funcional
- entendimento das regras de negócio
- identificação de riscos
- documentação clara em BDD
- automação apenas onde há ganho real de valor

---

## 🎯 Objetivo do Projeto

Demonstrar competências em QA que vão além da automação, incluindo:

- Escrita de cenários em **BDD (Gherkin)** como documentação viva
- Identificação de **regras implícitas** no sistema
- Priorização de cenários por **criticidade**
- Automação **E2E** de um fluxo completo e representativo
- Uso de **Playwright + Cucumber + TypeScript**
- Organização em **Page Object Model (POM)**
- Visão crítica de **UX e usabilidade**

---

## 🧪 Estratégia adotada

### 📌 Importante
> **Nem todos os cenários foram automatizados propositalmente.**

A automação foi aplicada **somente ao fluxo de maior valor e complexidade**:  
➡️ **Reserva Completa (E2E)**

Os demais arquivos `.feature` funcionam como:

- **Fixtures de teste**
- **Documentação funcional**
- **Base para testes manuais**
- **Referência para futuras automações**

Essa decisão considera:
- instabilidades do ambiente
- comportamento inconsistente de alguns componentes de UI
- custo vs benefício da automação
- boas práticas de QA em produtos reais

---

## 🧠 Critérios de escolha dos cenários (por criticidade)

### 🔴 1. Regras de hóspedes (adulto obrigatório)
Uma reserva não pode existir sem ao menos um adulto.

Cenários documentam:
- bloqueio quando há apenas crianças
- ajuste automático para 1 adulto
- permissão correta de avanço

📄 `hospedes.feature`

---

### 🔴 2. Capacidade máxima dos quartos
Os quartos possuem regras de ocupação mínima e máxima (minpax / maxpax), identificadas no HTML, mas não claramente expostas ao usuário.

Cenários validam:
- avanço indevido ao exceder capacidade
- riscos operacionais e de cobrança

📄 `capacidade-quarto.feature`

---

### 🔴 3. Consistência entre hóspedes solicitados e acomodados
Após a seleção do quarto, o sistema apresenta diferentes resumos.

Cenários garantem:
- coerência entre busca, acomodação e resumo
- prevenção de inconsistências visuais e lógicas

📄 `consistencia-hospedes.feature`

---

### 🟠 4. Autenticação e cadastro
Fluxos bloqueantes para finalização da reserva.

Cenários cobrem:
- validações de campos
- mensagens de erro
- login e cadastro

📄 `login.feature`  
📄 `cadastro.feature`

---

### 🟠 5. Pagamento e aceite de políticas
Aspecto funcional e legal.

Cenários documentam:
- obrigatoriedade do aceite
- validações de pagamento
- reCAPTCHA

📄 `pagamento.feature`

---

### 🟡 6. Validação de período da reserva
Cenários voltados à integridade das datas e UX do calendário.

📄 `validacao_periodo_reserva.feature`

---

## 🚀 Automação Implementada (E2E)

### ✅ Fluxo automatizado

A automação foi aplicada **exclusivamente** ao fluxo:

📄 **`reserva-completa.feature`**

Esse cenário cobre:
- busca inicial
- seleção de hóspedes
- escolha de quarto
- configuração de acomodação
- dados dos hóspedes
- dados de contato
- pagamento
- aceite de políticas
- tentativa de finalização

Trata-se de um **E2E realista**, com:
- waits defensivos
- tratamento de instabilidades de UI
- validações progressivas
- foco em confiabilidade do teste

---

## 🤖 Tecnologias Utilizadas

- **Playwright**
- **Cucumber (BDD / Gherkin)**
- **TypeScript**
- **Page Object Model (POM)**
- **Cucumber HTML Report**
- **GitHub Actions (CI)**

📋 Melhorias Identificadas

As oportunidades de melhoria encontradas durante os testes estão documentadas em:

📄 melhorias-sugeridas.md

Incluem:

UX

mensagens de erro

consistência de dados

regras não explícitas

comportamento inesperado de componentes

▶️ Como Executar

Instalar dependências:

npm install


Executar automação E2E:

npx cucumber-js --tags @e2e


Abrir relatório:

reports/cucumber-report.html

✅ Considerações Finais

Este projeto reflete uma atuação de QA focada em:

entendimento do produto

visão crítica de negócio

qualidade acima de quantidade

automação com propósito

documentação clara e reutilizável

A automação foi usada como ferramenta, não como fim.

Obrigado pela oportunidade 🚀

```text
