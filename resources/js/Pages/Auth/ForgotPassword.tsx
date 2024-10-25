import AppFormWrapper from "@/Components/Forms/AppFormWrapper";
import AppInput from "@/Components/Forms/AppInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";
import { FormEvent, useId } from "react";
import { route } from "ziggy-js";
import AuthCard from "./Partials/AuthCard";

export default function ForgotPassword() {
    const formId = useId();

    const form = useForm({
        email: "",
    });

    function submit(event: FormEvent) {
        event.preventDefault();

        form.post(route("password.email"));
    }

    return (
        <GuestLayout headTitle="Forgot Password">
            <AuthCard
                title="Forgot Password"
                description="Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."
                submitLabel="Send reset link"
                formId={formId}
                formProcessing={form.processing}
                secondaryAction={{
                    href: route("login"),
                    label: "Back to login",
                }}
            >
                <AppFormWrapper id={formId} onSubmit={submit}>
                    <AppInput
                        label="Email"
                        placeholder="example@email.com"
                        required
                        value={form.data.email}
                        error={form.errors.email}
                        onChange={(e) => form.setData("email", e.target.value)}
                    />
                </AppFormWrapper>
            </AuthCard>
        </GuestLayout>
    );
}
