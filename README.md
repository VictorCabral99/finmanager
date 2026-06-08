# FinManager

Gestão financeira pessoal — controle de receitas, despesas e orçamentos. Este repositório unifica as três partes do produto em um único monorepo.

## Estrutura

```
finmanager/
├── backend/   # API REST — Java 21 + Spring Boot 3 + JPA + SQLite
├── web/       # App web — Angular 17 + TypeScript
└── mobile/    # App mobile — React Native
```

## Backend (`backend/`)

API REST em Spring Boot.

```bash
cd backend
./mvnw spring-boot:run     # sobe a API (porta padrão 8080)
./mvnw test                # testes
```

## Web (`web/`)

SPA em Angular.

```bash
cd web
npm install
npm start                  # ng serve em http://localhost:4200
```

## Mobile (`mobile/`)

App em React Native.

```bash
cd mobile
npm install
npm run android            # ou: npm run ios
```

## Histórico

O monorepo preserva o histórico de commits do backend (a parte mais desenvolvida). Web e mobile foram incorporados a partir de seus repositórios originais.

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE).
