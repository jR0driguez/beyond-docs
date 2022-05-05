import * as React from "react";
import {Slide} from './slide'
import {Controller} from "./controller";

interface props {
    children: Array<JSX.Element>;
    footer: boolean;
    navigation: boolean,
    pagination: boolean;
    next: boolean,
    functionNext: (e: React.SyntheticEvent) => void,
    className: string;
}

export /*bundle*/
function BeyondSwiperSlider(props: props): JSX.Element {

    const refs = {
        next: React.useRef(),
        container: React.useRef(),
        pagination: React.useRef(),
        prev: React.useRef(),
    };
    const {next, container, prev} = refs;
    const slides: Array<JSX.Element> = props.children.map((slide: JSX.Element, index: number) => (
        <Slide key={index}>{slide}</Slide>));

    const footer: boolean = props.footer === true;
    const [state, setState] = React.useState<any>({});
    const [lastIndex, setLastIndex] = React.useState<any>();

    React.useEffect((): any => {
        const controller: any = new Controller();
        const onChange: () => void = (): void => setState({
            ...state,
            ready: true,
            swiper: controller.swiper,
            controller,
            lastIndex: controller.lastIndex
        });
        controller.bind("change", onChange);
        controller.setSwiper(container.current, props, refs);
        onChange();
        return () => controller.unbind("change", onChange);
    }, []);
    const {controller} = state;
    React.useEffect((): any => {
        setLastIndex(controller?.lastIndex);
    }, [controller?.lastIndex]);



    const cls: string = props.className ? `${props.className} beyond-element-swiper-slider` : "beyond-element-swiper-slider"
    return (
        <div className={cls}>
            <div ref={container} className="swiper-container">
                <div className="swiper-wrapper">
                    {slides}
                </div>
                {props.pagination && <div ref={refs?.pagination} className="swiper-pagination"/>}
                {footer &&
                    <>
                        {!controller?.swiper.isEnd &&
                            <button className="swiper-button-prev" onClick={props.functionNext}>SKIP</button>}
                        <div ref={refs.pagination} className="swiper-pagination"/>
                        <button className="swiper-button-next "
                                onClick={controller?.next}
                        >Next
                        </button>
                    </>
                }
                {
                    props.navigation &&
                    <>
                        <div ref={prev} className="swiper-button-prev"/>
                        <div ref={next} className="swiper-button-next"/>
                    </>
                }
            </div>
        </div>
    );
};
