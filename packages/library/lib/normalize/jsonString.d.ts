export default function normalizeJsonString<T>(json: string): {
    isValid: boolean;
    error: null;
    json: string;
    data: T;
} | {
    isValid: boolean;
    error: unknown;
    json: string;
    data: undefined;
};
