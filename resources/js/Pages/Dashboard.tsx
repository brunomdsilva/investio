import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard() {
    return (
        <AuthenticatedLayout headTitle="Dashboard">
            <div>
                <p>DASHBOARD</p>
            </div>
        </AuthenticatedLayout>
    );
}
