### Dicas
- Instalar o pacote renovate para atualizar automaticamente as dependencias do projeto

## Anotações
 ### SOLID

 ### Repositório
    - Repositorios todas as operações com o banco de dados vão passar pelos repositórios
    - Repositórios possuem apenas metodos que fazem operações com o banco de dados
    - Repositórios não devem ter responsabilidade sobre os erros

 ### Use Cases
    - Use Cases são responsáveis por toda a regra de negócio da aplicação
    - Use Cases não devem ter responsabilidade sobre os erros

## Comandos
#### Prisma
- `prisma migrate dev` - Cria as tabelas no banco de dados
- `prisma migrate reset` - Reseta as tabelas do banco de dados
- `prisma generate` - Gera os arquivos de typescript para o banco de dados

#### Docker
- `docker run --name api-solid-pg -e POSTGRES_PASSWORD=postgres -p 5432:5432 bitnami/postgresql` - Cria um container com o postgres
- `docker start api-solid-pg` - Inicia o container com o postgres
- `docker stop api-solid-pg` - Para o container com o postgres
- `docker rm api-solid-pg` - Remove o container com o postgres

#### Docker Compose
- `docker-compose up -d` - Inicia os containers em background
- `docker-compose stop` - Para os containers
- `docker-compose down` - Para e remove os containers
- `docker-compose logs -f` - Mostra os logs dos containers
- `docker-compose ps -a` - Mostra os containers


## Banco de dados
- Relacionamentos
    - 1:1 => Relacionamento de 1 para 1 (1 usuário pode ter 1 check-in)
    - 1:N => Relacionamento de 1 para muitos (1 usuário pode ter muitos check-ins)
    - N:N => Relacionamento de muitos para muitos (1 usuário pode ter muitos check-ins e 1 check-in pode ter muitos usuários)