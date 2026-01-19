# Melhorias Sugeridas – Sistema Reservas Online

Este documento reúne sugestões de melhoria identificadas durante a execução dos testes funcionais e exploratórios no sistema **Reservas Online (hotel 1111)**. As sugestões abaixo **não são bugs**, mas oportunidades de evolução focadas em **experiência do usuário (UX)**, **clareza de fluxo** e **robustez do sistema**.

---

## 1. Disponibilizar opção de cadastro/login desde o início do fluxo

**Descrição:**
Atualmente, o usuário só é informado da necessidade de login/cadastro ao tentar finalizar a reserva. Como usuária, seria desejável ter a opção de **Entrar / Cadastrar** visível desde o início do fluxo (por exemplo, no topo da página).

**Impacto:**

* Reduz fricção no momento do pagamento
* Evita abandono de reserva no final do fluxo
* Aumenta a previsibilidade e confiança do usuário

**Tipo:** Melhoria de UX

---

## 2. Preservar número de hóspedes ao alterar datas

**Descrição:**
Na página inicial, após selecionar a quantidade de hóspedes (adultos/crianças/free), ao alterar apenas o período da consulta, o sistema zera automaticamente os campos de hóspedes.

Esse comportamento ocorre mesmo quando a usuária deseja apenas ajustar as datas, mantendo a mesma composição de pessoas.

**Sugestão:**
Ao alterar somente as datas da reserva, o sistema deve manter a seleção atual de hóspedes como padrão e apenas revalidar as regras de disponibilidade e ocupação.

Caso a composição de hóspedes não seja válida para o novo período ou para o quarto selecionado, o sistema deve preservar os valores informados e exibir uma mensagem clara orientando o ajuste necessário.

**Critérios de aceite (exemplo):**

Dado que selecionei 2 adultos e 1 criança, quando altero apenas as datas e confirmo, então o sistema deve manter 2 adultos e 1 criança selecionados.

Se a composição não for válida para o novo período ou quarto, o sistema deve manter os valores e exibir uma mensagem informando o motivo e o que precisa ser ajustado.

**Impacto:**

* Reduz fricção no fluxo de reserva
* Evita retrabalho desnecessário para a usuária
* Melhora a experiência e reduz chances de abandono

**Tipo:** Melhoria de usabilidade / Experiência do usuário (UX)

---

## 3. Validação de e-mail mais alinhada ao padrão comum

**Descrição:**
O sistema considera e-mails como `a@a.com` inválidos, aceitando apenas domínios mais completos (ex.: `@hotmail.com`).

**Sugestão:**

* Avaliar alinhamento da validação ao padrão RFC de e-mails
* Ou deixar essa regra explícita ao usuário na mensagem de erro

**Impacto:**

* Evita confusão durante o cadastro
* Reduz erros repetidos

**Tipo:** Melhoria funcional / UX

---

## 4. Melhorar feedback visual em validações de formulário

**Descrição:**
As validações são exibidas apenas em mensagens de texto, sem destaque visual nos campos inválidos.

**Sugestão:**

* Destacar campos obrigatórios não preenchidos
* Exibir mensagens próximas ao campo com erro

**Impacto:**

* Facilita correção pelo usuário
* Melhora acessibilidade

**Tipo:** Melhoria de usabilidade

---

## 5.  Melhorar visualização das imagens dos quartos (zoom)

**Descrição:**  
Na seção de imagens dos quartos, ao clicar nas miniaturas para ampliar (zoom), as imagens exibidas continuam pequenas, dificultando a visualização adequada do ambiente, dos detalhes do quarto e dos diferenciais da acomodação.

Atualmente, as miniaturas possuem dimensões reduzidas (88x60), e a experiência de zoom não entrega uma visualização realmente ampliada.

**Sugestão:**  
Implementar uma visualização ampliada adequada ao clicar nas imagens, como:
- Modal com imagem em tamanho maior  
- Lightbox com possibilidade de navegação entre fotos  
- Imagem responsiva ocupando melhor a área disponível da tela  

**Impacto:**
- Melhora a experiência do usuário  
- Aumenta a confiança na escolha do quarto  
- Reduz dúvidas antes da compra  
- Pode impactar positivamente a conversão da reserva  

**Tipo:** Melhoria de usabilidade / Experiência do usuário (UX)

**💡 Observação adicional:**  
A visualização clara das imagens é um fator importante na decisão de compra, especialmente em sistemas de reserva de hospedagem.

---

## 6. Melhorar responsividade do layout (mobile e diferentes resoluções)

**Descrição:**  
Durante os testes em diferentes navegadores e também no celular, o layout não se adapta bem a telas menores e a diferentes resoluções. Elementos ficam apertados, exigem rolagem horizontal e a leitura/interação com campos e botões fica prejudicada.

**Sugestão:**  
Ajustar o layout para comportamento responsivo (mobile-first), garantindo boa usabilidade em telas pequenas e médias. Exemplos:
- Utilizar grid/flex responsivo e breakpoints (ex.: 320px, 768px, 1024px)
- Evitar larguras fixas e posicionamentos absolutos que quebram o layout
- Melhorar tamanhos de botões e inputs para toque (acessibilidade)
- Garantir que modais/zoom de imagem funcionem bem em mobile

**Impacto:**
- Melhora a experiência em dispositivos móveis
- Reduz fricção e abandono no fluxo de reserva
- Aumenta acessibilidade e facilidade de navegação
- Evita rolagem horizontal e “quebras” de layout

**Tipo:** Melhoria de usabilidade / Responsividade / Acessibilidade (UX)

**💡 Observação adicional:**  
Em plataformas de reserva, a experiência mobile é crítica, pois muitos usuários pesquisam e reservam diretamente pelo celular.

---

## Considerações finais

As melhorias sugeridas acima visam tornar o sistema mais intuitivo, previsível e amigável ao usuário final. Todas foram identificadas durante testes práticos e exploratórios, complementando os cenários automatizados e manuais executados no desafio técnico.
