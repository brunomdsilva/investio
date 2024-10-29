import AppFormWrapper from "@/Components/Forms/AppFormWrapper";
import AppInput from "@/Components/Forms/AppInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";
import { FormEvent, useId } from "react";
import { route } from "ziggy-js";
import AuthCard from "./Partials/AuthCard";

type Props = {
    token: string;
    email: string;
};

export default function ResetPassword(props: Props) {
    const formId = useId();

    const form = useForm({
        token: props.token,
        email: props.email,
        password: "",
        password_confirmation: "",
    });

    function submit(event: FormEvent) {
        event.preventDefault();

        form.post(route("password.store"), {
            onFinish: () => form.reset("password", "password_confirmation"),
        });
    }

    return (
        <GuestLayout headTitle="Reset Password">
            <AuthCard
                title="Reset Password"
                submitLabel="Reset Password"
                formId={formId}
                formProcessing={form.processing}
            >
                <AppFormWrapper formId={formId} onSubmit={submit}>
                    <AppInput
                        autoFocus
                        label="Email"
                        placeholder="example@email.com"
                        required
                        value={form.data.email}
                        error={form.errors.email}
                        disabled
                        onChange={(e) => form.setData("email", e.target.value)}
                    />

                    <AppInput
                        label="Password"
                        type="password"
                        required
                        value={form.data.password}
                        error={form.errors.password}
                        onChange={(e) => form.setData("password", e.target.value)}
                    />

                    <AppInput
                        label="Confirm Password"
                        type="password"
                        required
                        value={form.data.password_confirmation}
                        error={form.errors.password_confirmation}
                        onChange={(e) => form.setData("password_confirmation", e.target.value)}
                    />
                </AppFormWrapper>
            </AuthCard>
        </GuestLayout>
    );
}
