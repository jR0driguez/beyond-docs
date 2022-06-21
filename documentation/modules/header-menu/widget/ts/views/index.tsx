import * as React from 'react';
import {BeyondImage} from "@beyond/ui/image/code";
import {Hamburger} from "./hamburger";
import {ThemeToggleButton} from "@beyond/docs/components/theme-button/code";
import {Link} from "@beyond/ui/link/code";
import {LanguageAction} from "./language-action";
import {useBinder, useTexts} from "@beyond/docs/store/code";
import {Notice} from "./notice";
import {module} from "beyond_context";
import {HamburgerMenu} from "./hamburger-menu";
import {routing} from "@beyond-js/kernel/routing/ts";

export function TopHeader({attributes, widget, store}) {
    const [ready, texts] = useTexts(module.resource);
    const [url, setUrl] = React.useState(routing.uri?.uri);
    const ref = React.useRef(null);
    useBinder([routing], () => {
        console.log('cambio la url');
        setUrl(routing.uri.uri);
    });
    React.useEffect(() => {
        if(!ref?.current) return;
        console.log("si")
        const parent = ref.current;
        const items = [...parent.querySelectorAll('a')];
        const menu = parent.querySelector('.menu-list__container');

        menu.classList.toggle('opened');
        items.forEach(item => {
            const onClick = event => {
                event.preventDefault();
                event.stopPropagation();
                if (event.currentTarget.href) {
                    routing.pushState(event.currentTarget.href);
                }
                menu.classList.toggle('opened');
            }
            item.addEventListener('click', onClick);
        })
    }, [ref]);
    if (!ready) return null;


    const isHome = url === "/";
    return (
        <>
            <Notice texts={texts}/>
            <section ref={ref} className={`top__header${isHome ? ' home--header' : ''}`}>
                <nav className="menu-container flex-container flex-h-end">
                    <div className="mobile__header">

                        {!isHome && <HamburgerMenu/>}
                        <Link href="/"><BeyondImage src="/images/beyond-logo.png" alt="beyondjs"/></Link>
                        <Hamburger/>
                    </div>
                    <div className="menu-list__container">
                        <ul className="header__menu">
                            <li><ThemeToggleButton/></li>
                            <li><LanguageAction/></li>
                            <li><a href="/docs/tutorial/web">{texts.tutorial}</a></li>
                            <li><a href="/docs/intro">{texts.documentation}</a></li>
                            <li><a href="/examples">{texts.examples}</a></li>
                        </ul>
                    </div>
                </nav>
            </section>
        </>
    );
}
