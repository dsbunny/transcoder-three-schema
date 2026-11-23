// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { transcoderThreeRegistry } from './registry.js';
import { FileStatAndChecksumsSchema } from "@dsbunny/metadata-schema";
import { S3TargetSchema } from "./s3target.schema.js";
export const TranscoderThreeFilterSchema = z.object({
    '@type': z.literal('TranscoderThreeFilter')
        .describe('Type of the Transcoder THREE output filter'),
    crop: z.object({
        w: z.number().min(16).max(16384)
            .describe('Width of the crop in pixels'),
        h: z.number().min(16).max(16384)
            .describe('Height of the crop in pixels'),
        x: z.number().min(0).max(16384)
            .describe('X position of the crop in pixels'),
        y: z.number().min(0).max(16384)
            .describe('Y position of the crop in pixels'),
    }).optional(),
    scale: z.object({
        w: z.number().min(16).max(16384)
            .describe('Width of the resize in pixels'),
        h: z.number().min(16).max(16384)
            .describe('Height of the resize in pixels'),
    }).optional(),
}).register(transcoderThreeRegistry, {
    id: 'TranscoderThreeFilterSchema',
    description: 'Filter to apply to the output',
});
export const TranscoderThreeImageOutputSchema = z.object({
    '@type': z.literal('TranscoderThreeImageOutput')
        .describe('Type of the Transcoder THREE image output'),
    s3_target: S3TargetSchema
        .describe('Output image target'),
    mime_type: z.literal('image'),
    mime_subtype: z.enum(['png', 'jpeg', 'webp', 'avif'])
        .describe('Mime subtype of the output image'),
    width: z.number().min(16).max(16384)
        .describe('Width of the output image in pixels'),
    height: z.number().min(16).max(16384)
        .describe('Height of the output image in pixels'),
    filter: z.array(TranscoderThreeFilterSchema).min(1).max(16)
        .describe('Array of filters to apply to the output image'),
}).register(transcoderThreeRegistry, {
    id: 'TranscoderThreeImageOutputSchema',
    description: 'Output of the job',
});
export const TranscoderThreeVideoOutputSchema = z.object({
    '@type': z.literal('TranscoderThreeVideoOutput')
        .describe('Type of the Transcoder THREE video output'),
    s3_target: S3TargetSchema
        .describe('Output video target'),
    mime_type: z.literal('video'),
    mime_subtype: z.enum(['mp4', 'webm'])
        .describe('Mime subtype of the output video'),
    video_codec: z.string().min(3).max(512)
        .describe('The RFC-6381 codec of the output video'),
    audio_codec: z.string().min(3).max(512)
        .describe('The RFC-6381 codec of the output audio'),
    audio_channels: z.enum(['mono', 'stereo'])
        .describe('The channel layout of the output audio'),
    width: z.number().min(16).max(16384)
        .describe('Width of the output video in pixels'),
    height: z.number().min(16).max(16384)
        .describe('Height of the output video in pixels'),
    frame_rate: z.number().min(1).max(240)
        .describe('Frame rate of the output video in frames per second'),
    filter: z.array(TranscoderThreeFilterSchema).min(0).max(16).optional()
        .describe('Array of filters to apply to the output video'),
}).register(transcoderThreeRegistry, {
    id: 'TranscoderThreeVideoOutputSchema',
    description: 'Output of the job',
});
export const TranscoderThreeOutputSchema = z.object({
    '@type': z.literal('TranscoderThreeOutput')
        .describe('Type of the Transcoder THREE output'),
    file: FileStatAndChecksumsSchema,
}).register(transcoderThreeRegistry, {
    id: 'TranscoderThreeOutputSchema',
    description: 'Output of the job',
});
//# sourceMappingURL=output.schema.js.map