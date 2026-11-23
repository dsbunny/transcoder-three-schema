import * as z from 'zod';
export declare const TranscodeProgressSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscodeProgress">;
    lengthComputable: z.ZodBoolean;
    loaded: z.ZodNumber;
    total: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>;
export type TranscodeProgress = z.infer<typeof TranscodeProgressSchema>;
//# sourceMappingURL=progress.schema.d.ts.map