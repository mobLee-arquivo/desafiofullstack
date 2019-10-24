# Desafio para a vaga de Desenvolvedor Fullstack
Se você recebeu esse link, provavelmente você se candidatou para a vaga de Fullstack do time de produto da mobLee. Então, primeiramente, parabéns por ter sido selecionado =)

O objetivo desse desafio é identificar a qualidade do código, entender um pouco da sua lógica de programação e capturar a forma com a qual você organiza essas ideias.

Abaixo seguem todas as instruções para você conseguir executar o desafio.

### Como entregar este desafio
1. Faça um fork deste repositório no Github (ou qualquer outro gerenciador git da sua preferência).
2. Edite esse README e mantenha ele atualizado com as informações necessárias para compreender/executar seu projeto e qualquer outra informação relevante para que tenhamos a melhor compreensão possível do seu desafio
3. Ao final do desafio, responda o e-mail que você recebeu enviando o link do seu repositório.

Obs.: Não fazer um Pull Request para este projeto!

### Com o que devo me preocupar quando for entregar os desafios?
- Descreva como utilizar e executar a sua solução;
- Procure deixar seu código bem organizado;
- Faça commits curtos e com descrição clara do que cada commit faz;
- Descreva qualquer outra coisa que acha importante sabermos :)
- Não se limite aos requisitos destes desafios. Sinta-se em casa em adicionar mais detalhes a solução.

Você deve fazer o desafio em Javascript, que é a principal linguagem que estamos trabalhando atualmente, mas se você realmente domina outra linguagem e acredita que seu código ficará melhor utilizando-a, sinta-se à vontade. Se você utilizar os frameworks React ou Vue já sai na frente. 

## Desafio 1 - API Graphql
**Objetivo:** criar uma API GraphQL que funcione como uma interface intermediária para a [API de question do StackOverflow](https://api.stackexchange.com/docs/questions).

### Descrição
Essa chamada de API precisa receber como input 4 parâmetros:
- O parâmetro 'score' deve filtrar o resultado mostrando apenas as questões com valor maior que o definido por parâmetro. 
- O parâmetro 'sort' define a propriedade utilizada para ordenar os resultados.  
- O parâmetro 'limit' define o número de resultados.
- O parâmetro 'tag' define a tag que você quer buscar

Apenas o parâmetro 'tag' precisa ser obrigatório. Para os outros parâmetros, defina um valor default.

## Desafio 2 - Front-end
**Objetivo:** Implementar [esta interface](https://drive.google.com/file/d/1TeyJx9meFHKFH33VeqzfNeXcA0V_gsIu/view) e conectar ela ao back-end criado no Desafio 1.

### Descrição
Ao clicar em buscar, você deve consultar a API GraphQL que você implementou e mostrar os resultados abaixo, na mesma página, sem recarregá-la. Sua busca deve sempre trazer resultados para a tag 'Javascript'.

Você pode mostrar os resultados da forma que achar melhor. Capricho na interface e bons feedbacks para o usuário contam pontos para sua avaliação.

---
Se tiver dúvidas, não hesite em perguntar!

Aqui vão alguns links úteis:
https://api.stackexchange.com/docs/questions
http://graphql.org/learn/
https://www.apollographql.com/
