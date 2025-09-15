# Relatório — Aplicativo Mobile Padaria Tia Rosa

---
title: "Relatório — Aplicativo Mobile Padaria Tia Rosa"
author: "Lucas Coelho França — Matrícula: 2386048124"
date: "2025-09-14"
geometry: margin=1in
fontsize: 12pt
lang: pt-BR
---

## Sumário
Documentação da proposta técnica e comercial do aplicativo mobile desenvolvido para a Padaria Tia Rosa. O objetivo é modernizar os canais de atendimento, reduzir filas, ampliar vendas por pré-encomendas e ofertas, e proporcionar uma experiência digital que gere fidelização e aumento do faturamento.

A composição visual da tela inicial prioriza a exposição de promoções e a conversão rápida: um banner de destaque contextualiza a oferta do momento, seguido por uma vitrine de produtos em promoção que apresenta o preço original riscado e o preço promocional em evidência. Os cards das ofertas permitem acesso direto ao detalhe do produto e incluem controles para ajuste de quantidade inline, o que facilita compras em maior volume (por exemplo, pães e doces para consumo familiar). 

Produtos que exigem preparação prévia são identificados para encaminhar o usuário ao fluxo de pré-encomenda, onde são coletados horário e contato. Os valores promocionais substituem os preços normais no cálculo do carrinho e alterações de quantidade na vitrine atualizam imediatamente o estado do carrinho.

---

## 1. DESCRIÇÃO
Para garantir uma melhora constante na qualidade e destaque no mercado, é necessário investir em tecnologia. O aplicativo proposto permite aos clientes visualizar o cardápio, aproveitar ofertas, realizar pré-encomendas e finalizar compras de forma ágil. A solução atende regras de negócio típicas de padarias: ofertas com preço promocional, pré-encomenda de itens maiores (bolos, tortas), seleção de quantidades e finalização com resumo do pedido.

---

## 2. OBJETIVO
Apresentar uma proposta de aplicativo mobile para a Padaria Tia Rosa que:

- Reduza filas e o tempo de atendimento no ponto físico;
- Aumente canais de venda por encomenda e pedidos antecipados;
- Destaque ofertas semanais para estimular vendas por impulso;
- Ofereça um fluxo de compra simples, seguro e rastreável.

---

## 3. SITUAÇÃO-PROBLEMA
Identificou-se que o produto mais demandado é o pão e que problemas operacionais impactam faturamento:

- Filas longas e espera para atendimento;
- Clientes deslocam-se sem garantia de disponibilidade de itens específicos (bolos por encomenda);
- Falta de diferencial digital perante concorrentes locais.

O aplicativo atua como mitigador destas questões, permitindo pedidos antecipados, vitrines de ofertas e um fluxo de pagamento/retirada mais organizado.

---

## 4. Visão Geral das Funcionalidades Implementadas
A seguir, as funcionalidades implementadas no aplicativo, com visão funcional e regras de negócio associadas.

- Vitrine de Ofertas
  - Apresenta produtos marcados como `oferta` com preço antigo riscado e preço promocional em destaque.
  - Regras: quando `precoOferta` existe, o total do pedido e linha do item adotam o `precoOferta`.

- Catálogo / Cardápio
  - Listagem completa de produtos com busca incremental (debounced) por prefixo.
  - Regras: busca realiza comparação por prefixo (ex.: "Bo" encontra "Bolo").

- Detalhes do Produto
  - Página com imagem, descrição, preços (original e promocional) e controle de quantidade.

- Carrinho
  - Exibição de itens, edição de quantidade por input numérico, remoção de itens.
  - Exibe preço unitário (com strike-through quando houver preço antigo) e preço promocional,
  - O total do carrinho considera `precoOferta` quando existente.
  - Botão "Finalizar Compra" gera um snapshot do pedido e abre a tela de resumo (Order Summary).

- Resumo do Pedido (Checkout)
  - Exibe o snapshot do pedido enviado pelo carrinho (itens, quantidades, total), coleta nome, telefone e método de pagamento (mockado), valida dados e confirma a compra.
  - Após confirmação, o carrinho é limpo.

