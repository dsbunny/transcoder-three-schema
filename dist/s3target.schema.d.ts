import * as z from "zod";
export declare const S3TargetSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"S3Target">;
    content_type: z.ZodString;
    s3_uri: z.ZodString;
    s3_filename: z.ZodString;
    url: z.ZodURL;
}, z.core.$strip>;
export type S3Target = z.infer<typeof S3TargetSchema>;
//# sourceMappingURL=s3target.schema.d.ts.map