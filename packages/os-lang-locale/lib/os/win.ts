/**
 * Created by user on 2019/5/19.
 */

import { sync as crossSpawn } from 'cross-spawn-extra';
import { bufString, lineSplitLike, PROJECT_ROOT } from '../util';
import { join } from 'path';

export function localeWindows()
{
	let cp = crossSpawn(join(PROJECT_ROOT, 'script', 'get_locale.cmd'), {
		stripAnsi: true,
	});

	if (!cp.error && cp.stdout)
	{
		let data = lineSplitLike<{
			'SYSTEM_LOCALE': string,
		}>(cp.stdout);

		//console.dir(data);

		if (data['SYSTEM_LOCALE'])
		{
			return data['SYSTEM_LOCALE'];
		}
	}

	return null;
}

export default localeWindows
