import AppFormWrapper from "@/Components/Forms/AppFormWrapper";
import AppInput from "@/Components/Forms/AppInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";
import { FormEvent, useId } from "react";
import AuthCard from "./Partials/AuthCard";

export default function ConfirmPassword() {
    const formId = useId();

    const form = useForm({
        password: "",
    });

    function submit(event: FormEvent) {
        event.preventDefault();

        form.post(route("password.confirm"), {
            onFinish: () => form.reset("password"),
        });
    }

    return (
        <GuestLayout headTitle="Confirm Password">
            <AuthCard
                title="Confirm Password"
                description="This is a secure area of the application. Please confirm your password before continuing."
                submitLabel="Confirm"
                formId={formId}
                formProcessing={form.processing}
            >
                <AppFormWrapper id={formId} onSubmit={submit}>
                    <AppInput
                        label="Password"
                        type="password"
                        required
                        placeholder="••••"
                        value={form.data.password}
                        error={form.errors.password}
                        onChange={(e) =>
                            form.setData("password", e.target.value)
                        }
                    />
                </AppFormWrapper>
            </AuthCard>
        </GuestLayout>
    );
}
