import { SidebarTrigger } from "@/shadcn/components/ui/sidebar";

type Props = {
    title: string;
};

export default function TheHeader(props: Props) {
    return (
        <div className="py-0 h-20 flex items-center border-b">
            <div className="container flex items-center gap-4">
                <SidebarTrigger />
                <h1 className="text-2xl font-semibold">{props.title}</h1>

                <div className="grow" />

                <div className="">git</div>
                <div className="">theme</div>
                <div className="">user -profile -logout</div>
            </div>
        </div>
    );
}
