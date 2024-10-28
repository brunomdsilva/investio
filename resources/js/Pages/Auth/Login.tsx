import AppCheckbox from "@/Components/Forms/AppCheckbox";
import AppFormWrapper from "@/Components/Forms/AppFormWrapper";
import AppInput from "@/Components/Forms/AppInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link, useForm } from "@inertiajs/react";
import { FormEvent, useId } from "react";
import { route } from "ziggy-js";
import AuthCard from "./Partials/AuthCard";

type Props = {
    canResetPassword: boolean;
};

export default function Login(props: Props) {
    const formId = useId();

    const form = useForm({
        email: "admin@admin.com",
        password: "admin",
        remember: false,
    });

    function submit(event: FormEvent) {
        event.preventDefault();

        form.post(route("login"), {
            onFinish: () => form.reset("password"),
        });
    }

    return (
        <GuestLayout headTitle="Login">
            <AuthCard
                title="Login"
                description={
                    <>
                        Don't have an account?{" "}
                        <Link
                            href={route("register")}
                            className="text-primary hover:underline underline-offset-4 font-medium"
                        >
                            register here
                        </Link>
                    </>
                }
                submitLabel="Log in"
                formId={formId}
                formProcessing={form.processing}
                secondaryAction={{
                    href: route("password.request"),
                    label: "Forgot your password?",
                    condition: props.canResetPassword,
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

                    <AppCheckbox
                        label="Remember me"
                        checked={form.data.remember}
                        onCheckedChange={(checked: boolean) =>
                            form.setData("remember", checked)
                        }
                    />
                </AppFormWrapper>
            </AuthCard>
        </GuestLayout>
    );
}
