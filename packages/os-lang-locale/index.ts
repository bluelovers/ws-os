import { platform } from 'os';
import { localeWindows } from './lib/os/win';
import { localeOther } from './lib/os/other';

export function locale(failbackLocale?: string)
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

	lang ??= failbackLocale;

	if (!lang)
	{
		throw new Error(`can't detect locale lang`)
	}

	return lang;
}

export async function localeAsync(failbackLocale?: string)
{
	return locale(failbackLocale)
}

export function localeCallback<E extends Error = Error>(cb: (err: E, lang) => void, failbackLocale?: string)
{
	try
	{
		cb(null, locale(failbackLocale))
	}
	catch (e)
	{
		cb(e, null)
	}
}

export default locale
