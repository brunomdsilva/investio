import AppFormWrapper from "@/Components/Forms/AppFormWrapper";
import AppInput from "@/Components/Forms/AppInput";
import { Button } from "@/shadcn/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { Link, useForm, usePage } from "@inertiajs/react";
import { FormEvent, useId } from "react";
import { route } from "ziggy-js";

type Props = {
    mustVerifyEmail: boolean;
};

export default function UpdateProfileInformation(props: Props) {
    const formId = useId();
    const user = usePage().props.auth.user;

    const form = useForm({
        name: user.name,
        email: user.email,
    });

    function submit(event: FormEvent) {
        event.preventDefault();

        form.patch(route("profile.update"));
    }

    function EmailVerificationNotice() {
        const showNotice = props.mustVerifyEmail && !user.email_verified_at;

        if (!showNotice) return;

        return (
            <p className="text-sm">
                Your email address is unverified.{" "}
                <Link href={route("verification.send")} method="post" as="button" className="inline-link">
                    Click here to re-send the verification email.
                </Link>
            </p>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Update your account's profile information and email address.</CardDescription>
            </CardHeader>

            <CardContent>
                <AppFormWrapper formId={formId} onSubmit={submit}>
                    <AppInput
                        autoFocus
                        label="Name"
                        value={form.data.name}
                        onChange={(e) => form.setData("name", e.target.value)}
                        error={form.errors.name}
                        required
                    />

                    <AppInput
                        label="Email"
                        type="email"
                        value={form.data.email}
                        onChange={(e) => form.setData("email", e.target.value)}
                        error={form.errors.email}
                        required
                    />

                    <EmailVerificationNotice />
                </AppFormWrapper>
            </CardContent>

            <CardFooter>
                <Button form={formId} type="submit">
                    Save
                </Button>
            </CardFooter>
        </Card>
    );
}