- Pré-Encomenda
  - Fluxo separado para pré-encomendas (itens marcados como `preorder`), coleta de horário desejado e quantidades específicas.

- Contador de Itens no Carrinho (Badge)
  - Indicador dinâmico no menu inferior que mostra a quantidade total de itens no carrinho.

- Persistência/Mock
  - Dados de produtos são carregados a partir de um arquivo de mock (`assets/mock.json`) que contém campos: `id`, `nome`, `preco`, `descricao`, `imagem`, `oferta`, `precoOferta`, `preorder`.

---

## 5. Tela por Tela — Descrição 
A seguir, cada tela do aplicativo com a respectiva funcionalidade, regras de apresentação e exemplos de uso. Para cada tela existe espaço para inserir uma captura (print) e sua explicação.

### 5.1 Tela Inicial 
Objetivo: promover ofertas relevantes da semana e direcionar para pré-encomenda.
Funcionalidades visíveis:

- Banner principal com destaque visual para vitrines;
- Seção "Ofertas da Semana" com cards exibindo imagem, descrição curta, preço antigo (riscado) e preço promocional;
- Acesso direto ao detalhamento do produto e botão de "Fazer Encomenda".

<div style="text-align:center">
![](image-13.png){ width=0.45\textwidth }
</div>

A organização desta tela combina elementos de comunicação e ação: o banner superior comunica a identidade visual e a promoção atual; a grade de ofertas segue em formato de cards que destacam imagem, nome, preço antigo riscado e preço promocional. Cada card expõe ações rápidas — visualização do detalhe do produto, ajuste de quantidade e opção de pré-encomenda — alinhadas ao comportamento esperado de clientes de padarias (compras repetidas e em volume). A ordenação prioriza produtos marcados como `oferta`, e a sinalização visual do desconto contribui para a percepção imediata de valor, incentivando decisões de compra por impulso controladas pelas regras de negócio definidas no sistema.

Regras de negócio relevantes:

- Ofertas exibem `precoOferta` e substituem o preço na soma do carrinho;
- Produtos com `preorder = true` aparecem em fluxo de pré-encomenda.

---

### 5.2 Catálogo / Cardápio 
Objetivo: apresentar todo o portfólio de produtos e permitir seleção rápida.
Funcionalidades:
- Busca com debounce e correspondência por prefixo;
- Cada item apresenta imagem, nome, descrição breve, preço (com oferta quando aplicável);
- Controles inline para ajustar quantidade (edição numérica diretamente no card) e adicionar ao carrinho.

<div style="text-align:center">
![](image-14.png){ width=0.45\textwidth }
</div>

Regras de negócio:
- Busca retorna resultados por prefixo (ex.: "Bo" retorna "Bolo");
- Edição de quantidade atualiza imediatamente o carrinho e o total.

---

### 5.3 Detalhes do Produto 
Objetivo: fornecer informação completa para o cliente (ingredientes, tamanho, preço, imagens) e permitir ajuste de quantidade.
Funcionalidades:
- Exibição de imagem em destaque, descrição completa, preços e controle de quantidade com incrementos;
- Botão para adicionar ao carrinho e botões de ajuste rápido.

<div style="text-align:center">
![](image-15.png){ width=0.45\textwidth }
</div>

---

### 5.4 Carrinho 
Objetivo: consolidar itens selecionados, permitir revisão e executar finalização da compra.
Funcionalidades:
- Listagem de itens adicionados com quantidade editável (input numérico), preço unitário (mostrando preço antigo riscado quando há oferta) e remoção de itens;
- Visualização do total (calcula `precoOferta` quando aplicável);
- Botão "Finalizar Compra" que abre a tela de resumo (Order Summary) com um snapshot do pedido para confirmação.

<div style="text-align:center">
![](image-16.png){ width=0.45\textwidth }
</div>

Regras de negócio:
- Quantidade zero remove o item automaticamente;
- Totais utilizam `precoOferta` quando informado para cada item;
- A confirmação no resumo é o gatilho para limpar o carrinho.

---

### 5.5 Resumo do Pedido / Checkout (Order Summary)
Objetivo: apresentar dados finais do pedido e coletar informações do cliente para concluir a operação.
Funcionalidades:

