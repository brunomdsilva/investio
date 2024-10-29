import AppFormWrapper from "@/Components/Forms/AppFormWrapper";
import AppInput from "@/Components/Forms/AppInput";
import { Button } from "@/shadcn/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shadcn/components/ui/dialog";
import { useForm } from "@inertiajs/react";
import { FormEvent, useId, useRef, useState } from "react";
import { route } from "ziggy-js";

export default function DeleteUserForm() {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const formId = useId();

    const form = useForm({
        password: "",
    });

    function confirmUserDeletion() {
        setConfirmingUserDeletion(true);
    }

    function submit(event: FormEvent) {
        event.preventDefault();

        form.delete(route("profile.destroy"), {
            preserveScroll: true,
            // onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => form.reset(),
        });
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Delete Account</CardTitle>
                <CardDescription>
                    Once your account is deleted, all of its resources and data will be permanently deleted. Before
                    deleting your account, please download any data or information that you wish to retain.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button onClick={confirmUserDeletion} variant="destructive">
                            Delete Account
                        </Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you sure you want to delete your account?</DialogTitle>

                            <DialogDescription>
                                Once your account is deleted, all of its resources and data will be permanently deleted.
                                Please enter your password to confirm you would like to permanently delete your account.
                            </DialogDescription>
                        </DialogHeader>

                        <AppFormWrapper formId={formId} onSubmit={submit}>
                            <AppInput
                                ref={passwordInput}
                                label="Password"
                                type="password"
                                required
                                autoFocus
                                value={form.data.password}
                                onChange={(e) => form.setData("password", e.target.value)}
                                error={form.errors.password}
                            />
                        </AppFormWrapper>

                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>

                            <Button type="submit" form={formId} variant="destructive" disabled={form.processing}>
                                Delete Account
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
}
