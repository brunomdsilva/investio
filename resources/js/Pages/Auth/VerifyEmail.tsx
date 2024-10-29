import AppFormWrapper from "@/Components/Forms/AppFormWrapper";
import AppInput from "@/Components/Forms/AppInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";
import { FormEvent, useId } from "react";
import { route } from "ziggy-js";
import AuthCard from "./Partials/AuthCard";

export default function VerifyEmail(props: { email: string }) {
    const formId = useId();

    const form = useForm({});

    function submit(event: FormEvent) {
        event.preventDefault();

        form.post(route("verification.send"));
    }

    return (
        <GuestLayout headTitle="Email Verification">
            <AuthCard
                title="Verify Email"
                description=" Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."
                submitLabel="Resend Email"
                formId={formId}
                formProcessing={form.processing}
                secondaryAction={{
                    label: "Log Out",
                    href: route("logout"),
                    method: "post",
                    as: "button",
                }}
            >
                <AppFormWrapper formId={formId} onSubmit={submit}>
                    <AppInput autoFocus label="Email" type="email" value={props.email} disabled />
                </AppFormWrapper>
            </AuthCard>
        </GuestLayout>
    );
}
