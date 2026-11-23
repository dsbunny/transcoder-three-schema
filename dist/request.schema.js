// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { transcoderThreeRegistry } from './registry.js';
import { TranscoderThreeInputSchema } from "./input.schema.js";
import { TranscoderThreeImageOutputSchema, TranscoderThreeVideoOutputSchema, } from "./output.schema.js";
export const TranscodeRequestBaseSchema = z.object({
    '@type': z.literal('TranscodeRequestBase')
        .describe('Type of the Transcoder THREE job request base'),
    reference_id: z.string().max(255)
        .describe('Reference ID of the job'),
    input: TranscoderThreeInputSchema,
    client_request_token: z.string().max(64).optional()
        .describe('Client request token for idempotency'),
}).register(transcoderThreeRegistry, {
    id: 'TranscodeRequestBaseSchema',
    description: 'Base schema for Transcoder THREE job requests',
});
export const TranscodeImageRequestSchema = TranscodeRequestBaseSchema.extend({
    '@type': z.literal('TranscodeImageRequest')
        .describe('Type of the Transcoder THREE image request'),
    type: z.literal('image'),
    output: TranscoderThreeImageOutputSchema,
}).register(transcoderThreeRegistry, {
    id: 'TranscodeImageRequestSchema',
    description: 'Transcoder THREE image job',
});
export const TranscodeVideoRequestSchema = TranscodeRequestBaseSchema.extend({
    '@type': z.literal('TranscodeVideoRequest')
        .describe('Type of the Transcoder THREE video request'),
    type: z.literal('video'),
    output: TranscoderThreeVideoOutputSchema,
}).register(transcoderThreeRegistry, {
    id: 'TranscodeVideoRequestSchema',
    description: 'Transcoder THREE video job',
});
export const TranscodeRequestSchema = z.discriminatedUnion("type", [
    TranscodeImageRequestSchema,
    TranscodeVideoRequestSchema,
]).register(transcoderThreeRegistry, {
    id: 'TranscodeRequestSchema',
    description: 'Transcoder THREE job request schema',
});
//# sourceMappingURL=request.schema.js.map