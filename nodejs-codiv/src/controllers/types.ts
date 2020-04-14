/**
 * @author Israel Yasis
 */

export interface ResponseSimple<T> {
    data: T;
    message: string;
    statusCode: number;
};
export interface ResponseList<T> {
    data: Array<T>;
    numberResults: number;
    message: string;
    statusCode: number;
}
export interface ResponseError {
    errorMessage: string;
    statusCode: number;
}