- Exibição do snapshot de pedido (itens, quantidades, totais), formulário para inserir nome e telefone e seleção de método de pagamento (mockado: Dinheiro, Cartão, Pix);
- Validações simples: nome e telefone obrigatórios;
- Confirmação final que aciona o processamento (mock) e limpa o carrinho.

<div style="text-align:center">
![](image-17.png){ width=0.45\textwidth }
</div>

Regras de negócio:

- O resumo pode receber um snapshot enviado pelo carrinho ou usar o estado corrente do carrinho;
- Confirmação sem dados (nome/telefone) bloqueia a conclusão.

---

### 5.6 Pré-Encomenda (PreOrder)
Objetivo: permitir pedidos de produtos que precisam preparação ou encomenda prévia (ex.: bolos grandes).
Funcionalidades:

- Lista de produtos com `preorder = true` disponível para seleção;
- Coleta de horário desejado, contato e quantidades específicas;
- Geração de resumo específico de pré-encomenda.

<div style="text-align:center">
![](image-18.png){ width=0.45\textwidth }
</div>

Regras de negócio:

- Produtos marcados `preorder` aparecem nesta tela;
- Pré-encomenda exige preenchimento de contato e horário antes de confirmar.

---

### 5.7 Perfil / Sobre Nós
Objetivo: apresentar informações institucionais da padaria e permitir acesso a histórico (quando implementado) e dados de contato.

<div style="text-align:center">
![](image-19.png){ width=0.45\textwidth }
</div>

---

### 5.8 Funcionalidades e Particularidades (prints únicos)
Objetivo: apresentar capturas que evidenciem comportamentos e elementos de interface implementados, cada um uma única vez.


<div style="text-align:center">
![](image-20.png){ width=0.35\textwidth }
</div>

Legenda: mostra o controle numérico dentro do `ProductCard` permitindo ajuste de quantidade sem sair da lista.

<div style="text-align:center">
![](image-21.png){ width=0.18\textwidth }
</div>

Legenda: exibe o badge dinâmico no ícone do `Cart` na barra inferior mostrando o total de itens do carrinho.

<div style="text-align:center">
![](image-22.png){ width=0.35\textwidth }
</div>

Legenda: ilustra o preço antigo riscado e o `precoOferta` em destaque no card de oferta.

<div style="text-align:center">
![](image-23.png){ width=0.45\textwidth }
</div>

Legenda: captura do formulário de pré-encomenda com seleção de produto marcado `preorder`, campo de horário e contato.

<div style="text-align:center">
![](image-24.png){ width=0.45\textwidth }
</div>

Legenda: mostra a tela `Order Summary` aberta a partir do botão "Finalizar Compra" no carrinho com o snapshot de itens e total.

## 6. Regras de Negócio Resumidas

- Ofertas: quando `precoOferta` está presente, o item usa esse valor nas somas de carrinho e exibe o preço antigo riscado;
- Quantidades: quantidade é editável tanto no cardápio/itens quanto no carrinho; quantidade 0 remove o item;
- Pré-encomenda: itens marcados `preorder` são destinados a um fluxo específico que coleta horário e contato;
- Checkout: o carrinho envia um snapshot (itens + total) para a tela de resumo; o pedido só é finalizado após confirmação na tela de resumo.

---

## 7. Arquitetura e Tecnologias

- Frontend: React Native (Expo)
- Tipagem: TypeScript
- Navegação: React Navigation (Bottom Tabs + Native Stack)
- Dados Mock: `assets/mock.json` em ambiente de demonstração
- Padrões: hooks para estado (ex.: `useCart`), serviço de produto (`productService`) para abstração de dados

---

## 8. Experiência do Usuário (UX) e Considerações Comerciais

- Vitrine de ofertas posicionada no topo para gerar conversão imediata;
- Edição rápida de quantidade em cards reduz atrito para compras repetidas e para clientes que compram muitos itens (ex.: padaria de bairro);
- Pré-encomenda aumenta ticket médio com vendas de bolos e tortas para eventos;
- Botão "Finalizar Compra" gera um resumo antes da confirmação para reduzir erros operacionais.








