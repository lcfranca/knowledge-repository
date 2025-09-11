### Engenharia de Dados

---
## Módulo 0: Introdução Epistemológica e Fundamentos Históricos

**Objetivo Geral:**
Compreender os fundamentos epistemológicos, históricos e matemáticos que estruturam a Engenharia de Dados como campo disciplinar e técnico. Este módulo oferece a base crítica para avaliação das práticas e tecnologias sob uma perspectiva histórica, filosófica e científica.

**Requisitos prévios:**

* Leitura acadêmica em filosofia da ciência
* Noções de teoria da informação, lógica e álgebra
* Conhecimento básico em estruturas de dados

---

## 1. Marcos Históricos e Fundadores da Engenharia de Dados

### 1.1. Comunicação e Informação

* Shannon, C. E. (1948). *A Mathematical Theory of Communication*. Bell System Technical Journal.

  > Obra fundadora da teoria da informação. 

* Cover, T. M.; Thomas, J. A. (2006). *Elements of Information Theory*, 2nd ed. Wiley-Interscience.

  > Referência moderna e consolidada. Para atualização, incluir:

* **Verdu, S. (2021).** *Information Theory: Fifty Years Later*. IEEE Press.

  > Atualização crítica do impacto da teoria da informação no século XXI.

---

### 1.2. Cibernética e Sistemas

* Wiener, N. (1948). *Cybernetics: Or Control and Communication in the Animal and the Machine*. MIT Press.

  > Clássico fundacional, complementar com:

* **Pickering, A. (2010).** *The Cybernetic Brain: Sketches of Another Future*. University of Chicago Press.

  > Estudo histórico-filosófico atualizado sobre a cibernética como matriz da computação contemporânea.

---

### 1.3. Modelos de Dados e Organização da Informação

* Codd, E. F. (1970). *A Relational Model of Data for Large Shared Data Banks*. Communications of the ACM.

  > Fundamental para o surgimento dos SGBDs relacionais.

* Abadi, D. J.; Boncz, P.; Harizopoulos, S. (2013). *The Design and Implementation of Modern Column-Oriented Database Systems*. Foundations and Trends in Databases.

  > Para articulação moderna da teoria relacional no contexto analítico atual.

---

## 2. Epistemologia das Ciências Computacionais

### 2.1. Paradigmas e Filosofia da Ciência

* Kuhn, T. S. (1962). *The Structure of Scientific Revolutions*. University of Chicago Press.

  > Obra seminal. Complementar com:

* **Bird, A. (2022).** *Kuhn*. Routledge.
* Popper, K. (1963). *Conjectures and Refutations*. Routledge.
* Feyerabend, P. (1975). *Against Method*. Verso Books.
* **Floridi, L. (2019).** *The Logic of Information: A Theory of Philosophy as Conceptual Design*. Oxford University Press.
---

## 3. Bases Matemáticas e Formais da Engenharia de Dados

### 3.1. Teoria da Informação e Probabilidade

* Cover, T. M.; Thomas, J. A. (2006). *Elements of Information Theory*.
* **MacKay, D. J. C. (2003).** *Information Theory, Inference, and Learning Algorithms*. Cambridge University Press.
---

### 3.2. Teoria dos Grafos e Modelos Causais

* Bollobás, B. (1998). *Modern Graph Theory*. Springer.

  > Complementar com:

* **Gross, J. L.; Yellen, J. (2022).** *Graph Theory and Its Applications*, 3rd ed. Chapman & Hall.
* Pearl, J. (2009). *Causality: Models, Reasoning, and Inference*. Cambridge University Press.
* **Peters, J.; Janzing, D.; Schölkopf, B. (2017).** *Elements of Causal Inference: Foundations and Learning Algorithms*. MIT Press.


---

## 4. Práticas Avançadas — Projetos e Aplicações

### Projeto 1: Implementação do Modelo Relacional Clássico

**Objetivo**: Implementar um interpretador simplificado de álgebra relacional com operadores formais e execução básica de queries.

* Linguagens: **Python**, **Haskell**
* Conceitos envolvidos: Relacional clássico, álgebra relacional, normalização
* Ferramentas: SQLite (para comparação), Pandas (como backend de execução)

### Projeto 2: Análise Comparativa de Paradigmas de Dados

**Objetivo**: Desenvolver uma análise epistemológica e técnica entre bancos relacionais, documentais e grafos, com ênfase em implicações lógicas e modelos de representação.

* Tecnologias: **PostgreSQL**, **MongoDB**, **Neo4j**
* Metodologia: Mapear a tradução de conceitos relacionais em documentais e grafos, avaliando implicações ontológicas e computacionais.

### Projeto 3: Modelagem de Causalidade com Dados Reais

**Objetivo**: Aplicar modelos causais sobre dados reais para inferência e explicação.

* Ferramentas: **DoWhy**, **CausalNex**, **Python**
* Dados: Dados públicos de saúde, educação ou economia (Kaggle, DataSUS, IBGE)
* Resultados: Representações causais, comparação entre correlação e causalidade, uso de grafos direcionais acíclicos (DAGs).

### Projeto 4: Análise da História Computacional com Ferramentas de Text Mining

**Objetivo**: Aplicar mineração de texto para mapear as principais correntes epistemológicas e tecnológicas na história da engenharia de dados.

* Ferramentas: **NLTK**, **spaCy**, **Scikit-Learn**, **Gensim**
* Corpus: Artigos históricos (ACM Digital Library, JSTOR)
* Produtos: Mapas semânticos, clustering de escolas de pensamento, análise temporal de conceitos técnicos.

---
## Módulo 1: Modelagem de Dados, Arquiteturas e Paradigmas

**Objetivo Geral**:
Desenvolver conhecimento profundo nos modelos conceituais, lógicos e físicos de dados, na teoria da normalização, integração de dados e arquiteturas de dados, com base em fundamentos formais e nas práticas mais recentes da indústria.

