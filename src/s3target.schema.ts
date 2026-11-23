// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { S3URISchema } from '@dsbunny/net-schema';

export const S3TargetSchema = z.object({
        '@type': z.literal('S3Target')
                .describe('Type of the S3 target object.'),
        content_type: z.string().min(5).max(255)
                .describe('Content type of the target'),
        s3_uri: S3URISchema.min(2).max(2048)
                .describe('S3 URI of the target'),
        s3_filename: z.string().min(1).max(255)
                .describe('Name of the target'),
        url: z.url().min(20).max(2048)
                .describe('URL of the target'),
});
export type S3Target = z.infer<typeof S3TargetSchema>;
