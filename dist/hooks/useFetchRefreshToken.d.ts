/**
 * useFetchRefreshToken executes a callback function at a specified
 * interval if isAuthenticated is true. This is used to silently fetch
 * a refresh token in the background.
 *
 * More info: https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#silent_refresh
 */
declare const useFetchRefreshToken: (callback: Function, intervalRef: React.MutableRefObject<any>, delay: number, isAuthenticated: boolean) => void;
export default useFetchRefreshToken;