**Requisitos prévios**:

* Lógica de primeira ordem
* Álgebra relacional
* Sistemas gerenciadores de banco de dados (SGBDs) relacionais e não-relacionais
* Conhecimentos introdutórios em engenharia de software

---

## 1. Modelagem Conceitual e Lógica de Dados

### 1.1. Modelo Entidade-Relacionamento (ER)

* Chen, P. P. S. (1976). *The Entity-Relationship Model: Toward a Unified View of Data*. ACM TODS, 1(1), 9–36.

### 1.2. Ontologias e Lógicas Descritivas para Modelagem

* Calvanese, D. et al. (2020). *Ontology-Based Data Management*. Synthesis Lectures on Data Management, Morgan & Claypool.
* Borgida, A. et al. (2021). *Conceptual Modeling with Description Logics: Foundations and Applications*. Springer.

---

## 2. Teoria Relacional e Normalização

### 2.1. Fundamentos

* Codd, E. F. (1970). *A Relational Model of Data for Large Shared Data Banks*. Communications of the ACM, 13(6), 377–387.

### 2.2. Abordagens Modernas à Normalização

* Arenas, M.; Libkin, L.; Vrgoc, D. (2021). *Relational and Document Normal Forms Based on Information Theory*. ACM PODS.
* Libkin, L. (2021). *Foundations of Data Exchange and Integration*. Morgan & Claypool.

---

## 3. Incompletude, Certas Respostas e Modelagem com Incerteza

### 3.1. Informação Incompleta

* Libkin, L. (2014). *Incomplete Information in Relational Databases*. Morgan & Claypool.
* Libkin, L.; Savenkov, V. (2022). *Certain Answers for SQL with Nulls*. ACM Transactions on Database Systems.

### 3.2. Bancos de Dados Probabilísticos

* Suciu, D.; Olteanu, D.; Ré, C.; Koch, C. (2011). *Probabilistic Databases*. Morgan & Claypool.
* Olteanu, D.; Huang, Z. (2020–2023). *Recent Advances in Probabilistic Data Management*. VLDB Proceedings (vários artigos).

---

## 4. Integração de Dados e Acesso Ontológico

### 4.1. Perspectiva Teórica

* Lenzerini, M. (2002). *Data Integration: A Theoretical Perspective*. ACM PODS.

### 4.2. Práticas Ontológicas Modernas

* Calvanese, D. et al. (2020). *Ontology-Based Data Management*. Synthesis Lectures on Data Management.

---

## 5. Design de Esquemas, Evolução e Refatoração

### 5.1. Refatoração Tradicional

* Ambler, S.; Sadalage, P. (2006). *Refactoring Databases: Evolutionary Database Design*. Addison-Wesley.

### 5.2. Práticas Ágeis e DevOps

* Fowler, M.; Sadalage, P. (2023). *Refactoring Databases*, 2nd Edition. Addison-Wesley.
* Li, Y. et al. (2021). *Continuous Schema Evolution in Cloud-native Databases*. VLDB Proceedings.

---

## 6. Modelos Multidimensionais e Arquiteturas Analíticas

### 6.1. Data Warehousing Clássico

* Kimball, R.; Ross, M. (2013). *The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling*. 3rd ed., Wiley.
* Golfarelli, M. (2023). *Data Warehouse Design: Modern Principles and Methodologies*. Springer.

### 6.2. Lakehouses e Arquiteturas Híbridas

* Databricks (2020). *The Databricks Lakehouse Platform*. Whitepaper, atualizado em 2023.
* Abadi, D. J.; Boncz, P. A.; Harizopoulos, S. (2013). *The Design and Implementation of Modern Column-Oriented Database Systems*. Now Publishers.

---

## 7. Fundamentos Formais e Lógica para Bancos de Dados

* Libkin, L. (2004). *Elements of Finite Model Theory*. Springer.
* Libkin, L. (2016). *Logical Foundations of Data Exchange and Integration*. ACM SIGMOD Record.

---

## 8. Práticas Avançadas — Projetos e Aplicações

### Projeto 1: Modelagem e Integração Ontológica com OBDA

**Objetivo**: Desenvolver um sistema que unifique diferentes fontes de dados relacionais por meio de uma ontologia formal.

* Tecnologias: **OWL**, **Protégé**, **Ontop**, **PostgreSQL**
* Tópicos: OBDA, SPARQL, descrição lógica
* Resultado esperado: Implementação funcional de integração semântica com consultas federadas.

### Projeto 2: Refatoração de Esquema em Ambiente DevOps

**Objetivo**: Criar um pipeline de refatoração de esquemas com versionamento e rollback automático.

* Tecnologias: **Liquibase**, **Flyway**, **Docker**, **CI/CD com GitHub Actions**
* Tópicos: Schema evolution, versionamento, rollback, refatoração incremental
* Resultado esperado: Pipeline funcional com múltiplas versões de schema e testes automatizados.

### Projeto 3: Análise Multidimensional e Lakehouse Analytics

**Objetivo**: Implementar uma arquitetura híbrida (Data Warehouse + Lakehouse) para análise de grandes volumes de dados.

* Tecnologias: **Apache Spark**, **Delta Lake**, **dbt**, **Databricks**
* Tópicos: OLAP, pipelines ELT, arquitetura moderna de dados
* Resultado esperado: Infraestrutura analítica escalável com dados estruturados e semiestruturados.

### Projeto 4: Consulta e Transformação sobre Dados Incompletos

**Objetivo**: Explorar estratégias para obtenção de "certain answers" sobre bancos de dados com informação parcial ou nula.

* Tecnologias: **PostgreSQL**, **NullLogic DSL**, **Z3 SMT Solver**
* Tópicos: Respostas certas, incompletude, SQL com nulls
* Resultado esperado: Mecanismo de inferência lógico sobre base relacional parcial com justificativas formais.

---

# **Módulo 2 – Bancos de Dados: Tecnologias, Teorias e Implementações**

