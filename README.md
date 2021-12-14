# tables-node-console

<img src="https://cinthyasegura.github.io/portafolio/src/public/image/node.png" height=150 align="right">

Esta es una aplicacion la cual almacena en un documento `.txt` la tabla de multiplicar requerida, tambien si se le indica puede desplegar la tabla en consola y se le puede indicar hasta donde se desea que termine de mostrar o almacenar la tabla requerida.

El comando base para correr la aplicacion es: `node app -b [tabla]`

Es necesario contar con `nodejs` para ejecutar la aplicacion, clonar el repositorio e instalar todas las dependencais con el comando `npm install`

## Opciones

La aplicacion tiene las siguientes opciones:
```
      --help     Muestra ayuda                                        [booleano]
      --version  Muestra número de versión                            [booleano]
  -b, --base     Es la base de la tabla de multiplicar      [número] [requerido]
  -l, --list     Muestra la tabla en consola
                                         [booleano] [requerido] [defecto: false]
  -e, --ends     Indica el maximo de la tabla que se desea mostrar
                                              [número] [requerido] [defecto: 10]
```

## Recursos

- [file-system](https://www.npmjs.com/package/file-system)
- [NodeJS](https://nodejs.org/es/)
- [yargs](https://yargs.js.org/)