import * as React from 'react';
import {BeyondImage} from "@beyond/ui/image/code";
import {useDocsContext} from "../../context";
import {List, CHtml} from "@beyond/docs/components/html/code";


export function Universal() {
    const {texts: {intro: {universal}}} = useDocsContext();

    return (
        <>
            <h1><CHtml>{universal.title}</CHtml></h1>
            <BeyondImage src="/images/tutorials/beyond-environments.png" alt="Beyond environments"/>
            <p>{universal.p1}</p>
            <p>{universal.p2}</p>
            <List items={universal.items}/>
        </>
    )
}
