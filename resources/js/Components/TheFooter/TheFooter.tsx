import { Button } from "@/shadcn/components/ui/button";
import { Mail } from "lucide-react";
import AppContainer from "../AppContainer";
import { IconGithub } from "../AppIcons";

export default function TheFooter() {
    return (
        <footer className="py-6 border-t text-muted-foreground text-sm">
            <AppContainer className="flex items-center gap-4 justify-between">
                <p>© {new Date().getFullYear()} Investio. All rights reserved.</p>

                <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://github.com/brunomdsilva" target="_blank" aria-label="GitHub">
                            <IconGithub className="!size-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="mailto:brunosilva010601@gmail.com" target="_blank" aria-label="Email">
                            <Mail className="!size-5" />
                        </a>
                    </Button>
                </div>
            </AppContainer>
        </footer>
    );
}
