import * as React from 'react';
import {hmr, Document} from "@beyond/docs/components/html/code";
import {module} from "beyond_context";
export /*bundle*/ function TutorialBridge() {

    return (
        <>
        <Document  moduleId={module.resource}  textId="bridgeCode"/> 
        <Document 
        nextLinks={[
                ['Routing', '/docs/tutorial/routing']
        ]}
        moduleId={module.resource} 
        textId="connectClientAndServer"/> 
    
        </>
    );
}
