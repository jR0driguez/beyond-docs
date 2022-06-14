import * as React from 'react';
import {NextLinks} from '@beyond/docs/components/next-links/code';
import {BeyondName} from "@beyond/docs/components/html/code";
import {Code} from "@beyond/docs/code/code";
import {TypeProperty, ObjectProperty} from "@beyond/docs/components/html/code";
import {Link} from "@beyond/ui/link/code";


const tplController =
    `\rimport {ReactWidgetController} from '@beyond-js/react-widgets/controllers/ts';
import {Page} from './views/page';
export /*bundle*/
class Controller extends ReactWidgetController {
    get Widget() {
        return Page;
    }
}`

export /*bundle*/ function WidgetController() {
    return (
        <>
            <h2 id="controller">Definición del <span className="inline">Controller</span></h2>
            <p>
                Todo widget debe exponer una clase <span className="inline">Controller</span> definida. El objeto
                Controller es el responsable de la declaración y manejo del web-component que representa al widget y
                tiene una estructura como la siguiente:
            </p>

            <Code language="ts">
                {tplController}
            </Code>

            <p>
                En el código anterior, la clase <span className="inline">Controller</span> extiende del objeto <span
                className="inline">ReactWidgetController</span> que es el controlador base disponibilizado para trabajar
                con React. <BeyondName/> tiene disponible un controlador para los distintos frameworks de vista. Los
                objetos son:
            </p>
            <ul>
                <li><span className="inline">ReactWidgetController</span>, <span
                    className="inline">PageReactWidgetController</span>.
                </li>
                <li><span className="inline">SvelteWidgetController</span> y <span
                    className="inline">PageSvelteWidgetController</span>.
                </li>
                <li><span className="inline">VueWidgetController</span> y <span
                    className="inline">PageVueWidgetController</span>.
                </li>
            </ul>

            <p>
                Todos los controladores manejan la misma interfaz, pero estan a su vez enfocados en integrar y funcionar
                con el framework de vista que se esté utilizando.
            </p>

            <h3 id="controller-properties"><small>Propiedades</small></h3>

            <ul>
                <li>
                    <ObjectProperty type="getter">Widget</ObjectProperty>
                    Se define como un getter y debe retornar el componente de vista principal.
                </li>
                <li>
                    <ObjectProperty type="URIObject" optional href="/docs/api/uri">uri</ObjectProperty> Objeto Uri con
                    toda la información
                    asociada a la url actual.
                </li>
                <li>
                    <ObjectProperty type="String" href="/docs/api/uri">layout</ObjectProperty>
                    Nombre del objeto Layout contenedor.
                </li>
            </ul>

            <h3 id="controller-methods"><small>Métodos</small></h3>
            <ul>
                <li>
                    <ObjectProperty type="function" optional>createStore</ObjectProperty>
                    Permite agregar lógica para el manejo del Estado del
                    widget, debe retornar un objeto con la interfaz <Link href="/docs/api/IwidgetStore">
                    <span className="inline">IWidgetStore</span></Link>
                </li>
                <li>
                    <ObjectProperty type="void">initialise</ObjectProperty>
                    Permite agregar lógica a ejecutarse previo al montado del
                    componente web en el DOM HTML.
                </li>
                <li>
                    <ObjectProperty type="void">hide</ObjectProperty>
                    Se ejecuta cuando ha sido renderizada y se oculta, esto sucede
                    cuando se navega de una url a otra.
                </li>
                <li>
                    <strong><span className="inline">show</span></strong>
                    <TypeProperty type="void" optional/>: Se ejecuta cada vez que se accede a la url y la página se
                    muestra en el navegador.
                </li>
            </ul>

            <NextLinks items={[
                ['Creación de widgets', '/docs/widgets/creation'],
                ['Widgets de tipo Page', '/docs/widgets/page',]
            ]}/>
        </>
    )
}