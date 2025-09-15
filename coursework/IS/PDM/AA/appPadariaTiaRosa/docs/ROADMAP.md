# Roadmap: Implementação sequencial até o estado da arte

Objetivo: planejar e rastrear as mudanças necessárias para completar o app "Padaria Tia Rosa" conforme pedidos (Perfil com texto expandido, Início com destaques, Cardápio exibindo mocks, documentação e checklist de implementação).

Observações sobre rastreabilidade: cada passo indica o(s) arquivo(s) afetado(s) com caminhos do filesystem (`src/...`) e símbolos/ações a alterar. Se o arquivo não existir será marcado como (inferred) e incluído um checklist mínimo para criação.

---

**Mapa do código atual (arquivos-chave e símbolos)**

- `src/App.tsx` — ponto de entrada. Usa `CartProvider` e `Navigation`.
- `src/navigation/index.tsx` — define as 4 abas do app: `Início` (Home), `Cardápio` (Menu), `Carrinho` (Cart), `Perfil` (Profile). (linhas relevantes: definição do `TabNavigator` e `RootStackParamList`).
- `src/screens/Home.tsx` — componente `Home` que atualmente importa `produtos` de `src/data/mock` e renderiza um `FlatList` com `ProductCard`.
- `src/screens/Menu.tsx` — componente `Menu` que consome `productService.getProdutos()` (ajustado) para popular o cardápio.
- `src/screens/Cart.tsx` — componente `Cart` que consome `useCart`.
- `src/screens/Profile.tsx` — componente `Profile` com texto simples: usa `globalStyles` e constantes `ADDRESS`, `CONTACT` de `src/constants`.
- `src/services/productService.ts` — fornece `getProdutos`, `getProdutoPorId`, `buscarProdutos` e agora exporta `default productService`.
- `src/data/mock.ts` — define `Produto` e `produtos` (dados mock).
- `src/components/ProductCard.tsx` — componente de exibição de cada produto.
- `src/hooks/useCart.tsx` — contexto `CartProvider` e hook `useCart`.
- `src/styles/global.ts` — estilos globais (`globalStyles.container`, `title`, `text`).
- `src/constants/index.ts` — `APP_NAME`, `ADDRESS`, `CONTACT`.

Verificações já realizadas (e aplicadas):
- `src/services/productService.ts` recebeu `default export` e `src/screens/Menu.tsx` foi atualizado para `productService.getProdutos()` para evitar erro de importação runtime.

---

**Roadmap sequencial (cada passo é um item atômico, acionável em uma sessão de dev)**

1) Garantir que `Perfil` exiba texto mockado e descrição completa da padaria
- Arquivo: `src/screens/Profile.tsx`
- Símbolos / linhas: o componente `Profile` (JSX retornado). Atualmente retorna 4 linhas de texto estático.
- Ação: substituir o corpo JSX por um layout mais rico contendo:
  - Título `Sobre Nós` (já presente)
  - Bloco `Descrição` contendo o texto fornecido (DESCRIÇÃO, OBJETIVO, SITUAÇÃO-PROBLEMA) com formatação leve (párrafos)
  - Informações de contato: `Endereço`, `Contato`, `Horário` (usar constantes de `src/constants/index.ts`)
  - Opcional: pequeno parágrafo com história da padaria (mocked) — criar texto original amigável.
- Checklist (atomic):
  - [ ] Abrir `src/screens/Profile.tsx`.
  - [ ] Substituir JSX do `return` para incluir os parágrafos com as seções mencionadas.
  - [ ] Manter uso de `globalStyles` e `globalStyles.title/text` para consistência visual.
  - [ ] Testar visualmente na aba `Perfil`.
- Checkpoint / gate: ao abrir a aba `Perfil` o texto completo aparece sem crashes.
- Traceabilidade após mudança: `src/screens/Profile.tsx` (modificado). Seção `Profile` JSX (linhas aproximadas do novo bloco).

