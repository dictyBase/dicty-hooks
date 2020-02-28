declare type FooterJson = {
    data: Array<{
        attributes: {
            display: string;
            items: Array<Item>;
        };
    }>;
};
declare type Item = {
    label: string;
    link: string;
};
declare type FooterArray = Array<Array<{
    header: {
        description: string;
    };
    items: Array<{
        description: string;
        link: string;
    }>;
}>>;
/**
 * formatFooterData converts the received footer JSON data and
 * converts it into the dicty-footer data format.
 */
declare const formatFooterData: (json: FooterJson) => {
    header: {
        description: string;
    };
    items: {
        description: string;
        link: string;
    }[];
}[][];
/**
 * useFooter is a hook for fetching dictyBase footer
 * JSON data. It uses an included array of data as its
 * initial state then replaces it with fetched data
 * on a successful request.
 */
declare const useFooter: () => {
    footerData: FooterArray;
    error: string | null;
};
export { formatFooterData };
export default useFooter;
