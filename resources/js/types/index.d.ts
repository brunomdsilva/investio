export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    toast: {
        type: "default" | "success" | "error" | "warning";
        message: string;
        description?: string;
    };
};