2) Corrigir e enriquecer a tela `Início` para apresentar produtos em destaque (vitrine)
- Arquivo: `src/screens/Home.tsx`
- Símbolos / linhas: componente `Home`, import `produtos` de `src/data/mock`, uso de `FlatList` e `ProductCard`.
- Observação: atualmente `Home` já importa `produtos` e renderiza-os; porém o usuário reportou que "Início" está vazio — investigar runtime/crashes (ex.: `globalStyles` anteriormente undefined). Presumido resolvido.
- Ação (implementação atômica):
  - 2.1) Adicionar um cabeçalho `Destaques` e renderizar até N (ex.: 4) produtos em destaque no topo em uma `FlatList` horizontal (vitrine).
  - 2.2) Em seguida, listar o restante dos produtos em uma `FlatList` vertical (ou combinar em uma única lista com `ListHeaderComponent`).
  - 2.3) Implementar fallback quando `produtos.length === 0` (texto "Nenhum destaque disponível").
- Checklist (atomic):
  - [ ] Editar `src/screens/Home.tsx`.
  - [ ] Importar `View`, `Text`, `FlatList` (já existe); adicionar `ListHeaderComponent` com `Destaques`.
  - [ ] Implementar `const destaques = produtos.slice(0, 4);` e render horizontal `FlatList` usando `ProductCard` adaptado (ou reutilizar `ProductCard` com estilo menor).
  - [ ] Garantir `useCart` funcionamento para os botões de adicionar.
  - [ ] Teste: abrir aba `Início` e verificar vitrine e lista.
- Checkpoint / gate: `Início` deve apresentar pelo menos 1 produto em destaque sem crash.
- Traceabilidade: `src/screens/Home.tsx` (novo ListHeaderComponent + uso de `produtos`) e `src/components/ProductCard.tsx` (reuso para vitrine).

3) Garantir que `Cardápio` mostre os dados mockados (problema previamente reportado)
- Arquivos: `src/screens/Menu.tsx`, `src/services/productService.ts`, `src/data/mock.ts`.
- Símbolos / linhas: `Menu` usa `productService.getProdutos()` no `useEffect`; `productService` exporta `getProdutos()`.
- Estado atual: já corrigi `productService` para exportar default e atualizei `Menu.tsx` para `productService.getProdutos()`.
- Ação (verificação/fortalecimento):
  - 3.1) Adicionar estado `loading` e exibir `ActivityIndicator` enquanto `getProdutos()` resolve.
  - 3.2) Adicionar fallback quando nenhum produto retornado (texto "Nenhum produto encontrado").
  - 3.3) (Opcional) Conectar `buscarProdutos` para adicionar uma barra de busca no topo (inferred — arquivo para criar: `src/components/SearchBar.tsx`). Marcar como (inferred).
- Checklist (atomic):
  - [ ] Verificar `src/services/productService.ts` contém `getProdutos` exportado (confirmado).
  - [ ] Editar `src/screens/Menu.tsx` e adicionar `loading` e `ActivityIndicator` e mensagens de fallback.
  - [ ] Testar: abrir aba `Cardápio` e verificar produtos aparecem.
- Checkpoint / gate: `Cardápio` carrega produtos sem erros e mostra mensagem amigável quando vazio.
- Traceabilidade: `src/screens/Menu.tsx` (useEffect + chamada a `productService.getProdutos()`), `src/services/productService.ts` (funções `getProdutos`, `buscarProdutos`).

4) Melhorias menores / UX: botões, estilos e textos
- Arquivos-alvo: `src/components/ProductCard.tsx`, `src/styles/global.ts`, `src/theme/theme.ts`.
- Ação (atômica):
  - 4.1) Garantir contraste de cores no botão `addButton` (revisar `colors.primary` em `src/theme/theme.ts`).
  - 4.2) Garantir espaçamentos usando `spacing` (já segue esse padrão).
  - 4.3) Ajustar `ProductCard` para suportar dois tamanhos (compact e full) — implementar prop opcional `compact?: boolean` (inferred change to `ProductCard` API).
