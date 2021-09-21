/**
 * Created by user on 2019/5/19.
 */

import { sync as crossSpawn } from 'cross-spawn-extra';
import { bufString, lineSplitLike } from '../util';

export function localeOther()
{
	let cp = crossSpawn('locale', {
		stripAnsi: true,
	});

	if (!cp.error && cp.stdout)
	{
		let data = lineSplitLike<{
			'LANG': string,
		}>(cp.stdout);

		if (data.LANG)
		{
			return data.LANG
				.replace(/\.\S+/, '')
				;
		}
	}

	return null;
}

export default localeOther
