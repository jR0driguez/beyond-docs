import * as React from "react";
import {Menu} from "../data";
import {List} from "./list";
import {IValue, MenuContext} from "./context";

import {useBinder} from "@beyond/docs/store";
import {BeyondIconButton} from "@beyond/ui/icons";
import {BeyondImage} from "@beyond/ui/image";
import {useTexts} from "@beyond/docs/store";
import {module} from "beyond_context";
import {Loading} from "@beyond/docs/components/html";
import {routing} from "@beyond-js/kernel/routing";
import {MobileMenu} from "./mobile-menu";

interface IState {
    selected: string;
}

export /*bundle*/
function WidgetMenu({attributes}) {

    const [ready, texts] = useTexts(module.resource);
    const parent = React.useRef(null);
    const openedLocal =
        typeof window !== undefined
            ? window?.localStorage.getItem("__menu_opened")
            : true;
    const [opened, setOpened] = React.useState(
        [true, "true"].includes(openedLocal)
    );

    useBinder([attributes], () => {
        const option = attributes.get("opened") === "true";
        if (option !== opened) setOpened(option);
    });


    const closeMenu = () => {
        const isOpened = parent.current.classList.contains("docs__menu--opened");
        parent.current.classList.toggle("docs__menu--opened");
        window.localStorage.setItem("__menu_opened", `${!isOpened}`);
    };
    const close = (event) => {
        event.preventDefault();
        closeMenu();
    };
    let cls = `docs__menu${opened ? ` docs__menu--opened` : ""}`;
    if (attributes.has('home')) cls += " on-home";
    if (!ready) return <Loading/>;
console.log(10, attributes, cls)

    return (
        <MenuContext.Provider value={{
            ready, texts,
            current: routing.uri,
            close: closeMenu
        }}>
            <aside ref={parent} className={cls}>
                <div className="menu-mobile-container">
                    <header className="aside__header">
                        <div>
                            <BeyondImage
                                src="/images/beyond-logo.png"
                                className="img-logo mobile-only"
                                alt="Beyond the universal meta framework"
                            />
                            <h4>{texts.title}</h4>
                        </div>
                        <BeyondIconButton
                            onClick={close}
                            className="docs__menu__list__btn-close"
                            icon="close"
                        />
                    </header>
                    <MobileMenu/>
                    <List items={Menu}/>
                </div>
            </aside>
        </MenuContext.Provider>
    );
}
