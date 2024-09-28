"use client";

import Button from "@comps/ui/button";
import { useStore } from "@client/client.zustand-store";

export default function ZustandGetPage() {
    const { switchState } = useStore();

    return (
        <main className="flex flex-1 flex-col items-center justify-center gap-2 overflow-y-auto px-6 pb-6">
                <div>
                    <span>Switch state is{" "}</span>
                    <span className="font-bold">{switchState ? "ON" : "OFF"}</span>
                </div>
                <div>
                    <span>Go back to </span>
                    <Button type="link" variant="link" buttonSize="none" href="/zustand-set">
                        Zustand Set Page
                    </Button>
                </div>
        </main>
    );
}
