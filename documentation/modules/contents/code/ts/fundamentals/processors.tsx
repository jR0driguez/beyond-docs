import * as React from 'react';
import {BeyondName} from "../views/beyond";
import {Link} from '@beyond/ui/link/code';
import {TypeProperty} from "../views/type-property";
import {CodeBox} from "@beyond/docs/code/code";
import {Code} from "../../../../components/code/ts/code";

const tpl = `
{
  "name": "components/next-links",
  "code": {
    "sass": {
      "path": "/code/scss",
      "files": [
        "*"
      ]
    },
    "ts": {
      "path": "/code/ts",
      "files": [
        "*"
      ]
    }
  }
}

`;

export function Processors() {
    return (
        <div className="content">
            <h1 id="processors">Procesadores</h1>
            <p>Muchas de las herramientas o lenguajes utilizados en el entorno web no son soportados de forma directa en
                los navegadores y requieren ser procesadas para poder ser integradas en un sitio web, este es el trabajo
                que realizan los procesadores. <BeyondName/> ofrece una serie de procesadores integrados, que permiten
                utilizar las principales tecnologías de la industria web. Asimismo, ofrece la posibilidad de crear
                nuevos procesadores, en caso de que se desee integrar una herramienta que no este soportada por los
                procesadores existentes.
            </p>

            <div className="block__note">
                <BeyondName/> no funciona como los empaquetadores como Webpack o parcel. No necesita evaluar grafo de
                dependencias ni aplicar técnicas para separación de código o tree shaking. Gracias a su naturaleza
                módular y por medio de los procesadores, el empaquetado de código se hace a nivel de bundles.
            </div>
            <p> Los procesadores son componentes de <BeyondName/> que permiten interpretar, parsear, transpilar o
                compilar código (según sea el caso) de los lenguajes o tecnologías utilizadas en un
                <Link href="/docs/bundles">Bundle</Link>.
            </p>
            <h2 id="processors-list">Procesadores existentes</h2>
            <ul>
                <li>
                    <strong><span className="inline">ts</span></strong>: permite trabajar con typescript y archivos
                    `tsx` para react.
                </li>
                <li>
                    <strong><span className="inline">sass</span></strong>: brinda soporte para trabajar con archivos
                    SASS de extensión <span className="inline">.scss</span>
                </li>
                <li>
                    <strong><span className="inline">vue</span></strong>: Brinda soporte para trabajar con archivos
                    single-file-components de vue.
                </li>
                <li>
                    <strong><span className="inline">svelte</span></strong>: Permite trabajar con archivos
                    single-file-component de <span className="inline">svelte</span>
                </li>
            </ul>

            <h3 id="properties">Propiedades</h3>

            <p>Todos los procesadores cuentan con las siguientes propiedades:</p>
            <ul>
                <li>
                    <strong>path: </strong>
                    <TypeProperty type="string" optional/>: Permite definir el <span
                    className="inline">directorio</span> en donde se encuentran los archivos del procesador. Si se
                    agrega un valor, el mismo es interpretado como un directorio de posición relativa a la ubicación
                    del <span className="inline">module.json</span> definido.
                </li>
                <li>
                    <strong>files: </strong>
                    <TypeProperty type="array" optional/>: Permite definir la lista de archivos o carpetas incluidos en
                    el procesador. Si la propiedad <span className="inline">path</span> se encuentra definida, los
                    archivos serán buscados adentro del directorio especificado, caso contrario, serán buscados de forma
                    relativa a la ubicación del <span className="inline">module.json</span>. Se puede pasar como valor
                    de la propiedad un arreglo con una entrada <span className="inline">*</span>, de esta forma se
                    estaría indicando que se incluyen todos los archivos en el directorio especificado.
                </li>
            </ul>

            <h3 id="example">Ejemplos</h3>

            <div className="content-container two-columns">
                <div className="content">
                    <p>El siguiente ejemplo, corresponde a la definición de un bundle de tipo code, a continuación
                        explicamos el detalle:</p>
                    <ul>
                        <li>El bundle hace uso de dos procesadores: <span className="inline">sass</span> y <span
                            className="inline">ts</span>.
                        </li>
                        <li>El procesador sass incluye todos los archivos en el directorio <span
                            className="inline">/code/scss</span> el cual es relativo a la ubicación del archivo <span
                            className="inline">module.json</span>
                        </li>
                        <li>El procesador <span className="inline">ts</span> sólo incluye el archivo <span
                            className="inline-code">component.ts</span> el cúal se encuentra en el directorio <span
                            className="inline">/code/ts</span> relativo a la ubicación del archivo <span
                            className="inline">module.json</span></li>
                    </ul>
                </div>
                <CodeBox language="json" title="module.json">
                    {tpl}
                </CodeBox>
            </div>

        </div>
    )
}
