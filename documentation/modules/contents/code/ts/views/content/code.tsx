import * as React from 'react';
import * as Prism from 'prismjs';


export function Code({language = 'typescript', children}) {
    const createMarkup = () => {
        const html = Prism.highlight(children, Prism.languages.javascript, language);
        return {__html: html}
    }
    return (
        <pre>
            <code className={`language-${language}`} dangerouslySetInnerHTML={createMarkup()}/>
        </pre>
    );
}
