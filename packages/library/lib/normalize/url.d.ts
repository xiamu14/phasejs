export default function normalizeUrl(url: string): {
    isValid: boolean;
    error: null;
    url: string;
    data: URL;
} | {
    isValid: boolean;
    error: unknown;
    url: string;
    data: undefined;
};
