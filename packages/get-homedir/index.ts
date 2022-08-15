/**
 * Created by user on 2020/5/7.
 */

import { resolve, dirname } from "path";
import { homedir } from "os";

export interface IOptionsHomeDirectory
{
	username?: string;
	homedir?: string;
	homeRootDirectory?: string;
}

export function getHomeDirectory(opts?: IOptionsHomeDirectory)
{
	let _homedir: string;
	opts ??= {};

	if (isDefined(opts.homedir))
	{
		_homedir = opts.homedir
	}
	else if (isDefined(opts.username))
	{
		_homedir = resolve(opts.homeRootDirectory || dirname(homedir()), opts.username)
	}
	else
	{
		_homedir = homedir()
	}

	return _homedir
}

function isDefined<T>(value: T): value is NonNullable<T>
{
	return value !== null && value !== void 0
}

export default getHomeDirectory
