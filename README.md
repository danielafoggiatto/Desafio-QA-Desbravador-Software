Perfeito — sua estrutura está **excelente** e bem acima do esperado para um teste técnico 👏
Vou te entregar um **README.md profissional**, claro, organizado e que valoriza muito o seu raciocínio como QA.

Você pode copiar e colar direto no `README.md`.

---

````md
# Testes Automatizados – Desafio QA | Desbravador Software

Este repositório contém a implementação do **teste técnico prático de QA**, com foco na validação do fluxo de reservas online do sistema da Desbravador Software.

O objetivo principal deste projeto é demonstrar habilidades em:
- Análise de requisitos
- Criação de cenários de teste em **BDD (Gherkin)**
- Identificação de cenários críticos
- Automação de testes utilizando **Playwright + Cucumber**
- Organização de testes com **Page Object Model (POM)**
- Visão crítica de **qualidade, usabilidade e experiência do usuário**

---

## 🧪 Escopo do Teste

O fluxo testado contempla:

- Seleção de período de reserva
- Regras de hóspedes (adultos, crianças e free)
- Seleção de quartos e tarifas
- Validação de capacidade dos quartos
- Consistência de informações exibidas ao usuário
- Login e cadastro de usuário
- Aceite de termos e condições
- Tentativa de finalização da reserva
- Registro de melhorias de usabilidade identificadas durante os testes

---
## 🧠 Critérios de escolha dos cenários de teste (por ordem de criticidade)

Os cenários de teste foram definidos com base em criticidade funcional, impacto no negócio e experiência do usuário, priorizando falhas que podem bloquear a reserva, gerar inconsistências operacionais ou causar abandono do fluxo.

🔴 1. Regras de hóspedes (adultos obrigatórios)

Este é o ponto mais crítico do fluxo, pois uma reserva não pode existir sem ao menos um adulto.

Foi priorizado um cenário que valida:

Bloqueio da reserva quando há apenas crianças

Permissão de avanço quando existe pelo menos um adulto

Esse tipo de regra é essencial para garantir a validade da hospedagem e evitar reservas inconsistentes.

Arquivo relacionado:

hospedes.feature

🔴 2. Capacidade máxima dos quartos

Cada tipo de quarto possui limites mínimos e máximos de ocupação (minpax e maxpax), identificados no HTML, porém não exibidos claramente ao usuário.

Foram criados cenários para validar se o sistema:

Bloqueia o avanço quando a capacidade é excedida

Permite avançar indevidamente (comportamento observado)

Exibe ou não mensagens orientativas

Mesmo quando o sistema permite avançar até etapas posteriores (login/pagamento), esse comportamento foi documentado como risco funcional.

Arquivo relacionado:

capacidade-quarto.feature

🔴 3. Consistência entre hóspedes solicitados e acomodados

Após selecionar um quarto, o sistema exibe dois resumos distintos:

Hóspedes solicitados

Hóspedes acomodados

Esse cenário foi priorizado para garantir que:

As informações exibidas ao usuário sejam coerentes

Não haja divergência visual ou lógica entre os dados selecionados e os dados processados pelo sistema

Inconsistências nesse ponto podem gerar erros de cobrança, dúvidas do usuário e falhas operacionais.

Arquivo relacionado:

consistencia-hospedes.feature

🟠 4. Autenticação e cadastro obrigatórios

A autenticação é uma etapa bloqueante para finalização da reserva.

Os cenários validam:

Redirecionamento correto para login/cadastro

Validação de campos obrigatórios no cadastro

Mensagens adequadas para credenciais inválidas

Esses testes garantem que o sistema não permita avançar sem um usuário válido e que forneça feedback claro.

Arquivos relacionados:

login.feature

cadastro.feature

🟠 5. Aceite de termos e condições

O aceite dos termos é uma exigência funcional e legal.

Foi priorizado um cenário que garante que:

O usuário não consiga continuar sem aceitar os termos

A mensagem exibida seja clara e orientativa

Arquivo relacionado:

termos-e-condicoes.feature

🟡 6. Validação de período de reserva

