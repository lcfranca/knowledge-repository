# Roteiro Epistemológico e Histórico da Computação

### Visão Geral
Este roteiro busca oferecer um percurso estruturado, epistemologicamente rigoroso e teoricamente completo sobre a constituição histórica da computação como ciência, engenharia e fenômeno cultural. Integra a formação conceitual com práticas técnicas profundas, contextualização histórica e discussão filosófica.

---

## Estágio 1: Lógicas Formais, Fundamentos Matemáticos e Filosofia da Computação (1840s–1930s)

**Epistemologia:**
- Formalização do pensamento lógico e matemático.
- Limites do conhecimento matemático: Hilbert vs. Gödel.
- Computação como ciência a priori.

**Obras Fundamentais:**
- George Boole, *An Investigation of the Laws of Thought* (1854).
- Gottlob Frege, *Begriffsschrift* (1879), *Foundations of Arithmetic* (1884).
- Giuseppe Peano, *Formulario Mathematico*.
- Whitehead & Russell, *Principia Mathematica* (1910–1913).
- David Hilbert, *Problemas de Paris* (1900), *Grundlagen der Mathematik*.
- Kurt Gödel, *On Formally Undecidable Propositions* (1931).
- Alonzo Church, *A Note on the Entscheidungsproblem* (1936).
- Alan Turing, *On Computable Numbers* (1936).
- Ernst Zermelo, Untersuchungen über die Grundlagen der Mengenlehre (1908).
- Ludwig Wittgenstein, *Tractatus Logico-Philosophicus* (1921).

**Leitura Crítica:**
- Donald MacKenzie, *Mechanizing Proof: Computing, Risk, and Trust* (2001).
- Imre Lakatos, Proofs and Refutations (1976).
- Jean-Yves Girard, The Blind Spot: Lectures on Logic (2011).

**Práticas Avançadas:**
- Implementação visual de máquinas de Turing.
- Comparativo entre Cálculo Lambda e Máquina de Turing.
- Simulação de paradoxos de Gödel com linguagem de metarreflexão.
- Paradoxo de Russell em Teoria de Tipos Dependentes
     - Formalizar λx.¬(xx) em Coq e analisar falha de terminação.
- Decidibilidade do Entscheidungsproblem em Lean4
- Máquina de Turing Universal com Autorreferência
   - Codificar uma MT que simule sua própria negação (Gödelização explícita).

---

## Estágio 2: Concretização Física da Computação (1940s–1960s)

**Epistemologia:**
- Computação como extensão tecnológica da lógica formal.
- Do conceito abstrato ao hardware.
- Computadores como instrumentos de experimentação epistêmica.

**Obras e Fontes Primárias:**
- Von Neumann, *First Draft of a Report on the EDVAC* (1945).
- Alan Turing, *Proposal for the ACE* (1945).
- Wiener, *Cybernetics* (1948).
- Wiener, The Human Use of Human Beings (1950).
- Maurice Wilkes, The Best Way to Design an Automatic Calculating Machine (1951).
- Engelbart, *Augmenting Human Intellect* (1962).
- Claude Shannon, A Symbolic Analysis of Relay and Switching Circuits (1938).

**Práticas Avançadas:**
- Simulação de ALUs com Logisim.
- Projeto de ULA com Microcódigo em VHDL
- Emulação do Manchester Baby com CRT Memory
- Análise Termodinâmica de Portas NAND
- Emulação de ciclo Harvard com microprogramação.
- Desenvolvimento de simuladores de memória e controle de fluxo.

---

## Estágio 3: Paradigmas de Programação e Linguagens (1950s–1980s)

**Epistemologia:**
- Paradigmas como modelos cognitivos e ontológicos.
- Linguagens como mediação entre humano e máquina.

**Paradigmas Importantes:**
- Programação Imperativa: Fortran, Algol.
- Programação Funcional: Lisp, Scheme.
- Programação Orientada a Objetos: Simula, Smalltalk.
- Programação Declarativa e Lógica: Prolog.
- Programação Concorrente: CSP (Hoare), Actor Model.
- Programação Baseada em Regras e Eventos.

**Obras-Chave:**
- Grace Hopper, primeiros compiladores (1952).
- John McCarthy, *Recursive Functions* (1959), *LISP* (1960).
- Dahl & Nygaard, *Simula* (1967).
- Alan Kay, *The Early History of Smalltalk* (1993).
- Edsger Dijkstra, *Go To Statement Considered Harmful* (1968).
- John Backus, *Can Programming Be Liberated...* (1978).
- Winograd & Flores, *Understanding Computers and Cognition* (1986).
- Noam Chomsky, Three Models for the Description of Language (1956).
- Dana Scott, Data Types as Lattices (1976).
- Robin Milner, A Theory of Type Polymorphism in Programming (1978).
- Gilles Kahn, The Semantics of Simple Parallel Processes (1974).

