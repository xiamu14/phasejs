export default function sessionCache<Res>(key: string, request: () => Promise<Res>): (params?: {
    debug?: boolean;
}) => Promise<Res | undefined>;
