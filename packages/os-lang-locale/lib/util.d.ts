/**
 * Created by user on 2019/5/19.
 */
/// <reference types="node" />
export declare const PROJECT_ROOT: string;
export declare function decodeBuffer(buf: Buffer | string): Buffer;
export declare function bufString(buf: Buffer | string): string;
export declare function stripString(input: string): string;
export declare function lineSplitLike<T extends {
    [k: string]: string;
}>(input: string | Buffer): T;
