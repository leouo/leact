## Sobre este projeto
Leact é uma biblioteca para construção de interfaces reativas. É fortemente baseada na API e nos conceitos do núcleo da biblioteca React.js.

> Esta biblioteca foi desenvolvida apenas para fins de estudo e não é recomendável o uso em produção.


### Funcionalidades da biblioteca

#### Gerenciamento de estado
- Capacidade de armazenar uma estrutura de dados que represente o estado da aplicação.
- Capacidade de consulta e alteração do estado de forma imutável.

#### Renderização de elementos DOM
- Renderiza uma árvore de elementos DOM a partir de uma estrutura de dados que represente a aplicação (Virtual DOM).
- Cada nó desta estrutura de dados pode ter um Tipo (Elemento HTML ou Componente), Atributos (Incluindo métodos como Eventos DOM) e uma lista de filhos/nós.

#### Componentização
- Uma Classe que faz a abstração das funcionalidades citadas acima.


## Funcionamento interno

### Conceitos básicos
Assim como o `React.js`, `Vue.js` e muitos outras libs/frameworks usufruem das técnicas de componentização e renderização de DOM baseado em uma estrutura de dados, o `Leact` segue a mesma linha.

#### Virtual DOM
Internamente, o `Leact` constroi toda a árvore de DOM da aplicação baseado em uma estrutura de dados que representa os elementos e componentes.

Na API do `Leact` existe o método `createVNode` que dado um objeto de elemento válido, retorna um nó de Virtual DOM.

#### Componente
A API do `Leact` fornece a classe `Component` que permite extender uma classe comum para transforma-la em um componente Leact.

#### Renderização do DOM
A renderização da aplicação é feita a partir do Virtual DOM montado. Após a aplicação ser renderizada, o processo de atualização de elementos no DOM ocorre somente nos elementos de DOM respectivos do componente que sofreu a atualização de estado.


## Instalação e Build

#### Instalação
Execute o comando para instalar as dependências do projeto:
```
  yarn
```

#### Build da aplicação
Execute o comando:
```
  yarn build
```

#### Rodando testes
Execute o comando para rodar todos os testes:
```
  yarn test
```

Ou para rodar os testes no modo `watch`:
```
  yarn test:watch
```