## **Objetivo Geral**

Estudar e dominar os fundamentos teóricos, arquiteturas e tecnologias contemporâneas de persistência e recuperação de dados, com ênfase nas implicações distribuídas, nos modelos de consistência e nos sistemas modernos utilizados na indústria.

---

## **1. Fundamentos de Sistemas de Banco de Dados**

### **1.1. Bancos Relacionais**

* Codd, E. F. “A Relational Model of Data for Large Shared Data Banks.” *Communications of the ACM*, 1970.
* Date, C. J. *An Introduction to Database Systems*. Addison-Wesley, 2003.
* Abiteboul, S., Hull, R., Vianu, V. *Foundations of Databases*. Addison-Wesley, 1995.
  **Complemento**: Ainda relevante, mas suplementar com literatura contemporânea.

### **1.2. Bancos de Dados NoSQL**

* Sadalage, P. J., Fowler, M. *NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence*. Addison-Wesley, 2012.
* Moniruzzaman, A. B. M., Hossain, S. A. “NoSQL Database: New Era of Databases for Big Data Analytics.” *IJACSA*, 2013.

### **1.3. Bancos NewSQL**

* Pavlo, A., Aslett, M. “What's Really New with NewSQL?” *SIGMOD Record*, 2016.
* Arora, V., Yadav, V. “NewSQL Databases: A Study of the Future of Relational Databases.” *Journal of Computer Science and Applications*, 2022.

---

## **2. Consistência e Tolerância a Falhas**

### **2.1. Teorema CAP**

* Brewer, Eric. “CAP Twelve Years Later: How the ‘Rules’ Have Changed.” *IEEE Computer*, 2012.

### **2.2. Consistência Eventual e Modelos Distribuídos**

* Vogels, Werner. “Eventually Consistent.” *Communications of the ACM*, 2009.
* Bailis, P., Ghodsi, A., et al. “Bolt-on Causal Consistency.” *SIGMOD*, 2013.
* Viotti, P., Vukolić, M. “Consistency in Non-Transactional Distributed Storage Systems.” *ACM Computing Surveys*, 2016.
* Kraska, T. “The Case for Learned Index Structures.” *SIGMOD*, 2018 — explorando consistência adaptativa e otimização.

---

## **3. Arquiteturas e Tendências Contemporâneas**

### **3.1. Sistemas Distribuídos**

* Tanenbaum, A. S., Van Steen, M. *Distributed Systems: Principles and Paradigms*. Prentice Hall, 2017 (2ª ed).
* Kleppmann, Martin. *Designing Data-Intensive Applications*. O’Reilly, 2017.

### **3.2. Replicação e Particionamento**

* Karger, D., et al. “Consistent Hashing and Random Trees: Distributed Caching Protocols for Relieving Hot Spots.” *ACM Symposium on Theory of Computing*, 1997.
* Shapiro, M., et al. “Conflict-Free Replicated Data Types.” *Stabilization, Safety, and Security of Distributed Systems*, 2011.

### **3.3. Cloud-Native Databases e Serverless**

* Armbrust, M., et al. “Snowflake: A Case Study in Designing a Cloud Data Warehouse.” *Communications of the ACM*, 2021.
* Sreekanti, V., et al. “Cloudburst: Stateful Functions-as-a-Service.” *VLDB*, 2020.

---

## **4. Bancos com Suporte a Tempo, Espaço e Incerteza**

### **4.1. Bancos Temporais e Geoespaciais**

* Jensen, C. S., Snodgrass, R. T. “Temporal Data Management.” *IEEE TKDE*, 2009.
* Koubarakis, M., et al. *Advances in Spatial and Temporal Databases*. Springer, 2015.

### **4.2. Bancos Probabilísticos e Aproximados**

* Suciu, D., Olteanu, D., Ré, C., Koch, C. *Probabilistic Databases*. Morgan & Claypool, 2011.
* Ré, C., et al. “Approximate Knowledge Base Construction: From Probabilistic Data to Data Products.” *CACM*, 2016.

---

## **5. Práticas Avançadas**

### **5.1. Projetos Reais para Consolidação Prática**

Cada projeto deve ser implementado com documentação, reprodutibilidade e aplicação de tecnologias de mercado.

| Projeto                                                 | Descrição                                                                                                                                                                     | Tecnologias Envolvidas                                         |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Benchmarking Multi-Paradigma**                        | Construir um pipeline de benchmark comparando bancos relacionais (PostgreSQL), NoSQL (MongoDB, Cassandra) e NewSQL (CockroachDB, TiDB) em diferentes workloads (OLTP e OLAP). | `sysbench`, `YCSB`, `Docker`, `Grafana`                        |
| **Simulação CAP em Cluster Kubernetes**                 | Implantar sistemas distribuídos com diferentes garantias de consistência e simular partições de rede.                                                                         | `Redis Cluster`, `etcd`, `Kubernetes`, `Chaos Mesh`            |
| **Sistema de Persistência Eventual em IoT**             | Projeto de armazenamento descentralizado para sensores com replicação eventual e tolerância a falhas.                                                                         | `MQTT`, `Cassandra`, `Apache Kafka`, `InfluxDB`                |
| **Arquitetura Serverless com Banco Distribuído**        | Construir uma aplicação usando FaaS com persistência global distribuída.                                                                                                      | `AWS Lambda`, `Amazon Aurora Serverless`, `DynamoDB`, `Vercel` |
| **Desenho de Banco Probabilístico para Dados Ambíguos** | Criar e consultar base de dados com incerteza sobre identidades, localizações e estados parciais.                                                                             | `MayBMS`, `PDB`, `PostgreSQL` com extensões                    |

---

# **Módulo 3 – Engenharia de Dados em Larga Escala: Pipelines e Arquiteturas**

## **Objetivo**

Dominar as arquiteturas e tecnologias para ingestão, processamento e análise de dados em larga escala, com foco em escalabilidade, tolerância a falhas, baixa latência e semanticidade de execução.

