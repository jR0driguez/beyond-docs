import {PageReactWidgetController} from '@beyond-js/kernel/react-widget/ts';
import {IWidgetStore} from "@beyond-js/kernel/core/ts";
import {Contents} from "./contents";
import {Page} from './views/page';

export /*bundle*/
class Controller extends PageReactWidgetController {
    createStore(): IWidgetStore {
        return new Contents(this.body);
    }

    get Widget() {
        return Page;
    }
}
