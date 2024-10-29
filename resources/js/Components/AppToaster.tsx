import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast, Toaster } from "sonner";

export default function AppToaster() {
    const { toast: backendToast } = usePage().props;

    useEffect(() => {
        if (backendToast) {
            const toastOptions = {
                description: backendToast.description,
            };

            switch (backendToast.type) {
                case "success":
                    toast.success(backendToast.message, toastOptions);
                    break;
                case "error":
                    toast.error(backendToast.message, toastOptions);
                    break;
                case "warning":
                    toast.warning(backendToast.message, toastOptions);
                    break;
                default:
                    toast(backendToast.message, toastOptions);
            }
        }
    }, [backendToast]);

    return (
        <div className="fixed top-0 left-0 z-[9999]">
            <Toaster
                position="top-right"
                visibleToasts={6}
                duration={9999}
                expand
                closeButton
                toastOptions={{
                    classNames: {
                        closeButton:
                            "[&>svg]:size-4 size-auto p-0.5 rounded border-0 translate-x-0 left-auto right-2 top-2",
                    },
                }}
            />
        </div>
    );
}