**Projetos Profundos:**
- Implementação de interpretadores para Cálculo Lambda.
- Comparativo OOP em Smalltalk vs. JS.
- Desenvolvimento de Prolog e resolução de teoremas.
- Simulação de múltiplos paradigmas resolvendo o mesmo problema.
- Compilador para λ-Cálculo com Continuations
- Semântica Denotacional para Concorrência
- Análise de Efeitos Colaterais em Monads

---

## Estágio 4: Algoritmos, Complexidade e Estruturas (1950s–1990s)

**Epistemologia:**
- Algoritmos como modelos operacionais do saber.
- Complexidade como epistemologia do limite.

**Obras Fundamentais:**
- Donald Knuth, *The Art of Computer Programming*.
- Cormen, Leiserson, Rivest, Stein, *Introduction to Algorithms* (CLRS).
- Stephen Cook, *The Complexity of Theorem-Proving Procedures* (1971).
- Papadimitriou, *Computational Complexity*.
- Andrey Kolmogorov, Three Approaches to Information (1965).
- Michael Sipser, The History and Status of the P vs NP Problem (1992).
- Alexander Razborov, Lower Bounds for Monotone Complexity (1985).

**Práticas Avançadas:**
- Análise comparativa de algoritmos com benchmarking real.
- Implementação de algoritmos genéticos.
- Simulação de problemas NP-completos.
- Redução Levin-Cook para Geometria Algébrica
- Análise de Entropia em Algoritmos de Ordenação
- Algoritmos Genéticos com Teoria de Schemata

---

## Estágio 5: Redes, Segurança e Sistemas Distribuídos (1970s–2000s)

**Epistemologia:**
- Tempo e causalidade em sistemas distribuídos.
- Segurança como campo político e tecnocientífico.

**Referências-Chave:**
- Leslie Lamport, *Time, Clocks, and the Ordering of Events* (1978).
- Diffie & Hellman, *New Directions in Cryptography* (1976).
- Bruce Schneier, *Applied Cryptography*.
- Lawrence Lessig, *Code and Other Laws of Cyberspace*.
- Michael Fischer, The Consensus Problem in Unreliable Distributed Systems (1983).
- Cynthia Dwork, Pricing via Processing or Combatting Junk Mail (1992).
- Martín Abadi, Explicit Communication Revisited (1999).

**Laboratórios:**
- Simulação de tempos lógicos de Lamport.
- Blockchain com Prova de Trabalho.
- Implementação segura de protocolos (TLS, autenticação).
- Prova do FLP em TLA+
- Criptografia Lattice-Based em Python
- Análise de CAP Theorem em Databases

---

## Estágio 6: Engenharia Colaborativa e Sistemas Escaláveis (1990s–2010s)

**Epistemologia:**
- Software como artefato coletivo.
- DevOps e nuvem como epistemologia de entrega contínua.

**Obras-Chave:**
- Eric Raymond, *The Cathedral and the Bazaar* (1999).
- Roy Fielding, *Architectural Styles and the Design of Network-based Software Architectures* (2000).
- Jeff Dean, *Designs, Lessons and Advice from Building Large-Scale Distributed Systems*.
- Martin Fowler, *Patterns of Enterprise Application Architecture*.
- Fred Brooks, No Silver Bullet (1986).
- Leslie Lamport, How to Make a Multiprocessor Computer That Correctly Executes Multiprocess Programs (1979).
- Gray & Reuter, Transaction Processing: Concepts and Techniques (1993).

**Práticas Profundas:**
- Pipeline CI/CD completo (GitHub Actions, Docker).
- MapReduce distribuído.
- Arquitetura de microserviços com observabilidade.
- Verificação Formal de CRDTs em Isabelle/HOL
   - Implementar session types em Go para garantias de protocolo.
- Análise Termodinâmica de Data Centers
---

## Estágio 7: Inteligência Artificial e Computação Cognitiva (2000s–2020s)

**Epistemologia:**
- Aprendizagem como epistemologia estatística.
- Modelos como sistemas epistêmicos (representação vs. inferência).

**Obras e Artigos:**
- Geoffrey Hinton, *Deep Belief Nets*.
- Vaswani et al., *Attention is All You Need* (2017).
- Judea Pearl, *Causality*.
- Bender et al., *On the Dangers of Stochastic Parrots* (2021).
- Melanie Mitchell, *AI: A Guide for Thinking Humans*.

