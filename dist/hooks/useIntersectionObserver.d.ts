import React from "react";
declare type ConfigParams = {
    /** React ref used to access DOM node */
    ref: React.MutableRefObject<any>;
    /** Margin around the root */
    rootMargin?: string;
    /** Indicates the percentage of the target's visibility the observer's
     * callback should be executed */
    threshold?: number;
    /** Indicates whether there are more items to fetch */
    hasMore: boolean;
};
declare const useIntersectionObserver: ({ ref, rootMargin, threshold, hasMore, }: ConfigParams) => boolean;
export default useIntersectionObserver;
