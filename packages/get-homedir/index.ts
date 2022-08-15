/**
 * Created by user on 2020/5/7.
 */

import { resolve, dirname } from "path";
import { homedir } from "os";

export function getHomeDirectory(opts?: {
	username?: string,
	homedir?: string,
})
{
	let _homedir: string;
	opts ??= {};

	if (isDefined(opts.homedir))
	{
		_homedir = opts.homedir
	}
	else if (isDefined(opts.username))
	{
		_homedir = resolve(dirname(homedir()), opts.username)
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
