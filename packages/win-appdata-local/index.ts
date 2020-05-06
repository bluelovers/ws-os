/**
 * Created by user on 2020/5/7.
 */

import { platform, homedir, type, userInfo } from 'os';
import { dirname, join } from 'path';

export = function winAppdataLocal(): string
{
	if (platform() !== 'win32')
	{
		throw new Error(`current os is not win32`)
	}

	return process.env.LOCALAPPDATA ?? join(homedir(), 'AppData', 'Local')
}
