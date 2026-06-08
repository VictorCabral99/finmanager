# FinManager API

API REST para gestão financeira pessoal — controle de receitas, despesas e acompanhamento do orçamento. É o backend do ecossistema **FinManager** (frontend em [finmanager-web](https://github.com/VictorCabral99/finmanager-web)).

## Stack

- **Java 21**
- **Spring Boot 3.2** (Web, Data JPA)
- **Hibernate** + **SQLite**
- **Lombok**
- **Maven** (com wrapper `mvnw`)

## Pré-requisitos

- JDK 21+
- Maven 3.9+ (ou use o wrapper incluído)

## Como rodar

```bash
# Linux / macOS
./mvnw spring-boot:run

# Windows
mvnw.cmd spring-boot:run
```

A aplicação sobe por padrão em `http://localhost:8080`.

## Build

```bash
./mvnw clean package
java -jar target/finmanager-0.0.1-SNAPSHOT.jar
```

## Testes

```bash
./mvnw test
```

## Estrutura

```
src/main/java/br/com/finmanager
├── config         # Configurações da aplicação
├── controllers    # Endpoints REST
├── models         # Entidades e enums de domínio
├── repositories   # Acesso a dados (JPA)
└── services       # Regras de negócio
```

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE).