**Laboratórios Críticos:**
- GANs para deepfakes.
- Sistema de recomendação com fairness-aware learning.
- Visualização de gradientes com Grad-CAM.

---

## Estágio 8: Computação Pós-Clássica (2010s–Presente)

**Epistemologia:**
- Computação quântica como ruptura do determinismo.
- Blockchain como epistemologia da confiança distribuída.

**Referências-Chave:**
- Shor, *Algorithms for Quantum Computation* (1994).
- Preskill, *Quantum Computing in the NISQ era* (2018).
- Nakamoto, *Bitcoin: A Peer-to-Peer Electronic Cash System* (2008).
- Buterin, *Ethereum White Paper* (2013).
- Nielsen & Chuang, *Quantum Computation and Quantum Information*.

**Experimentos Fronteiriços:**
- Simulação de qubits com Qiskit.
- Desenvolvimento de ERC-20 com Chainlink.
- Computação bioinspirada com autômatos celulares.

---

## Trilhas Complementares

**Histórica:** cronologia integrada com rupturas paradigmáticas.
**Temática:** IA, redes, linguagens, segurança, sistemas distribuídos.
**Projetos Longitudinais:** sistemas que evoluem através dos estágios.

---

 **práticas avançadas**

---

## 📜 **Estágio 1: Lógicas Formais e Filosofia da Computação**  
### **Prática 1: Implementação do Paradoxo de Russell em Agda/Coq**  
**Objetivo:** Formalizar o paradoxo em sistemas de tipos dependentes.  
**Ferramentas:** Agda/Coq, LaTeX (para documentação).  
**Passos:**  
1. Definir um tipo `Set` auto-referencial: `Russell : Set := { S : Set | S ∉ S }`.  
2. Formalizar a contradição: `Russell ∈ Russell ↔ Russell ∉ Russell`.  
3. Analisar a rejeição pelo verificador de tipos (erro de inconsistência).  
**Entregável:** Relatório técnico explicando a relação entre autorreferência e inconsistência na teoria de tipos.  

### **Prática 2: Simulação do Entscheidungsproblem em Lean4**  
**Objetivo:** Explorar os limites da automatização de provas.  
**Passos:**  
1. Codificar fragmentos da aritmética de Peano em Lean4.  
2. Tentar automatizar a prova do teorema de Gödel `G ↔ ¬Provável(G)`.  
3. Analisar a resposta do provador (tempo de execução infinito ou erro).  
**Ferramentas:** Lean4, biblioteca `mathlib`.  
**Entregável:** Artigo comparando o resultado com o teorema de Church-Turing.  

### **Prática 3: Comparação Máquina de Turing vs. Cálculo Lambda**  
**Objetivo:** Verificar equivalência para o problema da parada.  
**Passos:**  
1. Implementar em Python:  
   - Emulador de Máquina de Turing com fita infinita.  
   - Redutor de termos lambda (β-redução normal order).  
2. Programar o paradoxo de Curry (`Y = λf.(λx.f(xx))(λx.f(xx))`).  
3. Comparar comportamento em casos de loops infinitos.  
**Ferramentas:** Python, Graphviz (para visualização da fita/árvore de redução).  

---

## 🔩 **Estágio 2: Concretização Física**  
### **Prática 1: Projeto de ULA em VHDL/Verilog**  
**Objetivo:** Implementar uma unidade lógico-aritmética de 8 bits.  
**Especificações:**  
- Suporte a operações: ADD, SUB, AND, OR, XOR.  
- Flags de status: Zero, Overflow, Carry.  
**Passos:**  
1. Projetar circuitos combinacionais para cada operação.  
2. Implementar multiplexadores para seleção de operação.  
3. Testar no Logisim com vetores: `0xF0 + 0x0F → 0xFF (Zero=0, Carry=0)`.  
**Ferramentas:** VHDL/Verilog, GTKWave (simulação de timing).  

### **Prática 2: Emulação do Manchester Baby em FPGA**  
**Objetivo:** Replicar o primeiro computador armazenado.  
**Passos:**  
1. Codificar arquitetura original (32 palavras de 32 bits, CRT memory).  
2. Programar exemplo histórico: cálculo do maior divisor comum.  
3. Analisar ciclos de clock vs. computação moderna.  
**Ferramentas:** Verilog, FPGA DE10-Nano.  
**Entregável:** Vídeo da execução com LEDS mostrando registradores.  

---

