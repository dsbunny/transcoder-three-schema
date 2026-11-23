// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// `@type` field is optional for requests with no other required fields.

import * as z from "zod";
import { transcoderThreeRegistry } from './registry.js';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import { FileStatAndChecksumsSchema } from '@dsbunny/metadata-schema';
import { TranscodeProgressSchema } from "./progress.schema.js";
import {
	TranscodeImageRequestSchema,
	TranscodeVideoRequestSchema,
} from "./request.schema.js";
import { TranscodeResponseSchema } from "./response.schema.js";

// #region Transcoder THREE
export const GetJobStatusRequestSchema = z.object({
	'@type': z.literal('GetJobStatusRequest')
		.describe('Type of the Get Transcoder THREE Job Status request object.')
}).optional().register(transcoderThreeRegistry, {
	id: 'GetJobStatusRequestSchema',
	description: 'Get Transcoder THREE Job Status request schema',
});
export type GetJobStatusRequest = z.infer<typeof GetJobStatusRequestSchema>;

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
export type GetJobStatusErrorResponse = z.infer<typeof GetJobStatusErrorResponseSchema>;

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
export type GetJobStatusFailedResponse = z.infer<typeof GetJobStatusFailedResponseSchema>;

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
export type GetJobStatusSucceededResponse = z.infer<typeof GetJobStatusSucceededResponseSchema>;

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
export type GetJobStatusRejectedResponse = z.infer<typeof GetJobStatusRejectedResponseSchema>;

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
export type GetJobStatusCreatedResponse = z.infer<typeof GetJobStatusCreatedResponseSchema>;

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
export type GetJobStatusResponse = z.infer<typeof GetJobStatusResponseSchema>;

export const CreateTranscodeImageBodySchema = z.object({
	'@type': z.literal('CreateTranscodeImageRequest')
		.describe('Type of the Create Transcoder THREE image job request object.'),
	image_request: TranscodeImageRequestSchema,
}).register(transcoderThreeRegistry, {
	id: 'CreateTranscodeImageRequestSchema',
	description: 'Create Transcoder THREE image job request schema',
});
export type CreateTranscodeImageBody = z.infer<typeof CreateTranscodeImageBodySchema>;
/** @deprecated Use CreateTranscodeImageBodySchema. */
export const CreateTranscodeImageRequestSchema = CreateTranscodeImageBodySchema;
/** @deprecated Use CreateTranscodeImageBody. */
export type CreateTranscodeImageRequest = CreateTranscodeImageBody;
export const CreateTranscodeVideoBodySchema = z.object({
	'@type': z.literal('CreateTranscodeVideoRequest')
		.describe('Type of the Create Transcoder THREE video job request object.'),
	video_request: TranscodeVideoRequestSchema,
}).register(transcoderThreeRegistry, {
	id: 'CreateTranscodeVideoRequestSchema',
	description: 'Create Transcoder THREE video job request schema',
});
export type CreateTranscodeVideoBody = z.infer<typeof CreateTranscodeVideoBodySchema>;
/** @deprecated Use CreateTranscodeVideoBodySchema. */
export const CreateTranscodeVideoRequestSchema = CreateTranscodeVideoBodySchema;
/** @deprecated Use CreateTranscodeVideoBody. */
export type CreateTranscodeVideoRequest = CreateTranscodeVideoBody;

export const CreateTranscodeResponseSchema = TranscodeResponseSchema.extend({
	'@type': z.literal('CreateTranscodeResponse')
		.describe('Type of the Create Transcoder THREE job response object.'),
}).register(transcoderThreeRegistry, {
	id: 'CreateTranscodeResponseSchema',
	description: 'Create Transcoder THREE job response schema',
});
export type CreateTranscodeResponse = z.infer<typeof CreateTranscodeResponseSchema>;
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
export type TranscoderThreeRequest = z.infer<typeof TranscoderThreeRequestSchema>;

export const TranscoderThreeResponseSchema = z.union([
	z.array(GetJobStatusResponseSchema),
	CreateTranscodeResponseSchema,
	ErrorResponseSchema,
]).register(transcoderThreeRegistry, {
	id: 'TranscoderThreeResponseSchema',
	description: 'Transcoder THREE job response schema',
});
export type TranscoderThreeResponse = z.infer<typeof TranscoderThreeResponseSchema>;
// #endregion

export const GetJobStatusQuerySchema = z.object({ id: z.array(z.string()).optional() }).register(transcoderThreeRegistry, {
	id: 'GetJobStatusQuerySchema',
	description: 'GetJobStatusQuery schema',
});
export type GetJobStatusQuery = z.infer<typeof GetJobStatusQuerySchema>;
