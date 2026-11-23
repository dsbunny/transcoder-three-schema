// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { transcoderThreeRegistry } from './registry.js';
import {
        WebhookProgressSchema,
        WebhookRequestSchema,
        WebhookResponseSchema,
} from "@dsbunny/webhook-schema";

export const TranscoderThreeWebhookClassSchema = z.enum(['three']).register(transcoderThreeRegistry, {
        id: 'TranscoderThreeWebhookClassSchema',
        description: 'The class of the webhook event related to Transcoder THREE operations',
});
export type TranscoderThreeWebhookClass = z.infer<typeof TranscoderThreeWebhookClassSchema>;

export const TranscoderThreeWebhookTypeSchema = z.enum(['new', 'change']).register(transcoderThreeRegistry, {
        id: 'TranscoderThreeWebhookTypeSchema',
        description: 'The type of the webhook event related to Transcoder THREE operations',
});
export type TranscoderThreeWebhookType = z.infer<typeof TranscoderThreeWebhookTypeSchema>;

export const TranscoderThreeWebhookRequestSchema = WebhookRequestSchema.extend({
        '@type': z.literal('TranscoderThreeWebhookRequest')
                .describe('Type of the Transcoder THREE webhook request object.'),
        class: TranscoderThreeWebhookClassSchema,
        type: TranscoderThreeWebhookTypeSchema,
        url: z.url()
                .describe('The URL to which the webhook should be sent'),
}).register(transcoderThreeRegistry, {
        id: 'TranscoderThreeWebhookRequestSchema',
        description: 'The schema for webhook requests sent by the Transcoder THREE system',
});
export type TranscoderThreeWebhookRequest = z.infer<typeof TranscoderThreeWebhookRequestSchema>;

export const TranscoderThreeWebhookProgressSchema = WebhookProgressSchema.extend({
        '@type': z.literal('TranscoderThreeWebhookProgress')
                .describe('Type of the Transcoder THREE webhook progress object.'),
}).register(transcoderThreeRegistry, {
        id: 'TranscoderThreeWebhookProgressSchema',
        description: 'The schema for webhook progress events sent by the Transcoder THREE system',
});
export type TranscoderThreeWebhookProgress = z.infer<typeof TranscoderThreeWebhookProgressSchema>;

export const TranscoderThreeWebhookResponseSchema = WebhookResponseSchema.extend({
        '@type': z.literal('TranscoderThreeWebhookResponse')
                .describe('Type of the Transcoder THREE webhook response object.'),
}).register(transcoderThreeRegistry, {
        id: 'TranscoderThreeWebhookResponseSchema',
        description: 'The schema for webhook responses sent by the Transcoder THREE system',
});
export type TranscoderThreeWebhookResponse = z.infer<typeof TranscoderThreeWebhookResponseSchema>;