---

## **1. Fundamentos Arquiteturais e Paradigmas de Processamento**

### **1.1 Arquiteturas para Big Data**

* Marz, Nathan. *Big Data: Principles and best practices of scalable real-time data systems*. Manning, 2013.
* Kreps, Jay. “Questioning the Lambda Architecture.” *2014*.
* Databricks. *Delta Lake: Reliable Data Lakes at Scale*. Databricks Whitepaper, 2019.
* Armbrust, Michael et al. “Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics.” *CIDR 2021*.
* Ghodsi, Ali et al. “What’s Next in Lakehouse?” *Databricks Research & CIDR*, 2023.

### **1.2 Modelos de Execução em Fluxo e Batch**

* Akidau, Tyler et al. "The Dataflow Model: A Practical Approach to Balancing Correctness, Latency, and Cost in Massive-Scale, Unbounded, Out-of-Order Data Processing." *VLDB*, 2015.
* Karau, Holden et al. *High Performance Spark*. O'Reilly Media, 2017.
* Replacing: Flink original bullet —>

  * Carbone, Paris et al. “Apache Flink™: Stream and Batch Processing in a Single Engine.” *IEEE Data Engineering Bulletin*, 2015.
  * Zhou, Menggang et al. “State Management in Apache Flink: Challenges and Innovations.” *VLDB*, 2021.

---

## **2. Frameworks e Ferramentas de Processamento Distribuído**

### **2.1 Spark e seu Ecossistema**

* Zaharia, Matei et al. "Apache Spark: A Unified Engine for Big Data Processing." *Communications of the ACM*, 2016.
* Xin, Reynold et al. “Project Lightspeed: Accelerating Spark Structured Streaming.” *Databricks Engineering Blog*, 2022.
* Armbrust, Michael et al. "Structured Streaming: A Declarative API for Real-Time Applications in Apache Spark." *SIGMOD*, 2018.

### **2.2 Apache Beam**

* Akidau, Tyler et al. *Streaming Systems: The What, Where, When, and How of Large-Scale Data Processing*. O’Reilly, 2018.
* Akidau, Tyler. “Beam: Unified Stream and Batch Processing with Portable Runners.” *Google Research Blog*, 2017.
* Raghu Prabhakar. "Unified Stream Processing with Apache Beam and the Dataflow Model." *InfoQ*, 2020.

### **2.3 Apache Flink**

* Latest Overview:

  * Xu, Xintong et al. “Apache Flink at Alibaba: Scaling Stateful Stream Processing.” *VLDB*, 2021.
  * Carbone, Paris et al. “Lightweight Asynchronous Snapshots for Distributed Dataflows.” *SIGMOD*, 2023.
* Material Complementar:

  * Ververica. *Flink Documentation and Best Practices*, 2023.

---

## **3. Armazenamento e Governança em Ambientes Escaláveis**

### **3.1 Formatos de Armazenamento Otimizados**

* Iceberg, Delta Lake, Hudi:

  * Apache Iceberg Project Documentation (2023).
  * Venkataraman, Shivnath et al. “Apache Hudi: A Transactional Data Lake Framework.” *arXiv:2006.00595*, 2020.

### **3.2 Catálogos e Metadados**

* Open Table Formats:

  * Memon, Salman et al. “Lakehouse Catalogs and Open Formats: Unity Catalog vs. Hive Metastore.” *Databricks Blog*, 2023.
  * AWS Glue Catalog, Apache Hive Metastore, Unity Catalog (Documentações oficiais atualizadas, 2023).

---

## **4. Práticas Avançadas**

### **Projetos Práticos com Aplicação Real**

1. **Pipeline Híbrido em Larga Escala**

   * **Objetivo:** Construção de arquitetura Lambda com *Apache Kafka + Apache Spark + Delta Lake*.
   * **Tecnologias:** Apache Kafka, Apache Spark Structured Streaming, Delta Lake, Airflow.
   * **Entregável:** ETL batch + stream operando com tolerância a falhas e acoplamento ao Delta Lake.

2. **Pipeline Exactly-Once com Apache Flink**

   * **Objetivo:** Implementação de fluxo de dados com garantia de exactly-once semantics.
   * **Tecnologias:** Apache Flink, Kafka, PostgreSQL.
   * **Entregável:** Pipeline com checkpointing e gerência de estado persistente via RocksDB backend.

3. **Arquitetura Lakehouse Empresarial**

   * **Objetivo:** Unificação de DW e DS com Iceberg + Spark + Unity Catalog.
   * **Tecnologias:** Apache Iceberg, Apache Spark, Unity Catalog.
   * **Entregável:** Camada de ingestão e análise de dados transacionais e analíticos sob formato unificado.

4. **Gerência de Metadados em Pipelines de Dados**

   * **Objetivo:** Implementação de gerenciamento de schema evolution, versionamento e controle de acesso.
   * **Tecnologias:** Apache Hive Metastore, Unity Catalog, dbt.
   * **Entregável:** Pipeline com governança completa via catalogação e versionamento.

5. **Simulação de Trade-offs: Latência vs Consistência**

   * **Objetivo:** Simulação prática das tensões entre latência, custo e exatidão no processamento de fluxos.
   * **Tecnologias:** Apache Beam (via Dataflow), Flink, Jupyter Notebooks.
   * **Entregável:** Relatório analítico e gráfico sobre comportamento sob diferentes modos de execução (event time vs processing time).

---

# **Módulo 4 – Transmissão e Processamento de Fluxos: Kafka, Event Sourcing e além**

### **Objetivo Geral**

Dominar os fundamentos teóricos, arquiteturais e práticos da transmissão de dados em tempo real por meio de fluxos contínuos e arquiteturas orientadas a eventos. Compreender os princípios que norteiam o processamento distribuído, tolerância a falhas, consistência, imutabilidade e resiliência em sistemas críticos.

---

