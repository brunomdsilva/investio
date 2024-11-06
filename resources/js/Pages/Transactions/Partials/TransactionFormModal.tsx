import { Button } from "@/shadcn/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shadcn/components/ui/dialog";
import { PropsWithChildren, useId, useState } from "react";
import TransactionForm from "./TransactionForm";

export default function TransactionFormModal(props: PropsWithChildren) {
    const formId = useId();
    const [modalOpened, setModalOpened] = useState<boolean>(false);

    function toggleModal(value: boolean) {
        setModalOpened(value);
    }

    return (
        <Dialog open={modalOpened} onOpenChange={toggleModal}>
            <DialogTrigger asChild>{props.children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Transaction</DialogTitle>
                    <DialogDescription>Add a new transaction to your asset portfolio.</DialogDescription>
                </DialogHeader>

                <TransactionForm formId={formId} onSuccessfulSubmit={() => toggleModal(false)} />

                <DialogFooter>
                    <Button type="submit" form={formId}>
                        Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
