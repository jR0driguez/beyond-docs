import * as React from "react";
import {Menu} from "../data";
import {List} from "./list";
import {IValue, MenuContext} from "./context";
import {AppManager} from '@beyond/docs/manager/code';
import {useBinder} from "@beyond/docs/store/code";
import {BeyondIconButton} from "@beyond/ui/icons/code";
import {BeyondImage} from '@beyond/ui/image/code';

interface IState {
    selected: string;
}

export /*bundle*/
function Widget() {
    const [selected, setSelected] = React.useState<IState>();
    const [value, setValue] = React.useState<IValue>({selected, setSelected});
    const parent = React.useRef(null)
    const openedLocal = (typeof window !== undefined)
        ? window.localStorage.getItem('__menu_opened')
        : true;
    const [opened] = React.useState([true, 'true'].includes(openedLocal));

    React.useEffect(() => {
        setValue({...value, container: parent?.current});
    }, []);
    useBinder([AppManager], () => {
        parent.current.classList.toggle('docs__menu--opened');
        // toggleMenu(!opened);
    });
    const close = event => {
        event.preventDefault();
        const isOpened = parent.current.classList.contains('docs__menu--opened');
        parent.current.classList.toggle('docs__menu--opened');
        window.localStorage.setItem('__menu_opened', `${!isOpened}`);
    }
    const cls = `docs__menu${opened ? ` docs__menu--opened` : ''}`;
    return (


        <MenuContext.Provider value={value}>
            <aside ref={parent} className={cls}>
                <div className="menu-mobile-container">
                    <header className="aside__header pd-15">
                        <div className="">
                            <div className="mobile-only">
                                <BeyondImage src="/images/beyond-logo.png"
                                             className="img-logo"
                                             alt="Beyond the universal meta framework"/>
                            </div>
                            <h4>Contents</h4>
                        </div>

                        <BeyondIconButton
                            onClick={close}
                            className="mobile-only docs__menu__list__btn-close" icon="close"/>
                    </header>
                    <List items={Menu}/>
                </div>

            </aside>
        </MenuContext.Provider>

    );
}
