# :video_game: Sobre o Alura Geek
De forma resumida, é um e-commerce geek, com produtos relacionados ao mundo de games, conta com validação de formulários, criação de produtos, exclusão e edição com CRUD e requisições feitas com Fetch API. 

## :page_facing_up: Apresentação do projeto
<img src="assets/css/imgs/screenshots/alura-geek-print2.png">

## :file_folder: Sobre o desenvolvimento do projeto
Durante o desenvolvimento desse projeto pude praticar minha lógica com JavaScript puro, a criar CRUD (Rest API) e utilizar Fetch API para fazer as requisições ao db.json (Fake REST API)

### O Alura-Geek conta com:
<ol>
  <li>
    Página inicial com botão "iniciar sessão" e um buscador de produtos oferecidos pela empresa.
  </li>
  <li>
    Um banner com descontos, promoções, ou informações relevantes sobre os produtos.
  </li>
  <li>
    Uma galeria com as informações dos produtos como: a imagem, o nome do produto, o preço e um link que leva até a página de descrição do produto.
  </li>
  <li>
    Um rodapé com formulário para contato e outras informações relevantes.
</li>
  <li>
    Menu administrador para eles conseguirem adicionar, editar, buscar ou eliminar produtos da loja.
  </li>
  <li>
    Site responsivo para dar aos clientes a facilidade de compra através de dispositivos mobiles
  </li>
</ol>

Além disso, o projeto contém validação simples de formulários, uma página de login que leva a página de administração para criação de produtos. No momento estou desenvolvendo a página com a descrição de cada produto selecionado pelo cliente. 

## Para iniciar o projeto
### Instale o browser-sync:
Instalação local -
Se você deseja executar o Browsersync a partir da linha de comando em qualquer diretório, ele pode ser instalado localmente com o seguinte comando.
```
  npm install browser-sync
```

- Para executar o browser-sync:
```
  browser-sync start --server --file . --host --port 5000 --startPath index.html
```

### Instale o json-server:
- Utilize essa full fake REST API Instalando o json-server globalmente
```
  npm install -g json-server
```

- Para utilizar o json-server:
```
  json-server  --watch db.json
```
