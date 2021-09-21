export declare function locale(failbackLocale?: string): string;
export declare function localeAsync(failbackLocale?: string): Promise<string>;
export declare function localeCallback<E extends Error = Error>(cb: (err: E, lang: any) => void, failbackLocale?: string): void;
export default locale;
