"use client";

import { Switch } from "@comps/ui/switch";
import { useStore } from "@client/client.zustand-store";
import Button from "@/components/ui/button";

export default function ZustandSetPage() {
    const { switchState, toggleSwitch } = useStore();

    return (
        <main className="flex flex-1 flex-col items-center justify-center gap-2 overflow-y-auto px-6 pb-6">
            <div className="flex items-center gap-4">
                <Switch checked={switchState} onCheckedChange={() => toggleSwitch()} />
                <span className="font-bold">{switchState ? "ON" : "OFF"}</span>
            </div>
            <div>
                <span>Go to </span>
                <Button type="link" variant="link" buttonSize="none" href="/zustand-get">
                    Zustand Get Page
                </Button>
                <span> to see result</span>
            </div>
        </main>
    );
}