## 💻 **Estágio 3: Paradigmas de Programação**  
### **Prática 1: Type System Hindley-Milner em OCaml**  
**Objetivo:** Implementar inferência de tipos para Mini-ML.  
**Passos:**  
1. Definir gramática: `e ::= x | λx.e | e e | let x = e in e`.  
2. Implementar algoritmo W de unificação.  
3. Testar casos críticos:  
   ```ocaml  
   let f = λx.x in (f 5, f true) // Deve falhar (polimorfismo não inferido)  
   ```  
**Ferramentas:** OCaml, menhir (parser generator).  

---

## 🧮 **Estágio 4: Algoritmos e Complexidade**  
### **Prática 1: Prova de NP-Completude via Cook-Levin**  
**Objetivo:** Reduzir 3-SAT a um problema original (e.g., quebra-cabeça de Sudoku).  
**Passos:**  
1. Definir formalmente o problema-alvo como linguagem `L ∈ NP`.  
2. Construir redução polinomial: instância de 3-SAT → instância de Sudoku.  
3. Verificar correção:  
   - Satisfatibilidade preservada.  
   - Tamanho da instância é polinomial.  
**Ferramentas:** Coq (para prova formal), LaTeX (para redação).  

---

## 🌐 **Estágio 5: Sistemas Distribuídos**  
### **Prática 1: Implementação do Protocolo Signal**  
**Objetivo:** Garantir forward secrecy e deniability.  
**Passos:**  
1. Implementar Double Ratchet em Python:  
   - X3DH para troca inicial de chaves.  
   - Chain de HKDF para derivação de chaves.  
2. Simular ataque MITM: tentativa de reutilização de nonces.  
3. Verificação formal em Tamarin:  
   - Autenticidade: `Alice | Bob ⊢ SharedKey`.  
   - Segredo: `∀m, ¬Reveal(m)`.  
**Ferramentas:** Python Cryptography, Tamarin-Prover.  

---

## 🛠️ **Estágio 6: Engenharia Colaborativa**  
### **Prática 1: CRDT para Edição Colaborativa**  
**Objetivo:** Garantir convergência sem locks.  
**Passos:**  
1. Escolher semântica: Last-Writer-Wins vs. Merge de logs.  
2. Implementar em Rust:  
   - Estrutura de dados: `HashMap<ID, (Value, Timestamp, VectorClock)>`.  
   - Algoritmo de merge: resolução de conflitos via max timestamp.  
3. Testar sob partições de rede:  
   - Cliente A: insere "foo" no índice 0.  
   - Cliente B: insere "bar" no índice 0.  
   - Resultado esperado: "barfoo" ou "foobar" com metadata.  
**Ferramentas:** Rust, Tokio (para concorrência).  

---

## 🧠 **Estágio 7: Inteligência Artificial**  
### **Prática 1: Treinamento do GPT-2 do Zero**  
**Objetivo:** Analisar viés em modelos de linguagem.  
**Passos:**  
1. Coletar dataset:  
   - Corpus diverso (Wikipedia, livros, fóruns).  
   - Anotar subconjuntos para gênero/etnia (e.g., nomes, pronomes).  
2. Treinar em PyTorch:  
   - Arquitetura: 12 camadas, 768 dimensões.  
   - Loss: Cross-entropy com masking causal.  
3. Medir viés via SHAP:  
   - Prompt: "O [MASK] trabalhou como enfermeiro."  
   - Esperado: SHAP values enviesados para nomes femininos.  
**Ferramentas:** PyTorch, Hugging Face Transformers, SHAP.  

---

## ⚛️ **Estágio 8: Computação Pós-Clássica**  
### **Prática 1: Algoritmo de Shor em Qiskit**  
**Objetivo:** Fatorar N=15 (3×5) em computador quântico.  
**Passos:**  
1. Implementar circuito quântico:  
   - Registro quântico: 4 qubits (2 para estimativa de fase).  
   - Módulo exponencial: `U|y⟩ = |y * 2^1 mod 15⟩`.  
2. Executar no simulador de alta performance:  
   - Medir período `r` da função `f(x) = 2^x mod 15`.  
   - Calcular GCD(2^(r/2 ±1, 15).  
3. Analisar erro: aplicar correção via Surface Code.  
**Ferramentas:** Qiskit, IBM Quantum Experience.  

---

### **Notas Gerais:**  
- **Dificuldade Controlada:** Cada projeto requer ~40 horas de trabalho.  
- **Pré-requisitos:** Domínio das linguagens/tools listadas.  
- **Avaliação:** Entregar código + relatório técnico com:  
  - Análise de complexidade (Big O).  
  - Prova formal de propriedades críticas (se aplicável).  
  - Crítica filosófica (e.g., implicações do Paradoxo de Russell para sistemas formais).  