## **1. Arquiteturas de Fluxo e Mensageria Distribuída**

### **Leituras Fundamentais**

* **Kleppmann, Martin.** *Designing Data-Intensive Applications*. O'Reilly Media, 2017.

  * Capítulos 10 a 12: Discussão aprofundada sobre sistemas de eventos, logs distribuídos, e consistência em ambientes real-time.
* **Kreps, Jay.** *The Log: What every software engineer should know about real-time data’s unifying abstraction*. LinkedIn Engineering Blog, 2013.

  * Conceito de log como backbone arquitetural.
* **Kreps, Jay; Narkhede, Neha; Rao, Jun.** *Kafka: a Distributed Messaging System for Log Processing*. LinkedIn Engineering, 2011.
* **Jakubowicz, Julien.** *Kafka: The Definitive Guide*. 2ª ed., O’Reilly, 2021.

### **Complementos Técnicos**

* **Rao, Jun; Kreps, Jay et al.** *Kafka Improvement Proposals (KIPs)* – Documentação técnica oficial do Apache Kafka sobre evoluções recentes.

  * KIP-500: Remoção do Apache ZooKeeper.
  * KIP-714: Tiered Storage.

---

## **2. Modelagem de Eventos e Padrões Arquiteturais**

### **Referências Teóricas**

* **Fowler, Martin.** *Event Sourcing*. martinfowler.com, 2005 (atualizado regularmente).
* **Young, Greg.** *A Decade of DDD, CQRS, Event Sourcing*. QCon, 2016.
* **Gautier, Nicolas; Hariri, Brahim.** *An Empirical Study of Event-Driven Microservices*. Journal of Systems and Software, Elsevier, 2021.

  * DOI: 10.1016/j.jss.2021.111173

### **Estudos Avançados**

* **Pardo, Abelardo.** *Stream Processing with Apache Flink and Event-Driven Architectures*. ACM Transactions on Internet Technology, 2023.
* **Yuan, Chen et al.** *Kafka-Connect: Towards Unified and Scalable Data Integration*. Proceedings of the VLDB Endowment, 2022.

---

## **3. Change Data Capture (CDC) e Evolução de Estados**

### **Fontes Relevantes**

* **Debezium Documentation** (debezium.io) — Captura de alterações em bancos relacionais com Kafka.
* **Maxwell’s Daemon** (zendesk/maxwell) — CDC para MySQL.
* **Redpanda** (alternativa moderna ao Kafka com menor latência e sem dependência de Zookeeper).

  * *Redpanda vs Kafka: Architectural Comparison*, Vectorized Inc., 2023.
* **Microsoft** – *Introduction to Event Sourcing and CDC in Azure CosmosDB*, 2022.

---

## **4. Consistência, Ordem e Tolerância a Falhas**

### **Referências Teóricas**

* **Akidau, Tyler et al.** *The Dataflow Model: A Practical Approach to Balancing Correctness, Latency, and Cost in Massive-Scale, Unbounded, Out-of-Order Data Processing*. VLDB, 2015.
* **Akidau, Tyler et al.** *Out-of-Order Processing in Streaming Systems*. Communications of the ACM, 2013.
* **Santos, Gustavo et al.** *Exactly-Once Semantics in Apache Flink and Kafka: A Case Study*. IEEE Transactions on Parallel and Distributed Systems, 2022.

---

## **5. Tecnologias Principais**

| Categoria                     | Tecnologias Utilizadas                                               |
| ----------------------------- | -------------------------------------------------------------------- |
| Mensageria distribuída        | Apache Kafka, Redpanda, Apache Pulsar                                |
| CDC e integração de dados     | Debezium, Maxwell, Kafka Connect, Flink CDC Connector                |
| Stream processing             | Apache Flink, Apache Beam, Kafka Streams, Quarkus Reactive Messaging |
| Serialização de dados         | Apache Avro, Protobuf, JSON Schema, Schema Registry                  |
| Observabilidade e resiliência | Chaos Monkey, Gremlin, Prometheus, Grafana, Zipkin                   |
| Plataforma alternativa        | Confluent Cloud, Redpanda Cloud, Amazon MSK                          |

---

## **Práticas Avançadas**

### **1. Implementação de um Pipeline CDC Real-Time com Materialização**

**Objetivo:** Capturar alterações de um banco PostgreSQL em tempo real e propagar eventos para múltiplos consumidores com esquema versionado e baixa latência.

**Tecnologias:** PostgreSQL + Debezium + Kafka + Avro + Kafka Connect + Schema Registry + Materialized Views.

---

### **2. Simulação de Falhas em Arquiteturas Event-Driven (Chaos Engineering)**

**Objetivo:** Avaliar a resiliência e latência de um sistema baseado em Kafka e Flink sob injeção de falhas artificiais.

**Ferramentas:** Kafka Streams + Flink + Gremlin + Prometheus + Grafana.

---

### **3. Implementação de Event Sourcing + CQRS**

**Objetivo:** Desenvolver uma aplicação financeira ou de ordens de serviço com Event Store e projeções materializadas para leitura.

**Tecnologias:** Axon Framework ou EventStoreDB + Spring Boot ou Quarkus + Kafka ou Pulsar.

---

### **4. Benchmark e Comparação: Kafka vs Redpanda**

**Objetivo:** Avaliar throughput, latência, tolerância a falhas, custo de operação e facilidade de manutenção.

**Critérios:** Cenários de produção com 1M+ eventos por hora, múltiplas partições, replicação cruzada.

---

### **5. CDC e Integração Multi-Cluster**

**Objetivo:** Sincronizar bancos em diferentes regiões usando CDC com semântica de Exactly-Once.

**Tecnologias:** Debezium + Kafka + Kafka MirrorMaker 2 + Confluent Replicator.

---

# **Módulo 5 – Mensageria Moderna, NATS e Arquiteturas Reativas Concorrentes**

### **Objetivo Geral**

