/**
 * Created by user on 2019/5/19.
 */

import crossSpawn from 'cross-spawn-extra';
import iconv, { ENUM_NODE_ENCODING } from 'iconv-jschardet';
import { bufString, lineSplitLike, PROJECT_ROOT } from '../util';
import { crlf, LF } from 'crlf-normalize';
import { join } from 'path';

export function localeWindows()
{
	let cp = crossSpawn.sync(join(PROJECT_ROOT, 'script', 'get_locale.cmd'), {
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
