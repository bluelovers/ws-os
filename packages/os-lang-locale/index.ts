import { platform } from 'os';
import localeWindows from './lib/os/win';
import localeOther from './lib/os/other';

export function locale()
{
	let lang: string;

	switch (platform())
	{
		case 'win32':
			lang = localeWindows();
			break;
		default:
			lang = localeOther();
			break;
	}

	if (!lang)
	{
		throw new Error(`can't detect locale lang`)
	}

	return lang;
}

export async function localeAsync()
{
	return locale()
}

export function localeCallback<E extends Error = Error>(cb: (err: E, lang) => void)
{
	try
	{
		cb(null, locale())
	}
	catch (e)
	{
		cb(e, null)
	}
}

export default locale

