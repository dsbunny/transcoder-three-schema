// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { transcoderThreeRegistry } from './registry.js';
import { S3URISchema } from '@dsbunny/net-schema';

export const TranscoderThreeInputSchema = z.object({
        '@type': z.literal('TranscoderThreeInput')
                .describe('Type of the Transcoder THREE job input'),
        url: z.url().min(20).max(2048)
                .describe('URL of the file to transcode'),
        expires: z.iso.datetime({ offset: true })
                .describe('IDO expiration datetime of the URL'),
        s3_uri: S3URISchema.min(2).max(2048)
                .describe('S3 URI of the file to transcode'),
        s3_etag: z.string().min(2).max(2048)
                .describe('S3 ETag of the file to transcode'),
        s3_parts: z.array(z.number().max(5368709120)).min(1).max(10000)  // 5GB per part
                .describe('Array of S3 part numbers'),
        s3_filename: z.string().min(1).max(255)
                .describe('Name of the file to transcode'),
        content_type: z.string().min(5).max(255)
                .describe('Content type of the file to transcode'),
        content_length: z.number().min(20).max(5497558138880) // 5TB,
                .describe('Length of the file in bytes'),
}).register(transcoderThreeRegistry, {
	id: 'TranscoderThreeInputSchema',
	description: 'Input of the job',
});
export type TranscoderThreeInput = z.infer<typeof TranscoderThreeInputSchema>;
