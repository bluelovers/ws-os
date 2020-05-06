/**
 * Created by user on 2020/5/7.
 */

import { join, dirname } from "path";
import { homedir } from "os";

export = function get_homedir(opts?: {
	username?: string,
	homedir?: string,
})
{
	let _homedir: string;

	if (isDefined(opts?.homedir))
	{
		_homedir = opts.homedir
	}
	else if (isDefined(opts?.username))
	{
		_homedir = join(dirname(homedir()), opts.username)
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