- Checklist:
  - [ ] Atualizar `src/components/ProductCard.tsx` (adicionar prop `compact` e estilos condicionais).
  - [ ] Atualizar chamadas existentes (`Home`, `Menu`) se necessário para passar `compact` para vitrine.
- Traceabilidade: `src/components/ProductCard.tsx` (componente e estilos), `src/screens/Home.tsx` e `src/screens/Menu.tsx` (consumo).

5) Documentação e roteiro de implementação incremental (artefato solicitado)
- Arquivo: `docs/ROADMAP.md` (este arquivo) — garante registro do plano e checklists.
- Ação: manter este arquivo atualizado a cada tarefa completa.
- Checkpoint: este arquivo encontra-se em `docs/ROADMAP.md`.

Nota: o arquivo `docs/profile.html` criado é um preview estático para visualização local (abrir no navegador). Ele não é carregado pelo aplicativo móvel em tempo de execução; serve apenas como mock visual para revisão.

6) Testes e validação manual
- Arquivos: nenhum arquivo novo obrigatório — ações:
  - 6.1) Executar app (Simulador/Expo) e verificar as 4 abas funcionam e não apresentam erros no console.
  - 6.2) Testar cenários: sem produtos (mock vazio), com produtos (mock presente), adicionar ao carrinho, navegar para `Product`.
- Checkpoint: sem erros no console e comportamento esperado nas 4 abas.

7) Itens inferidos (não encontrados no repositório) — marcarei como (inferred) e darei passos mínimos para criação
- 7.1) `src/components/SearchBar.tsx` (inferred) — para permitir busca no `Cardápio`.
  - Criação mínima: componente `TextInput` com `onChangeText` que chama `productService.buscarProdutos(query)` e atualiza a lista.
  - Arquivo a criar: `src/components/SearchBar.tsx`.
- 7.2) `src/screens/HomeFeatured.tsx` (inferred) — se preferir separar a vitrine em componente; ou reutilizar `ProductCard` no mesmo `Home.tsx`.

---

**Roadmap detalhado (passos executáveis com comandos / mudanças de arquivo)**

Nota: todas as edições seguem o estilo de código existente (TypeScript + React Native + hooks). Para cada passo incluo o arquivo alvo e checklist mínimo.

Passo A — Atualizar `Profile` (conteúdo mockado e descrição rica)
- Arquivo: `src/screens/Profile.tsx`
- Mudança: substituir o JSX retornado pelo código abaixo (atomic edit):

  Exemplo de conteúdo a inserir (substituir o `return` atual):

  ```tsx
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Sobre Nós</Text>
      <Text style={globalStyles.text}>
        A Padaria Tia Rosa acredita que tradição e tecnologia podem caminhar juntas. { /* breve história */ }
      </Text>

      <Text style={[globalStyles.title, { marginTop: 12 }]}>Descrição</Text>
      <Text style={globalStyles.text}>Para garantir uma melhora constante na qualidade e destaque no mercado, é necessário investir em tecnologia. Os benefícios, nesse caso, são mútuos.</Text>

      <Text style={[globalStyles.title, { marginTop: 12 }]}>Objetivo</Text>
      <Text style={globalStyles.text}>Apresentar uma proposta de um aplicativo mobile para a Padaria Tia Rosa, melhorando atendimento e reduzindo filas.</Text>

      <Text style={[globalStyles.title, { marginTop: 12 }]}>Situação-Problema</Text>
      <Text style={globalStyles.text}>O pão é o produto mais requisitado; problemas na produção implicam perdas financeiras e de credibilidade. Este app visa mitigar filas longas e deslocamentos desnecessários.</Text>

      <Text style={[globalStyles.title, { marginTop: 12 }]}>Contato</Text>
      <Text style={globalStyles.text}>Endereço: {ADDRESS}</Text>
      <Text style={globalStyles.text}>Contato: {CONTACT}</Text>
      <Text style={globalStyles.text}>Horário: 6h - 20h</Text>
    </View>
  );
  ```

- Checklist:
  - [ ] Atualizar `src/screens/Profile.tsx` com o novo JSX.
  - [ ] Salvar e testar.

