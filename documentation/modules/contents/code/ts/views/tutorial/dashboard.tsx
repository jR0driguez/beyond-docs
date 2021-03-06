import * as React from 'react';
import {ModalImage} from "../modal-image";
import {Link} from "@beyond/ui/link/code";

export function TDashboard() {
    return (
        <>
            <h2 id="dashboard">El Dashboard</h2>
            <p>
                El dashboard se levanta por defecto en el puerto 4000, para acceder a el debes ingresar a
                <a href="http://localhost:4000" target="_blank"> localhost:4000</a>.
            </p>
            <p>
                Como comentamos antes, <span className="beyond">Beyond</span>
                analiza el directorio, validando si existe en el algún proyecto beyond ya
                configurado, en caso de existir alguno, el dashboard mostrará el proyecto existente, caso contrario,
                como se ve en la imagen a continuación, indicará que no existe ningún proyecto y brinda la opción de
                crearlo.
            </p>
            <ModalImage src="/contents/static/empty.png" alt="beyond dashboard empty folder"/>
        </>
    )
}
