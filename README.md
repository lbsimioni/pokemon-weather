# PokemonWeather

## Tecnologia

Este projeto utiliza o [Angular](https://angular.io/) na versão 11, foi escolhida esse tecnologia por ser uma [SPA (Single Page Application)](https://www.devmedia.com.br/ja-ouviu-falar-em-single-page-applications/39009), ou seja, é renderizada em apenas uma página, com isso, pude fazer a divisão dos elementos, por responsabilidade, em componentes e fazê-los se comunicar. Ele também disponibiliza uma forma bem elaborada e com inumeras funcionalidades para trabalharmos com requisições assíncronas para API's, como no caso, pude fazer um loading, enquanto a API não nos devolve uma resposta. Além de ser um dos grandes frameworks de JS/TS do mercado.

## Como Executar?

Para executarmos o projeto, devemos seguir os passos abaixo:

<ol>
    <li>
        Para instalarmos o Angular, precisamos ter instalado o node, mais especificamente o seu gerenciador de pacotes, o <b>npm</b>, para isso, seguir a documentação de instalação do npm: https://rockcontent.com/br/blog/npm/
    </li>
    <li>
        Para instalarmos o Angular, devemos seguir a documentação de instalação do Angular: https://angular.io/cli.</br>
        Obs.: Temos uma documentação do Angular para fazemos a instalação, incluindo a instalação do npm: https://angular.io/guide/setup-local.
    </li>
    <li>
        Após fazer o download e a instalação do gerenciador de dependências (npm) e o Angular, recomendasse o reinício da máquina.
    </li>
    <li>
        Para os próximos passos, devemos abrir um terminal na raiz do projeto, mesmo lugar onde está localizado esse arquivo (README.md).
    </li>
    <li>
        Agora deveremos fazer a instalação dos dependências do projeto, para isso, devemos executar o código abaixo:
        [npm install]br>
        Obs.: Após a execução desse comando, inúmeras dependências serão instaladas, o que pode demorar um tempo, mas é importante que esperemos o download de todas as dependências.</br>
        Obs2.: É normal dar alguns warnings ou errors no final da execução desse código, pois estamos fazendo download de terceiros, que podem estar com algum warning em seu código.
    </li>
    <li>
        Agora precisamos settar a APPID do OpenweatherMap, para isso, devemos navegar em src/environments/environmet.ts, devemos localizar a chave <b>openWeatherKey</b> e após o : e dentro das '' colocar a chave.
    </li>
    <li>
        Agora basta executar o servidor, para isso, no terminal aberto para executarmos o npm install, devemos rodar o comando:</br>
        [ng serve]</br>
        Esse comando irá subir um servidor local para a renderização da aplicação, esse comando deixará o terminal em modo de escuta, pois o servidor é live-reload, ou seja, quando tivermos uma alteração de código o servidor irá reiniciar e já exibir as alterações, portando, não devemos fechar o terminal e nem pará-lo (ctrl+c).
    </li>
    <li>
        Após o inicio do servidor, a aplicação ficará rodando na porta 4200 do seu computador, http://localhost:4200
    </li>
    <li>
        Agora é só aproveitar a aplicação :)
    </li>
</ol>
