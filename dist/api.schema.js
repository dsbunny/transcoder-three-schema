// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// `@type` field is optional for requests with no other required fields.
import * as z from "zod";
import { transcoderThreeRegistry } from './registry.js';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { FileStatAndChecksumsSchema } from '@dsbunny/metadata-schema';
import { TranscodeProgressSchema } from "./progress.schema.js";
import { TranscodeImageRequestSchema, TranscodeVideoRequestSchema, } from "./request.schema.js";
import { TranscodeResponseSchema } from "./response.schema.js";
export const TranscoderThreePingResponseSchema = z.object({
    ping: z.literal('pong'),
    timestamp: z.iso.datetime(),
}).register(transcoderThreeRegistry, {
    id: 'TranscoderThreePingResponseSchema',
    description: 'Transcoder Three ping response schema',
});
// #region Transcoder THREE
export const GetJobStatusRequestSchema = z.object({
    '@type': z.literal('GetJobStatusRequest')
        .describe('Type of the Get Transcoder THREE Job Status request object.')
}).optional().register(transcoderThreeRegistry, {
    id: 'GetJobStatusRequestSchema',
    description: 'Get Transcoder THREE Job Status request schema',
});
export const GetJobStatusErrorResponseSchema = z.object({
    '@type': z.literal('GetJobStatusErrorResponse')
        .describe('Type of the Get Transcoder THREE Job Status error response object.'),
    job_id: z.uuidv7(),
    status: z.literal('error'),
    error: z.string()
        .describe('Error message describing why the job status could not be retrieved'),
}).register(transcoderThreeRegistry, {
    id: 'GetJobStatusErrorResponseSchema',
    description: 'Get Transcoder THREE Job Status error response schema',
});
export const GetJobStatusFailedResponseSchema = z.object({
    '@type': z.literal('GetJobStatusFailedResponse')
        .describe('Type of the Get Transcoder THREE Job Status failed response object.'),
    job_id: z.uuidv7(),
    status: z.literal('failed'),
    error_code: z.string()
        .describe('Error code representing the type of failure.'),
    error_message: z.string()
        .describe('Error message describing the failure.'),
}).register(transcoderThreeRegistry, {
    id: 'GetJobStatusFailedResponseSchema',
    description: 'Get Transcoder THREE Job Status failed response schema',
});
export const GetJobStatusSucceededResponseSchema = z.object({
    '@type': z.literal('GetJobStatusSucceededResponse')
        .describe('Type of the Get Transcoder THREE Job Status succeeded response object.'),
    job_id: z.uuidv7(),
    status: z.literal('succeeded'),
    progress: z.literal(100),
    file: FileStatAndChecksumsSchema,
}).register(transcoderThreeRegistry, {
    id: 'GetJobStatusSucceededResponseSchema',
    description: 'Get Transcoder THREE Job Status succeeded response schema',
});
export const GetJobStatusRejectedResponseSchema = z.object({
    '@type': z.literal('GetJobStatusRejectedResponse')
        .describe('Type of the Get Transcoder THREE Job Status rejected response object.'),
    job_id: z.uuidv7(),
    status: z.literal('rejected'),
    reason: z.string()
        .describe('Reason for rejecting the job.'),
    issues: z.array(z.any()).optional()
        .describe('List of validation issues associated with the rejection'),
}).register(transcoderThreeRegistry, {
    id: 'GetJobStatusRejectedResponseSchema',
    description: 'Get Transcoder THREE Job Status rejected response schema',
});
export const GetJobStatusCreatedResponseSchema = z.object({
    '@type': z.literal('GetJobStatusCreatedResponse')
        .describe('Type of the Get Transcoder THREE Job Status created response object.'),
    job_id: z.uuidv7(),
    status: z.literal("created"),
    progress: TranscodeProgressSchema.optional()
        .describe('The progress of the job, if available.'),
}).register(transcoderThreeRegistry, {
    id: 'GetJobStatusCreatedResponseSchema',
    description: 'Get Transcoder THREE Job Status created response schema',
});
export const GetJobStatusResponseSchema = z.union([
    GetJobStatusErrorResponseSchema,
    GetJobStatusFailedResponseSchema,
    GetJobStatusSucceededResponseSchema,
    GetJobStatusRejectedResponseSchema,
    GetJobStatusCreatedResponseSchema,
]).register(transcoderThreeRegistry, {
    id: 'GetJobStatusResponseSchema',
    description: 'Get Transcoder THREE Job Status response schema',
});
export const CreateTranscodeImageBodySchema = z.object({
    '@type': z.literal('CreateTranscodeImageRequest')
        .describe('Type of the Create Transcoder THREE image job request object.'),
    image_request: TranscodeImageRequestSchema,
}).register(transcoderThreeRegistry, {
    id: 'CreateTranscodeImageRequestSchema',
    description: 'Create Transcoder THREE image job request schema',
});
/** @deprecated Use CreateTranscodeImageBodySchema. */
export const CreateTranscodeImageRequestSchema = CreateTranscodeImageBodySchema;
export const CreateTranscodeVideoBodySchema = z.object({
    '@type': z.literal('CreateTranscodeVideoRequest')
        .describe('Type of the Create Transcoder THREE video job request object.'),
    video_request: TranscodeVideoRequestSchema,
}).register(transcoderThreeRegistry, {
    id: 'CreateTranscodeVideoRequestSchema',
    description: 'Create Transcoder THREE video job request schema',
});
/** @deprecated Use CreateTranscodeVideoBodySchema. */
export const CreateTranscodeVideoRequestSchema = CreateTranscodeVideoBodySchema;
export const CreateTranscodeResponseSchema = TranscodeResponseSchema.extend({
    '@type': z.literal('CreateTranscodeResponse')
        .describe('Type of the Create Transcoder THREE job response object.'),
}).register(transcoderThreeRegistry, {
    id: 'CreateTranscodeResponseSchema',
    description: 'Create Transcoder THREE job response schema',
});
// #endregion
// #region API
export const TranscoderThreeRequestSchema = z.union([
    GetJobStatusRequestSchema,
    CreateTranscodeImageBodySchema,
    CreateTranscodeVideoBodySchema,
]).register(transcoderThreeRegistry, {
    id: 'TranscoderThreeRequestSchema',
    description: 'Transcoder THREE job request schema',
});
export const TranscoderThreeResponseSchema = z.union([
    z.array(GetJobStatusResponseSchema),
    CreateTranscodeResponseSchema,
    ErrorResponseSchema,
]).register(transcoderThreeRegistry, {
    id: 'TranscoderThreeResponseSchema',
    description: 'Transcoder THREE job response schema',
});
// #endregion
export const GetJobStatusQuerySchema = z.object({ id: z.array(z.string()).optional() }).register(transcoderThreeRegistry, {
    id: 'GetJobStatusQuerySchema',
    description: 'GetJobStatusQuery schema',
});
//# sourceMappingURL=api.schema.js.map