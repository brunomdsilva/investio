import Checkbox from "@/Components/Checkbox";
import AppInput from "@/Components/Forms/AppInput";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import GuestLayout from "@/Layouts/GuestLayout";
import { router, useForm } from "@inertiajs/react";
import { FormEvent } from "react";

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    const form = useForm({
        email: "",
        password: "",
        remember: false,
    });

    function submit(event: FormEvent) {
        event.preventDefault();

        form.post(route("login"), {
            onFinish: () => form.reset("password"),
        });
    }

    return (
        <GuestLayout head="Log in">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Log in</CardTitle>
                </CardHeader>

                <CardContent>
                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="grid gap-4">
                        <AppInput
                            label="Email"
                            placeholder="example@email.com"
                            value={form.data.email}
                            error={form.errors.email}
                            onChange={(e) =>
                                form.setData("email", e.target.value)
                            }
                        />

                        <AppInput
                            label="Password"
                            type="password"
                            placeholder="••••"
                            value={form.data.password}
                            error={form.errors.password}
                            onChange={(e) =>
                                form.setData("password", e.target.value)
                            }
                        />

                        <div className="mt-4 block">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={form.data.remember}
                                    onChange={(e) =>
                                        form.setData(
                                            "remember",
                                            e.target.checked
                                        )
                                    }
                                />
                                <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div className="mt-4 flex items-center justify-end">
                            {canResetPassword && (
                                <Button
                                    variant="link"
                                    type="button"
                                    onClick={() =>
                                        router.get(route("password.request"))
                                    }
                                >
                                    Forgot your password?
                                </Button>

                                // <Link
                                //     href={route("password.request")}
                                //     className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                                // >
                                //     Forgot your password?
                                // </Link>
                            )}

                            <Button disabled={form.processing}>Log in</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </GuestLayout>
    );
}
