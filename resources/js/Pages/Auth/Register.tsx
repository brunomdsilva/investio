import AppFormWrapper from "@/Components/Forms/AppFormWrapper";
import AppInput from "@/Components/Forms/AppInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useId } from "react";
import { route } from "ziggy-js";
import AuthCard from "./Partials/AuthCard";

export default function Register() {
    const formId = useId();

    const form = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        form.post(route("register"), {
            onFinish: () => form.reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout headTitle="Register">
            <AuthCard
                title="Create an account"
                submitLabel="Register"
                formId={formId}
                formProcessing={form.processing}
                secondaryAction={{
                    href: route("login"),
                    label: "Already registered?",
                }}
            >
                <AppFormWrapper formId={formId} onSubmit={submit}>
                    <AppInput
                        autoFocus
                        label="Name"
                        placeholder="John Doe"
                        required
                        value={form.data.name}
                        error={form.errors.name}
                        onChange={(e) => form.setData("name", e.target.value)}
                    />

                    <AppInput
                        label="Email"
                        placeholder="example@email.com"
                        required
                        value={form.data.email}
                        error={form.errors.email}
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