Explorar mensageria de altíssimo desempenho com foco em sistemas distribuídos contemporâneos, abordando o paradigma reativo, assincronicidade orientada a eventos, tolerância a falhas, concorrência coordenada e streaming nativo, por meio de ferramentas modernas como **NATS**, **JetStream**, **gRPC**, **WebSub**, **Reactive Streams**, **Akka**, entre outras.

---

## **1. NATS e Mensageria Ultraleve em Sistemas Distribuídos**

### **Referências Fundamentais**

* **Williams, Waldemar Scherer.** *NATS Essentials: Cloud Native Messaging for Modern Applications*. O’Reilly Media, 2021.
* **Klie, Byron Ruth.** *High Performance Event Messaging with NATS and JetStream*. *InfoQ*, 2022.
* **NATS.io – Documentation and Architecture Overview**, Synadia, 2024.

  * Principais conceitos: Publish/Subscribe, Request/Reply, Streaming, JetStream, multi-tenancy, fault tolerance, observability.

### **Tópicos Cobertos**

* NATS Core Protocol (Request/Reply, Pub/Sub).
* NATS JetStream (durable streams, message persistence, replay, deduplication).
* Push vs Pull Consumers.
* Clusterização e tolerância a partições.
* NKEYs e JWT-based Auth (identidade distribuída sem segredo centralizado).
* Operações multi-tenant e supervisão federada.

---

## **2. Arquiteturas Reativas e Modelos de Assincronicidade**

### **Fundamentos Teóricos**

* **Bonér, Jonas et al.** *The Reactive Manifesto*, 2.0, 2014–2023.
* **Pautasso, Cesare et al.** *Reactive Systems Explained*. IEEE Software, 2021.
* **Chapple, Mike.** *Reactive Microservices in Java*. O’Reilly, 2022.
* **Hellerstein, Joseph.** *Asynchrony in Data Systems: A First-Class Concern*. ACM Queue, 2020.

### **Tópicos Cobertos**

* Princípios de sistemas reativos: responsividade, resiliência, elasticidade e orientação a mensagens.
* Modelo de *backpressure* com Reactive Streams.
* Fluxos reativos com operadores de composição (map, flatMap, merge, window, retry, buffer).
* Event loops e IO não-bloqueante (Netty, Quarkus, Vert.x).

---

## **3. Concorrência e Paralelismo Orientados a Eventos**

### **Referências Técnicas**

* **Goetz, Brian et al.** *Structured Concurrency in Java*. OpenJDK JEP-453, 2023.
* **Klug, Daniel et al.** *Modern Concurrency in Rust*. Pragmatic Bookshelf, 2021.
* **Thomson, Alex.** *Concurrency Control and Modern Messaging*. VLDB, 2022.
* **Hellerstein, Joseph et al.** *The Case for Event Loops in Distributed Concurrency*. ACM Transactions on Computer Systems, 2023.

### **Tópicos Cobertos**

* Structured concurrency (Java, Kotlin, Rust).
* Channels, select, futures, actors (inspirado em Go, Erlang, Akka, Tokio).
* Multiplexação de eventos: epoll, io\_uring, Netty.
* Isolamento de contexto e cancelamento propagável.
* Concorrência determinística e controlável (com event sourcing e CRDTs).

---

## **4. Ecossistema Industrial Moderno de Mensageria**

| Tecnologia                   | Descrição Técnica                                                                |
| ---------------------------- | -------------------------------------------------------------------------------- |
| **NATS**                     | Mensageria leve, encriptada, com JetStream para persistência e replicação.       |
| **Apache Pulsar**            | Mensageria distribuída com suporte nativo a tópicos particionados e backlog.     |
| **gRPC**                     | RPC performático baseado em HTTP/2 e Protobuf, com suporte bidirecional.         |
| **WebSub (W3C)**             | Pub/Sub via Web para sistemas descentralizados.                                  |
| **Akka / Pekko**             | Sistema de atores concorrentes com resiliência supervisionada.                   |
| **Reactive Streams**         | Interoperabilidade entre bibliotecas assíncronas reativas (Java, Kotlin, Scala). |
| **Project Reactor / RxJava** | Pipelines reativos com backpressure integrado.                                   |

---

## **5. Práticas Avançadas**

### **1. Arquitetura Reativa Full-Duplex com NATS + JetStream**

**Objetivo:** Construir um sistema de notificação e resposta de baixa latência com replay de mensagens, garantias de entrega e consumo escalável.

**Tecnologias:** NATS JetStream, Go, Prometheus, Grafana.

---

### **2. Sistema de Monitoramento com Alertas Event-Driven via gRPC + NATS**

**Objetivo:** Gerar, propagar e consumir alertas em tempo real a partir de sensores simulados, com escalabilidade horizontal e enfileiramento resiliente.

**Tecnologias:** NATS + gRPC + Protocol Buffers + Node.js + Grafana Loki.

---

### **3. Sistema de Concorrência com Structured Concurrency (Kotlin ou Java)**

**Objetivo:** Desenvolver um serviço de ingestão de dados paralelos com isolamento seguro de tarefas, cancelamento programado e supervisão de falhas.

**Tecnologias:** Kotlin Coroutines + JetBrains Flow + NATS ou Pulsar.

---

### **4. Comparação de Throughput e Latência: Kafka vs Pulsar vs NATS**

**Objetivo:** Benchmark controlado dos três sistemas com simulação de carga realista (10M msgs/dia), com foco em latência de entrega, retenção, e resiliência.

**Ferramentas:** K6, Prometheus, JMeter, NATS CLI, Confluent CLI, Pulsar Manager.

---

### **5. Event System Design com Akka Actors e Streams Reativos**

**Objetivo:** Modelar um sistema concorrente com atores supervisionados e fluxo contínuo de mensagens com falhas recuperáveis.

**Tecnologias:** Akka Typed + Akka Streams + Scala + NATS bridge.

---

## **Considerações Epistemológicas**

