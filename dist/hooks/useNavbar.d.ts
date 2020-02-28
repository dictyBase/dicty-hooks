declare type NavbarJson = {
    data: Array<{
        id: string;
        type: string;
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
declare type NavbarArray = Array<{
    dropdown: boolean;
    title: string;
    items: Array<{
        name: string;
        href: string;
    }>;
}>;
/**
 * formatNavbarData converts the received navbar JSON data and
 * converts it into the dicty-navbar data format.
 */
declare const formatNavbarData: (json: NavbarJson) => {
    dropdown: boolean;
    title: string;
    items: {
        name: string;
        href: string;
    }[];
}[];
/**
 * useNavbar is a hook for fetching dictyBase navbar
 * JSON data. It uses an included data array as its
 * initial state then replaces it with fetched data
 * on a successful request.
 */
declare const useNavbar: () => {
    navbarData: NavbarArray;
    error: string | null;
};
export { formatNavbarData };
export default useNavbar;
