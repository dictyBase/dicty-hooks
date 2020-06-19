import React from "react";
declare type ConfigParams = {
    /** React ref used to access DOM node */
    ref: React.MutableRefObject<any>;
    /** Height of the scrollable area (inner container) */
    viewportHeight: number;
    /** Height of individual row */
    rowHeight: number;
    /** Number of items in total */
    numItems: number;
};
declare const useVirtualList: ({ ref, viewportHeight, rowHeight, numItems, }: ConfigParams) => {
    items: {
        index: number;
        style: {
            position: string;
            top: number;
            left: number;
            width: string;
            height: string;
            transform: string;
        };
    }[];
};
export default useVirtualList;