Este módulo articula o avanço teórico da mensageria com a transição paradigmática da computação síncrona para modelos de causalidade assíncrona, onde o tempo e a ordem dos eventos tornam-se entidades computacionais explícitas. Tal transformação exige nova epistemologia para o tratamento da simultaneidade, do determinismo e da tolerância à incerteza em sistemas reativos.

A emergência de tecnologias como **NATS**, **JetStream**, **gRPC bidirecional** e arquiteturas com **structured concurrency** representam uma mudança de época na construção de sistemas distribuídos. Eles se alinham a exigências de resiliência, baixo acoplamento, latência mínima e controle semântico sobre fluxos em ambientes adversos.

---
## **Módulo 6 – Inteligência Artificial, Semântica e Interoperabilidade dos Dados**

### **Objetivo**

Estudar e aplicar modelos semânticos e ontológicos para garantir interoperabilidade entre sistemas, integrando-os a arquiteturas de engenharia de dados com suporte a pipelines de machine learning em tempo real, utilizando práticas contemporâneas e ferramentas aplicadas no setor industrial.

---

### **Estudos Fundamentais**

#### 1. **Ontologias e Web Semântica**

* Gruber, T. R. (1993). *A translation approach to portable ontology specifications*. Knowledge Acquisition, 5(2), 199–220.
* Berners-Lee, T., Hendler, J., & Lassila, O. (2001). *The Semantic Web*. Scientific American, 284(5), 28–37.
* W3C Standards: RDF 1.1, OWL 2, SPARQL 1.1 Query Language.

#### 2. **Grafos de Conhecimento (Knowledge Graphs)**

