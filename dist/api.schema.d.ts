import * as z from "zod";
export declare const GetJobStatusRequestSchema: z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusRequest">;
}, z.core.$strip>>;
export type GetJobStatusRequest = z.infer<typeof GetJobStatusRequestSchema>;
export declare const GetJobStatusErrorResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusErrorResponse">;
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"error">;
    error: z.ZodString;
}, z.core.$strip>;
export type GetJobStatusErrorResponse = z.infer<typeof GetJobStatusErrorResponseSchema>;
export declare const GetJobStatusFailedResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusFailedResponse">;
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>;
export type GetJobStatusFailedResponse = z.infer<typeof GetJobStatusFailedResponseSchema>;
export declare const GetJobStatusSucceededResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusSucceededResponse">;
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
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
export type GetJobStatusSucceededResponse = z.infer<typeof GetJobStatusSucceededResponseSchema>;
export declare const GetJobStatusRejectedResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusRejectedResponse">;
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
    issues: z.ZodOptional<z.ZodArray<z.ZodAny>>;
}, z.core.$strip>;
export type GetJobStatusRejectedResponse = z.infer<typeof GetJobStatusRejectedResponseSchema>;
export declare const GetJobStatusCreatedResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusCreatedResponse">;
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"created">;
    progress: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"TranscodeProgress">;
        lengthComputable: z.ZodBoolean;
        loaded: z.ZodNumber;
        total: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetJobStatusCreatedResponse = z.infer<typeof GetJobStatusCreatedResponseSchema>;
export declare const GetJobStatusResponseSchema: z.ZodUnion<readonly [z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusErrorResponse">;
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"error">;
    error: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusFailedResponse">;
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusSucceededResponse">;
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
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
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusRejectedResponse">;
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
    issues: z.ZodOptional<z.ZodArray<z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusCreatedResponse">;
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"created">;
    progress: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"TranscodeProgress">;
        lengthComputable: z.ZodBoolean;
        loaded: z.ZodNumber;
        total: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>]>;
export type GetJobStatusResponse = z.infer<typeof GetJobStatusResponseSchema>;
export declare const CreateTranscodeImageBodySchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateTranscodeImageRequest">;
    image_request: z.ZodObject<{
        reference_id: z.ZodString;
        input: z.ZodObject<{
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
        client_request_token: z.ZodOptional<z.ZodString>;
        '@type': z.ZodLiteral<"TranscodeImageRequest">;
        type: z.ZodLiteral<"image">;
        output: z.ZodObject<{
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
    }, z.core.$strip>;
}, z.core.$strip>;
export type CreateTranscodeImageBody = z.infer<typeof CreateTranscodeImageBodySchema>;
/** @deprecated Use CreateTranscodeImageBodySchema. */
export declare const CreateTranscodeImageRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateTranscodeImageRequest">;
    image_request: z.ZodObject<{
        reference_id: z.ZodString;
        input: z.ZodObject<{
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
        client_request_token: z.ZodOptional<z.ZodString>;
        '@type': z.ZodLiteral<"TranscodeImageRequest">;
        type: z.ZodLiteral<"image">;
        output: z.ZodObject<{
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
    }, z.core.$strip>;
}, z.core.$strip>;
/** @deprecated Use CreateTranscodeImageBody. */
export type CreateTranscodeImageRequest = CreateTranscodeImageBody;
export declare const CreateTranscodeVideoBodySchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateTranscodeVideoRequest">;
    video_request: z.ZodObject<{
        reference_id: z.ZodString;
        input: z.ZodObject<{
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
        client_request_token: z.ZodOptional<z.ZodString>;
        '@type': z.ZodLiteral<"TranscodeVideoRequest">;
        type: z.ZodLiteral<"video">;
        output: z.ZodObject<{
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
    }, z.core.$strip>;
}, z.core.$strip>;
export type CreateTranscodeVideoBody = z.infer<typeof CreateTranscodeVideoBodySchema>;
/** @deprecated Use CreateTranscodeVideoBodySchema. */
export declare const CreateTranscodeVideoRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CreateTranscodeVideoRequest">;
    video_request: z.ZodObject<{
        reference_id: z.ZodString;
        input: z.ZodObject<{
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
        client_request_token: z.ZodOptional<z.ZodString>;
        '@type': z.ZodLiteral<"TranscodeVideoRequest">;
        type: z.ZodLiteral<"video">;
        output: z.ZodObject<{
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
    }, z.core.$strip>;
}, z.core.$strip>;
/** @deprecated Use CreateTranscodeVideoBody. */
export type CreateTranscodeVideoRequest = CreateTranscodeVideoBody;
export declare const CreateTranscodeResponseSchema: z.ZodObject<{
    job_id: z.ZodUUID;
    reference_id: z.ZodString;
    type: z.ZodEnum<{
        image: "image";
        video: "video";
    }>;
    timestamp: z.ZodISODateTime;
    '@type': z.ZodLiteral<"CreateTranscodeResponse">;
}, z.core.$strip>;
export type CreateTranscodeResponse = z.infer<typeof CreateTranscodeResponseSchema>;
export declare const TranscoderThreeRequestSchema: z.ZodUnion<readonly [z.ZodOptional<z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusRequest">;
}, z.core.$strip>>, z.ZodObject<{
    '@type': z.ZodLiteral<"CreateTranscodeImageRequest">;
    image_request: z.ZodObject<{
        reference_id: z.ZodString;
        input: z.ZodObject<{
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
        client_request_token: z.ZodOptional<z.ZodString>;
        '@type': z.ZodLiteral<"TranscodeImageRequest">;
        type: z.ZodLiteral<"image">;
        output: z.ZodObject<{
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
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"CreateTranscodeVideoRequest">;
    video_request: z.ZodObject<{
        reference_id: z.ZodString;
        input: z.ZodObject<{
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
        client_request_token: z.ZodOptional<z.ZodString>;
        '@type': z.ZodLiteral<"TranscodeVideoRequest">;
        type: z.ZodLiteral<"video">;
        output: z.ZodObject<{
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
    }, z.core.$strip>;
}, z.core.$strip>]>;
export type TranscoderThreeRequest = z.infer<typeof TranscoderThreeRequestSchema>;
export declare const TranscoderThreeResponseSchema: z.ZodUnion<readonly [z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusErrorResponse">;
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"error">;
    error: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusFailedResponse">;
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"failed">;
    error_code: z.ZodString;
    error_message: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusSucceededResponse">;
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"succeeded">;
    progress: z.ZodLiteral<100>;
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
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusRejectedResponse">;
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"rejected">;
    reason: z.ZodString;
    issues: z.ZodOptional<z.ZodArray<z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"GetJobStatusCreatedResponse">;
    job_id: z.ZodUUID;
    status: z.ZodLiteral<"created">;
    progress: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"TranscodeProgress">;
        lengthComputable: z.ZodBoolean;
        loaded: z.ZodNumber;
        total: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>]>>, z.ZodObject<{
    job_id: z.ZodUUID;
    reference_id: z.ZodString;
    type: z.ZodEnum<{
        image: "image";
        video: "video";
    }>;
    timestamp: z.ZodISODateTime;
    '@type': z.ZodLiteral<"CreateTranscodeResponse">;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"ErrorResponse">;
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>]>;
export type TranscoderThreeResponse = z.infer<typeof TranscoderThreeResponseSchema>;
export declare const GetJobStatusQuerySchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type GetJobStatusQuery = z.infer<typeof GetJobStatusQuerySchema>;
//# sourceMappingURL=api.schema.d.ts.map