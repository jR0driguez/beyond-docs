import * as React from 'react';
import {hmr, Document} from "@beyond/docs/components/html/code";
import {module} from "beyond_context";
import {tpls} from "../templates";

export /*bundle*/ function TutorialRouting() {

    return (
        <Document
            moduleId={module.resource}
            tpls={tpls}
            textId="routing"/>
    );
}