* Hogan, A. et al. (2021). *Knowledge Graphs*. ACM Computing Surveys (CSUR), 54(4), 1–37. [https://doi.org/10.1145/3447772](https://doi.org/10.1145/3447772)
* Ehrlinger, L., & Wöß, W. (2022). *Semantic Knowledge Graphs for Data Management*. Data Intelligence, 4(1), 34–51.

#### 3. **Interoperabilidade e Integração Semântica**

* Santarelli, G. et al. (2021). *Ontop: Virtual Knowledge Graphs for Semantic Access to Relational Data*. Semantic Web Journal, 12(3), 505–530.
* Motik, B. et al. (2020). *RDFox: A highly-scalable knowledge graph store*. The Semantic Web – ISWC 2020, Lecture Notes in Computer Science, vol. 12506. Springer.

#### 4. **Integração com Inteligência Artificial**

* Tecton. (2021). *Real-time Machine Learning Feature Platforms*. \[Whitepaper].
* Gojek Engineering. (2020). *Feast: An open-source feature store for machine learning*. \[Technical Documentation].
* Zaharia, M. et al. (2020). *Accelerating the Machine Learning Lifecycle with MLflow*. IEEE Data Engineering Bulletin, 43(2), 39–45.

#### 5. **Padrões e Modelos Emergentes**

* García-Silva, A. et al. (2021). *Semantic Representations for ML Model Metadata Interoperability*. Journal of Web Semantics, 71, 100665.
* Kharlamov, E. et al. (2021). *Ontology-based Data Access: A Survey*. VLDB Journal, 30(3), 393–430.

---

### **Práticas Avançadas**

1. **Construção de um Grafo de Conhecimento com RDFox e Ontop**

   * Conversão semântica de dados relacionais para RDF com mapeamento automático.
   * Consulta semântica com SPARQL sobre dados virtuais.

2. **Implementação de Feature Store em Tempo Real com Tecton**

   * Integração com pipelines em Apache Flink para extração de features em tempo real.
   * Deploy e versionamento de features com MLflow + Tecton.

3. **Análise Semântica de Entidades em Dados Heterogêneos**

   * Normalização semântica com OWL e SHACL.
   * Uso de técnicas de Entity Resolution assistida por ML com Dedupe.io e DeepMatcher.

4. **Geração de Ontologias Automatizadas com Aprendizado de Máquina**

   * Uso de ferramentas como DeepOnto (2023) para aprendizado de estruturas ontológicas.
   * Avaliação semântica com Reasoners OWL (Hermit, Pellet).

5. **Integração de Grafos com Modelos de LLMs (Graph + Text)**

   * Uso de LLMs para enriquecimento semântico de grafos.
   * Aplicações com LangChain + Neo4j + OpenAI Embeddings.

---

### **Ferramentas e Tecnologias Utilizadas**

* **Ontologias e Semântica**: OWL, RDF, SPARQL, SHACL, RDFox, Ontop, Protégé.
* **Grafos de Conhecimento**: Neo4j, Stardog, Blazegraph, GraphDB.
* **Machine Learning Operacionalizado**: MLflow, Feast, Tecton, TensorFlow Extended (TFX), SageMaker Feature Store.
* **Repositórios e Catálogos Semânticos**: DataHub + Metadata Models, OpenMetadata com extensões semânticas.
* **Plataformas Híbridas**: LangChain, LLM + Vector + Graph architectures (e.g., Neo4j + LlamaIndex).

---

### **Projetos Recomendados para Aplicação**

1. **Grafo de Conhecimento Setorial**

   * Objetivo: modelar um domínio específico (e.g., saúde, jurídico, financeiro) usando OWL + RDFox.
   * Resultado: interoperabilidade entre múltiplas bases relacionais, acesso semântico via SPARQL.

2. **Pipeline ML com Feature Store em Tempo Real**

   * Arquitetura: Flink + Tecton + MLflow.
   * Resultado: engenharia e reutilização de features em produção com baixa latência.

3. **Semantização de Dados Corporativos**

   * Objetivo: aplicar mapeamento automático e curadoria semântica em dados organizacionais.
   * Ferramentas: Ontop, SHACL, Protégé + Reasoners.

4. **Integração de Grafos de Conhecimento com LLMs**

   * Objetivo: melhorar inferência e enriquecimento de grafos com embeddings semânticos.
   * Frameworks: Neo4j + LangChain + OpenAI API.

---

## **Módulo 7 – Fronteiras e Tendências Avançadas da Engenharia de Dados**

### ** Objetivo:**

Explorar as fronteiras do conhecimento em Engenharia de Dados, abordando paradigmas emergentes, sistemas pós-relacionais, práticas descentralizadas, computação quântica, confiabilidade programática, e a integração com linguagens formais, IA nativa e ética algorítmica.

---

### ** Estudos:**

#### **1. Paradigmas Emergentes:**

* **Data Mesh e Arquitetura Orientada a Domínio:**

  * Dehghani, Zhamak. *Data Mesh: Delivering Data-Driven Value at Scale*. O’Reilly, 2022.
  * Dehghani, Zhamak. *Data Mesh Principles and Logical Architecture*, Thoughtworks (2022).
  * Uber’s Databook: Metadata Management at Scale, 2021.

* **Data-as-a-Product e Governança Federada:**

  * Montiel, Maxime. *Data as a Product: Modern Analytics on the Data Mesh*. O’Reilly, 2023.

#### **2. Privacidade, Ética e Segurança:**

* **Privacidade Diferencial e Proteção Formal:**

  * Dwork, Cynthia. *The Algorithmic Foundations of Differential Privacy*, 2014.
  * Google’s PipelineDP Framework.
  * Apple’s deployment of local DP in iOS.
* **Zero-Knowledge Proofs (ZKP) e Blockchain em Dados:**

  * *zk-SNARKs for Big Data Verification*, Zcash Foundation.
  * Buterin, Vitalik. *Ethereum and zk-Rollups*, Ethereum Foundation, 2023.

#### **3. Computação Pós-Clássica e Persistência Moderna:**

* **Bancos de Dados Quânticos e Algoritmos de Busca:**

  * Montanaro, Ashley. *Quantum Algorithms: An Overview*, npj Quantum Information, 2023.
  * IBM Research. *Quantum Algorithms for Structured Search*, 2023.

* **Bancos de Dados Baseados em IA:**

  * PGML: Machine Learning Inside PostgreSQL (SIGMOD, 2022).
  * DuckDB + ML Extensions.

#### **4. Integração Formal e Programabilidade:**

* **Verificação Formal de Sistemas de Dados:**

  * CIDR 2023. *Formal Verification of Relational Query Plans*.
  * TLA+ em workflows de dados: Lamport, Leslie.

* **DBOS (Database Operating System):**

  * Hellerstein et al., UC Berkeley. *DBOS: Rethinking the OS for Distributed Dataflow*, 2023.
  * Unificação de transações, orquestração e controle sob consistência distribuída.

#### **5. Computação Descentralizada e Web3 para Dados:**

* IPFS, Filecoin, Ceramic Network.
* Lens Protocol + Graph Protocol (Web3 indexable data).

---

### ** Práticas Avançadas:**

* **1. Arquitetura Data Mesh com Infraestrutura Federada:**

  * Implementação de produtos de dados com Apache Iceberg + Airflow + Kafka.
  * Governança federada com OpenMetadata e controle de acesso por domínio.

* **2. Pipeline com Privacidade Diferencial Real:**

  * PipelineDP + TensorFlow Privacy.
  * Limitação de inferência em dados com laplace e gaussian noise calibrado.

* **3. Validação Formal de Pipelines e Transações:**

  * Modelagem de consistência eventual com TLA+.
  * Simulação de conflitos em sistemas distribuídos com Jepsen (Kyle Kingsbury).

* **4. Infraestrutura Nativa Web3:**

  * Armazenamento e indexação com IPFS + Ceramic.
  * Prova de integridade de dados com zk-SNARK + Ethereum testnet.

* **5. Federated Learning e Edge AI:**

  * Treinamento descentralizado com Flower (Python FL Framework).
  * Deploy federado com Google TensorFlow Federated (TFF).

* **6. Grafos Epistêmicos e Representações de Conhecimento:**

  * Construção de epistemic knowledge graphs em GraphDB com OWL + SHACL.
  * Consulta formal com SPARQL para inferência crítica.

* **7. AI-Native Databases e Consultas Probabilísticas:**

  * DuckDB com extensões de aprendizado.
  * Linguagens probabilísticas como ProbLog ou BayesDB.

* **8. Quantum + Dados:**

  * Simulação de algoritmos Grover e amplitude amplification aplicados à recuperação de dados.
  * Representação vetorial de dados quânticos com Qiskit + PennyLane.

---

### ** Tendências Futuras e Referências Pós-2023**

#### **Publicações Recentes:**

* CIDR 2024 – *Beyond Query Optimization: Formal Methods in Data Systems*.
* NeurIPS 2023 – *Scalable Privacy-Preserving Federated Learning at Scale*.
* VLDB 2024 – *Explainable Feature Stores and Data Observability*.
* SIGMOD 2023 – *Time-Aware and Event-Driven Data Systems*.

#### **Conceitos Emergentes:**

* **Vector Databases + LLM Integration (e.g., Weaviate, Pinecone).**
* **Self-describing data pipelines (Polars + Arrow + Data Contracts).**
* **AI Data Curation Agents (OpenAI GPT + LangChain + Airbyte).**
* **Augmented Data Catalogs com RAG (Retrieval-Augmented Generation).**
* **Verifiable Computation e zk-ML.**

---

### **📎 Complementos Teóricos e Epistemológicos**

* **Epistemologia dos Dados e Engenharia:**

  * Floridi, Luciano. *The Philosophy of Information*. Oxford, 2011.
  * Leonelli, Sabina. *Data-Centric Biology*, 2016.

* **Teoria Computacional Aplicada à Engenharia de Dados:**

  * Abiteboul, Serge. *Foundations of Databases*. Addison-Wesley, 1995.
  * Manna, Zohar & Pnueli, Amir. *Temporal Verification of Reactive Systems*, 1995.




