interface JQueryXHR {
}
interface JQueryPromise<T> {
}
interface JQueryDeferred<T> extends JQueryPromise<T> {
}
interface JQueryParam {
}
interface JQuery {
    data(key: any): any;
}
interface Window {
    ej: typeof ej;
}