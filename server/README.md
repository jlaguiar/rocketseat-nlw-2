# Funcionalidade

## Conexões

- Rota para listar o total de conexões realizadas;
- Rota para criar uma nova conexão;

## Aulas

- Rota para criar uma aula;
- Rota para listar aulas;
    - Filtrar por: matéria, dia da semana e horário;

knex ele permite que escreva as query para o sql em js, por exemplo: 
SELECT * FROM users
knex('users').select('*')