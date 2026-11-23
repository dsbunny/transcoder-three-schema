import * as z from "zod";
export declare const TranscoderThreeWebhookClassSchema: z.ZodEnum<{
    three: "three";
}>;
export type TranscoderThreeWebhookClass = z.infer<typeof TranscoderThreeWebhookClassSchema>;
export declare const TranscoderThreeWebhookTypeSchema: z.ZodEnum<{
    new: "new";
    change: "change";
}>;
export type TranscoderThreeWebhookType = z.infer<typeof TranscoderThreeWebhookTypeSchema>;
export declare const TranscoderThreeWebhookRequestSchema: z.ZodObject<{
    tenant_id: z.ZodUUID;
    ref_id: z.ZodUUID;
    trace_id: z.ZodOptional<z.ZodString>;
    '@type': z.ZodLiteral<"TranscoderThreeWebhookRequest">;
    class: z.ZodEnum<{
        three: "three";
    }>;
    type: z.ZodEnum<{
        new: "new";
        change: "change";
    }>;
    url: z.ZodURL;
}, z.core.$strip>;
export type TranscoderThreeWebhookRequest = z.infer<typeof TranscoderThreeWebhookRequestSchema>;
export declare const TranscoderThreeWebhookProgressSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderThreeWebhookProgress">;
}, z.core.$strip>;
export type TranscoderThreeWebhookProgress = z.infer<typeof TranscoderThreeWebhookProgressSchema>;
export declare const TranscoderThreeWebhookResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderThreeWebhookResponse">;
}, z.core.$strip>;
export type TranscoderThreeWebhookResponse = z.infer<typeof TranscoderThreeWebhookResponseSchema>;
//# sourceMappingURL=webhook.schema.d.ts.map