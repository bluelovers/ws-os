import { platform } from 'os';
import { localeWindows } from './lib/os/win';
import { localeOther } from './lib/os/other';
import { errCause } from 'err-cause';

export function locale(failbackLocale?: string)
{
	let lang: string;
	let err: Error;

	try
	{
		switch (platform())
		{
			case 'win32':
				lang = localeWindows();
				break;
			default:
				lang = localeOther();
				break;
		}
	}
	catch (e)
	{
		err = e
	}

	lang ??= failbackLocale;

	if (!lang)
	{
		throw errCause(new Error(`can't detect locale lang`), err)
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
