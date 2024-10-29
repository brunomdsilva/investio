import AppFormWrapper from "@/Components/Forms/AppFormWrapper";
import AppInput from "@/Components/Forms/AppInput";
import { Button } from "@/shadcn/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { useForm } from "@inertiajs/react";
import { FormEvent, useId, useRef } from "react";
import { route } from "ziggy-js";

export default function UpdatePasswordForm() {
    const formId = useId();

    const newPasswordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const form = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    function submit(event: FormEvent) {
        event.preventDefault();

        form.put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => form.reset(),
            onError: (errors) => {
                if (errors.password) {
                    form.reset("password", "password_confirmation");
                    newPasswordInput.current?.focus();
                }

                if (errors.current_password) {
                    form.reset("current_password");
                    currentPasswordInput.current?.focus();
                }
            },
        });
    }

    return (
        <section>
            <Card>
                <CardHeader>
                    <CardTitle>Update Password</CardTitle>
                    <CardDescription>
                        Ensure your account is using a long, random password to stay secure.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <AppFormWrapper formId={formId} onSubmit={submit}>
                        <AppInput
                            ref={currentPasswordInput}
                            label="Current password"
                            type="password"
                            value={form.data.current_password}
                            onChange={(e) => form.setData("current_password", e.target.value)}
                            error={form.errors.current_password}
                        />

                        <AppInput
                            ref={newPasswordInput}
                            label="New password"
                            type="password"
                            value={form.data.password}
                            onChange={(e) => form.setData("password", e.target.value)}
                            error={form.errors.password}
                        />

                        <AppInput
                            label="Confirm new password"
                            type="password"
                            value={form.data.password_confirmation}
                            onChange={(e) => form.setData("password_confirmation", e.target.value)}
                            error={form.errors.password_confirmation}
                        />
                    </AppFormWrapper>
                </CardContent>

                <CardFooter>
                    <Button form={formId} type="submit" disabled={form.processing}>
                        Save
                    </Button>
                </CardFooter>
            </Card>
        </section>
    );
}