Os cenários de período garantem que:

Datas inválidas não sejam aceitas

O sistema se comporte corretamente ao selecionar datas iguais ou períodos inconsistentes

O fluxo siga corretamente após ajuste de datas

Arquivo relacionado:

validacao_periodo_reserva.feature

🟡 7. Fluxo principal de reserva

Por fim, foi criado um cenário de fluxo completo, simulando o comportamento real do usuário do início ao fim.

Mesmo com limitações do ambiente de teste (ex.: falha no pagamento), esse cenário permite validar:

Encadeamento das etapas

Pontos de falha reais

Estabilidade do fluxo principal

Arquivo relacionado:

reserva-completa.feature

---

## 📂 Estrutura do Projeto

```text
TESTES-DESBRAVADOR
├── .github/workflows
│   └── playwright.yml        # Pipeline de CI
├── features                  # Cenários BDD (Gherkin)
│   ├── cadastro.feature
│   ├── login.feature
│   ├── hospedes.feature
│   ├── capacidade-quarto.feature
│   ├── consistencia-hospedes.feature
│   ├── validacao_periodo_reserva.feature
│   ├── termos-e-condicoes.feature
│   └── reserva-completa.feature
├── steps                     # Implementação dos steps (Cucumber)
├── pages                     # Page Objects (POM)
├── support                   # Hooks, locators, world, types
│   ├── hooks.ts
│   ├── locators.ts
│   ├── world.ts
│   └── types.d.ts
├── reports
│   └── cucumber-report.html  # Relatório de execução
├── melhorias-sugeridas.md    # Melhorias de usabilidade e UX
├── playwright.config.ts
├── cucumber.js
├── package.json
├── tsconfig.json
└── README.md
````

---

## 🧠 Estratégia de Testes

Os cenários foram escritos priorizando:

* **Caminhos críticos** do negócio
* **Validações obrigatórias** (ex.: adulto obrigatório, termos)
* **Consistência de dados exibidos ao usuário**
* **Regras implícitas identificadas no HTML/DOM**
* Separação clara de responsabilidades entre:

  * Busca inicial
  * Seleção de quarto
  * Autenticação
  * Reserva

Sempre que possível, foram utilizados:

* `Background` para evitar repetição
* `Scenario Outline` para validações em tabela
* Linguagem clara e orientada ao comportamento do usuário

---

## 🤖 Automação

* Framework: **Playwright**
* BDD: **Cucumber (Gherkin)**
* Linguagem: **TypeScript**
* Arquitetura: **Page Object Model (POM)**
* Relatórios: **Cucumber HTML Report**
* CI: **GitHub Actions**

A automação foi aplicada principalmente para:

* Fluxos críticos
* Validações de regras
* Demonstração de conhecimento técnico
  Sem forçar a automação em pontos instáveis do ambiente.

---

## 📋 Melhorias Identificadas

Durante os testes exploratórios e automatizados, foram identificadas diversas oportunidades de melhoria, documentadas no arquivo:

📄 **`melhorias-sugeridas.md`**

Exemplos:

* Preservar número de hóspedes ao alterar datas
* Melhorar mensagens de indisponibilidade
* Exibir capacidade mínima/máxima dos quartos
* Melhorar visualização de imagens (zoom)
* Ajustar responsividade para dispositivos móveis

Esses pontos não impedem o uso do sistema, mas impactam diretamente a **experiência do usuário**.

---

## 🚀 Como Executar o Projeto

1. Instalar dependências:

```bash
npm install
```

2. Executar os testes:

```bash
npx playwright test
```

3. Gerar relatório:

```bash
npx cucumber-js
```

4. Abrir relatório:

```text
reports/cucumber-report.html
```

---

## ✅ Considerações Finais

Este projeto foi desenvolvido com foco não apenas em “testar”, mas em **entender o produto**, seus fluxos e impactos para o usuário final.

O material entregue contempla:

* Testes funcionais
* Automação
* Análise crítica
* Documentação clara
* Organização de código

Obrigado pela oportunidade de participar do processo 🚀

```
