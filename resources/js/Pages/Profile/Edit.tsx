import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

type Props = {
    mustVerifyEmail: boolean;
};

export default function Edit(props: Props) {
    return (
        <AuthenticatedLayout headTitle="Profile">
            <div className="flex flex-col gap-8 max-w-4xl">
                <UpdateProfileInformationForm mustVerifyEmail={props.mustVerifyEmail} />

                <UpdatePasswordForm />

                <DeleteUserForm />
            </div>
        </AuthenticatedLayout>
    );
}
