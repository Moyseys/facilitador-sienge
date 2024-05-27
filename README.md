# Objetivo 

Adicionar informações de E-mail, Telefone e Endereço em credores que não possuem essas informações cadastradas.

# Problema

Há mais de 5.000 credores cadastrados, caso conseguíssemos fazer 50 por dia demoraríamos 100 dias, além de ser um trabalho repetitivo e tedioso.

# Solução

1. Corrigir todas as informações de Credores **manualmente**
   1. **Ponto positivo:** …
   2. **Ponto negativo:** O processo é altamente demorado, demandando 100 dias para completar as 5.000 correções, assumindo uma taxa constante de 50 por dia. Trabalho tedioso e repetitivo, além de haver risco de erros humanos, como digitação.
2. Criar um “Bot” para automatizar o processo
   1. **Ponto positivo:** Totalmente automatizado, utilização do tempo de maneira eficiente. Caso cada operação de correção demore 5 minutos o tempo para corrigir todos os 5000 Credores seria de 16:35H
   2. **Ponto negativo:** O único custo dele será o tempo dedicado ao desenvolvimento, que por sua vez é compensado pelo tempo de execução poupado.

# Conclusão

A escolha entre correção manual e automação com um Bot deve considerar o custo-benefício a longo prazo. A correção manual, embora controlada, é demorada e suscetível a erros humanos. A automação, por outro lado, oferece uma solução eficiente e rápida, reduzindo significativamente o tempo e o esforço necessário, apesar do investimento inicial no desenvolvimento do Bot. Portanto, a automação é a solução recomendada para garantir a atualização precisa e eficiente das informações de contato dos credores.

# Algoritmo do Bot

- [ ] Encontrar um credor que ainda não foi corrigido e que precisa ser corrigido
- [ ] Buscar dados do credor
- [ ] Salvar dados do credor em um arquivo JSON
- [ ] Abrir plataforma Sienge
- [ ] Pesquisar pelo Credor
- [ ] Editar Credor
- [ ] Inserir dados novos do Credor
- [ ] Anexar arquivo JSON com as informações do Credor
- [ ] Salvar
- [ ] Repetir
