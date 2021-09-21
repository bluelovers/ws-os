/**
 * Created by user on 2019/5/19.
 */

import { ENUM_NODE_ENCODING, BufferFrom } from 'iconv-jschardet';
import { crlf, LF } from 'crlf-normalize';
import { resolve } from 'path';

export const PROJECT_ROOT = resolve(__dirname, '..');

export function decodeBuffer(buf: Buffer | string)
{
	return BufferFrom(buf, ENUM_NODE_ENCODING.UTF8)
}

export function bufString(buf: Buffer | string)
{
	return crlf(decodeBuffer(buf).toString())
}

export function stripString(input: string)
{
	return input.trim().replace(/^(["'])(.*)\1$/, '$2').trim();
}

export function lineSplitLike<T extends {
	[k: string]: string
}>(input: string | Buffer): T
{
	return bufString(input)
		.split(LF)
		.reduce((a, b) => {

			let m = b.trim().match(/^([^=]+)=(.*)$/);
			if (m)
			{
				// @ts-ignore
				a[m[1]] = stripString(m[2]);
			}

			return a;
		}, {} as T);
}
