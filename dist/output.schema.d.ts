import * as z from "zod";
export declare const TranscoderThreeFilterSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderThreeFilter">;
    crop: z.ZodOptional<z.ZodObject<{
        w: z.ZodNumber;
        h: z.ZodNumber;
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strip>>;
    scale: z.ZodOptional<z.ZodObject<{
        w: z.ZodNumber;
        h: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TranscoderThreeFilter = z.infer<typeof TranscoderThreeFilterSchema>;
export declare const TranscoderThreeImageOutputSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderThreeImageOutput">;
    s3_target: z.ZodObject<{
        '@type': z.ZodLiteral<"S3Target">;
        content_type: z.ZodString;
        s3_uri: z.ZodString;
        s3_filename: z.ZodString;
        url: z.ZodURL;
    }, z.core.$strip>;
    mime_type: z.ZodLiteral<"image">;
    mime_subtype: z.ZodEnum<{
        png: "png";
        jpeg: "jpeg";
        webp: "webp";
        avif: "avif";
    }>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    filter: z.ZodArray<z.ZodObject<{
        '@type': z.ZodLiteral<"TranscoderThreeFilter">;
        crop: z.ZodOptional<z.ZodObject<{
            w: z.ZodNumber;
            h: z.ZodNumber;
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>;
        scale: z.ZodOptional<z.ZodObject<{
            w: z.ZodNumber;
            h: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TranscoderThreeImageOutput = z.infer<typeof TranscoderThreeImageOutputSchema>;
export declare const TranscoderThreeVideoOutputSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderThreeVideoOutput">;
    s3_target: z.ZodObject<{
        '@type': z.ZodLiteral<"S3Target">;
        content_type: z.ZodString;
        s3_uri: z.ZodString;
        s3_filename: z.ZodString;
        url: z.ZodURL;
    }, z.core.$strip>;
    mime_type: z.ZodLiteral<"video">;
    mime_subtype: z.ZodEnum<{
        mp4: "mp4";
        webm: "webm";
    }>;
    video_codec: z.ZodString;
    audio_codec: z.ZodString;
    audio_channels: z.ZodEnum<{
        mono: "mono";
        stereo: "stereo";
    }>;
    width: z.ZodNumber;
    height: z.ZodNumber;
    frame_rate: z.ZodNumber;
    filter: z.ZodOptional<z.ZodArray<z.ZodObject<{
        '@type': z.ZodLiteral<"TranscoderThreeFilter">;
        crop: z.ZodOptional<z.ZodObject<{
            w: z.ZodNumber;
            h: z.ZodNumber;
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>;
        scale: z.ZodOptional<z.ZodObject<{
            w: z.ZodNumber;
            h: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type TranscoderThreeVideoOutput = z.infer<typeof TranscoderThreeVideoOutputSchema>;
export declare const TranscoderThreeOutputSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderThreeOutput">;
    file: z.ZodObject<{
        '@type': z.ZodLiteral<"FileStatAndChecksums">;
        s3_filename: z.ZodString;
        content_type: z.ZodString;
        size: z.ZodNumber;
        mtime: z.ZodString;
        md5: z.ZodString;
        sha256: z.ZodString;
        s3_uri: z.ZodString;
        s3_version_id: z.ZodString;
        s3_etag: z.ZodString;
        s3_parts: z.ZodArray<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type TranscoderThreeOutput = z.infer<typeof TranscoderThreeOutputSchema>;
//# sourceMappingURL=output.schema.d.ts.map