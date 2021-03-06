import * as React from 'react';
import {routing} from "@beyond-js/kernel/routing/ts";
import {useMenuContext} from "../context";

import {AppIcon} from "@beyond/docs/ui/icons/code";

interface IMenuItem {
    id: string;
    label: string;
    children?: Object[];
    link?: String;
}

interface IProps {
    items: IMenuItem[];
    className?: string;

}

export function List({items, className}: IProps) {
    const output = items.map(item => <MenuItem item={item} key={item.id}/>);
    const cls = `docs__menu__sublist${className ? ` ${className}` : ''}`;
    return (
        <ul className={cls}>
            {output}
        </ul>
    );
}

export function ParentItem({item}) {
    const onClick = (event) => {
        event.preventDefault();
        event.currentTarget.closest('li').classList.toggle('item--opened');
    }
    return (
        <li>
            <section onClick={onClick}>
                <AppIcon icon="chevronRight"/> <span>{item.label}</span>
            </section>
            <List items={item.children} level={1}/>
        </li>
    )
}


export function MenuItem({item}) {

    const {container} = useMenuContext();

    if (item.children) return <ParentItem item={item}/>;

    const onClick = event => {
        event.preventDefault();
        const target = event.currentTarget;
        const currentActive = container.querySelector('.active-item')
        if (currentActive) currentActive.classList.remove('active-item');
        target.classList.toggle('active-item');
        routing.pushState(`/${item.id}`);
    }

    const cls = `item--opened`;
    return (
        <li onClick={onClick} className={cls}>
            <section>
                <span>{item.label}</span>
            </section>
        </li>
    )
}
