# App

 Gympass Style App.

 ## RFs (Requisitos Funcionais)
 - São as funcionalidades da aplicação o que é possivel o usuario fazer na aplicação.

  - [ ] Deve ser possivel se cadastrar;
  - [ ] Deve ser possivel se autenticar;
  - [ ] Deve ser possivel obter o perfil de um usuário logado;
  - [ ] Deve ser possivel obter o número de check-ins realizados pelo usuário logado;
  - [ ] Deve ser possivel o usuário obter seu histórico de check-ins;
  - [ ] Deve ser possivel o usuário buscar academias próximas;
  - [ ] Deve ser possivel o usuário buscar academias pelo nome;
  - [ ] Deve ser possivel o usuário realizar check-in em uma academia;
  - [ ] Deve ser possivel o validar o check-in de um usuário;
  - [ ] Deve ser possivel cadastar uma academia;

 ## RNs (Requisitos de negócio)
 - São caminhos que cada requisito pode tomar para ser executado.
 - Determina que condições que são aplicadas para cada requisito.
 - Ex: O usuario só vai poder fazer o checkin se ele estiver a menos de 10km da academia.

 - [ ] O usuário não deve poder se cadastrar com um email já cadastrado;
 - [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
 - [ ] O usuário não pode fazer check-in se não tiver perto (100m) da academia;
 - [ ] O check-in só pode ser validado até 20 minutos após criado;
 - [ ] O check-in só pode ser validado por administradores;
 - [ ] A academia só pode ser cadastrada por administradores;

 ## RNFs (Requisitos Não Funcionais)
 - São requisitos que não estão ligados diretamente com as funcionalidades da aplicação.
 - São requisitos muito mais tecnicos do que funcionais.
 - Apenas para entendimento do desenvolvedor e não do usuario.
 - Ex: A aplicação deve ser desenvolvida em Node.js, utilizar o banco de dados Postgres, ter paginação de 10 em 10 itens, etc.

 - [ ] A senha do usuário deve ser criptografada;
 - [ ] Os dados da aplicação devem estar persistidos em um banco de dados (Postgres);
 - [ ] Todas listas de daods precisam estar paginadas com 20 itens por página;
 - [ ] O usuário deve ser identificado por um token JWT (Json Web Token);