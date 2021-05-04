declare type UseFetch<T> = {
    error: boolean;
    data: T;
};
/**
 * useFetch is a hook for fetching JSON data.
 */
declare const useFetch: <T>(url: string, initialData?: T) => UseFetch<T>;
export default useFetch;
