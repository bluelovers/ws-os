/**
 * Created by user on 2020/5/7.
 */
export interface IOptionsHomeDirectory {
    username?: string;
    homedir?: string;
    homeRootDirectory?: string;
}
export declare function getHomeDirectory(opts?: IOptionsHomeDirectory): string;
export default getHomeDirectory;
