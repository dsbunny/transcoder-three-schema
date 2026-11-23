// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from 'zod';
import { transcoderThreeRegistry } from './registry.js';

export const TranscodeProgressSchema = z.object({
        '@type': z.literal('TranscodeProgress')
                .describe('Type of the Transcoder THREE transcode progress'),
        lengthComputable: z.boolean()
                .describe('Indicates whether the total size of the task is known'),
        loaded: z.number()
                .describe('The amount of work completed so far (e.g., bytes transcoded)'),
        total: z.number().nullable()
                .describe('The total amount of work to be done (e.g., total bytes to transcode), or null if unknown'),
}).register(transcoderThreeRegistry, {
	id: 'TranscodeProgressSchema',
	description: 'Transcode job progress schema',
});
export type TranscodeProgress = z.infer<typeof TranscodeProgressSchema>;
