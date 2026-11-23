import * as z from "zod";
export declare const TranscodeResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscodeResponse">;
    job_id: z.ZodUUID;
    reference_id: z.ZodString;
    type: z.ZodEnum<{
        image: "image";
        video: "video";
    }>;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type TranscodeResponse = z.infer<typeof TranscodeResponseSchema>;
//# sourceMappingURL=response.schema.d.ts.map