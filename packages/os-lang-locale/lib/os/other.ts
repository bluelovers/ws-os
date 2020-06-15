/**
 * Created by user on 2019/5/19.
 */

import crossSpawn from 'cross-spawn-extra';
import path = require('path');
import iconv, { ENUM_NODE_ENCODING } from 'iconv-jschardet';
import { bufString, lineSplitLike } from '../util';
import { crlf, LF } from 'crlf-normalize';

export function localeOther()
{
	let cp = crossSpawn.sync('locale', {
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
