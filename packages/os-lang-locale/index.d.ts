export declare function locale(): string;
export declare function localeAsync(): Promise<string>;
export declare function localeCallback<E extends Error = Error>(cb: (err: E, lang: any) => void): void;
export default locale;
