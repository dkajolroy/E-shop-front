import React, {useEffect} from 'react';
type Props ={
    children:React.ReactNode;
    callback:()=>void;
    bottomToActionPosition?:number;
    getDataLength:number
}
const InfiniteScroll = (props:Props) => {

    const {callback,getDataLength,bottomToActionPosition}=props
    const minus = bottomToActionPosition||5
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const { scrollTop, clientHeight, scrollHeight } =
                document.documentElement;
            if (scrollTop + clientHeight >scrollHeight -minus) {
                callback()
            }
        });
    }, [getDataLength,minus,callback]);

    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
};

export default InfiniteScroll;