Passo B — Criar vitrine de "Destaques" no `Home`
- Arquivo: `src/screens/Home.tsx`
- Mudança mínima (atomic): adicionar `ListHeaderComponent` que renderiza um `FlatList` horizontal com `const destaques = produtos.slice(0, 4)` e reutiliza `ProductCard` (usar prop `compact` se for implementado).
- Checklist:
  - [ ] Editar `src/screens/Home.tsx`.
  - [ ] Implementar `destaques` e `ListHeaderComponent`.
  - [ ] Testar aba `Início`.

Passo C — Robustecer `Menu` com loading/fallback
- Arquivo: `src/screens/Menu.tsx`
- Mudança: adicionar `const [loading, setLoading] = useState(true);` e em `useEffect` setar `loading` para `false` após resolução; renderizar `ActivityIndicator` enquanto `loading`.
- Checklist:
  - [ ] Editar `src/screens/Menu.tsx`.
  - [ ] Adicionar `ActivityIndicator` import e fallback texto.
  - [ ] Testar aba `Cardápio`.

Passo D — (Opcional, inferred) Adicionar `SearchBar` para busca no `Cardápio`
- Arquivo a criar: `src/components/SearchBar.tsx` (inferred)
- Mudança: criar um componente simples que aceita `onSearch: (q: string) => void` e renderiza `TextInput`.
- Checklist:
  - [ ] Criar `src/components/SearchBar.tsx`.
  - [ ] Importar em `src/screens/Menu.tsx` e ligar a `productService.buscarProdutos`.

Passo E — Pequenas melhorias / consistência de componentes
- Arquivos: `src/components/ProductCard.tsx`, `src/styles/global.ts` e `src/theme/theme.ts`
- Mudança: adicionar prop `compact?: boolean` em `ProductCard` (inferred), ajustar estilos se necessário.
- Checklist:
  - [ ] Atualizar `ProductCard` para condicionar estilos a `compact`.
  - [ ] Usar `compact` em vitrine do `Home`.

Passo F — Documentar e revisar
- Arquivo: `docs/ROADMAP.md` (este)
- Ação: manter checklist atualizado, marcar tasks concluídas.

---

**Checklist de implementação rápida (ordem sugerida)**

1. [ ] Passo A — Atualizar `src/screens/Profile.tsx` (conteúdo estendido). (arquivo existe)
2. [ ] Passo B — Editar `src/screens/Home.tsx` para vitrine de destaques. (arquivo existe)
3. [ ] Passo C — Fortalecer `src/screens/Menu.tsx` com loading/fallback. (arquivo existe; `productService` confirmado em `src/services/productService.ts`)
4. [ ] Passo D — (inferred) Criar `src/components/SearchBar.tsx` e integrar com `Menu`. (criar arquivo)
5. [ ] Passo E — Ajustes em `src/components/ProductCard.tsx` (compact prop). (arquivo existe)
6. [ ] Passo F — Testes manuais e atualizar `docs/ROADMAP.md` com observações.

---

**Notas de rastreabilidade / evidências**
- `src/screens/Profile.tsx` — existe e contém atualmente um retorno com `globalStyles` e `ADDRESS`, `CONTACT` (confirmado). Alteração direta.
- `src/screens/Home.tsx` — existe e já usa `produtos` de `src/data/mock.ts` (confirmado). Alteração direta.
- `src/screens/Menu.tsx` — existe e foi alterado anteriormente para usar `productService.getProdutos()` (confirmado). Fortalecer com `loading` é seguro.
- `src/services/productService.ts` — contém `getProdutos`, `getProdutoPorId`, `buscarProdutos` e um `default export` (confirmado).
- `src/data/mock.ts` — contém `Produto` interface e `produtos` array (confirmado).

---

Para qualquer passo marcado como (inferred) incluí o arquivo alvo e a implementação mínima necessária.

Fim do roadmap. Mantê-lo em `docs/ROADMAP.md` e atualizar status à medida que tarefas forem concluídas.
