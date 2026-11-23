import * as z from "zod";
export declare const TranscoderThreeInputSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderThreeInput">;
    url: z.ZodURL;
    expires: z.ZodISODateTime;
    s3_uri: z.ZodString;
    s3_etag: z.ZodString;
    s3_parts: z.ZodArray<z.ZodNumber>;
    s3_filename: z.ZodString;
    content_type: z.ZodString;
    content_length: z.ZodNumber;
}, z.core.$strip>;
export type TranscoderThreeInput = z.infer<typeof TranscoderThreeInputSchema>;
//# sourceMappingURL=input.schema.d.ts.map