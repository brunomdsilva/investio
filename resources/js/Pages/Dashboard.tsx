import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard() {
    return (
        <AuthenticatedLayout headTitle="Dashboard">
            <div className="space-y-4">
                <p>DASHBOARD</p>

                <div className="p-10 border">
                    <p>Dashboard content goes here</p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
