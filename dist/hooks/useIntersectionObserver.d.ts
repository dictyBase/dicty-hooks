declare type ConfigParams = {
    /** Margin around the root */
    rootMargin?: string;
    /** Indicates the percentage of the target's visibility the observer's
     * callback should be executed */
    threshold?: number;
    /** Indicates whether there are more items to fetch */
    hasMore: boolean;
};
declare type UseIntersectionObserverResponse = {
    /** Target ref to observe */
    ref: (node?: Element | null) => void;
    /** Indicates if target ref is visible */
    intersecting: boolean;
};
declare const useIntersectionObserver: ({ rootMargin, threshold, hasMore, }: ConfigParams) => UseIntersectionObserverResponse;
export default useIntersectionObserver;
