declare type ConfigParams = {
    /** Element used as viewport for checking visibility of target */
    root?: Element | null;
    /** Margin around the root (i.e. "20px") */
    rootMargin?: string;
    /** Indicates the percentage of the target's visibility the observer's
     * callback should be executed (number between 0 and 1) */
    threshold?: number;
};
declare type UseIntersectionObserverResponse = {
    /** Target ref to observe */
    ref: (node?: Element | null) => void;
    /** Indicates if target ref is visible */
    intersecting: boolean;
};
declare const useIntersectionObserver: ({ root, rootMargin, threshold, }?: ConfigParams) => UseIntersectionObserverResponse;
export default useIntersectionObserver;
