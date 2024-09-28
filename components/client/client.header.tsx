"use client";

import SlidingHoverClient from "@client/client.sliding-motion";
import { usePathname } from "next/navigation";
import { SessionCookies } from "@lib/types";
import Button from "@comps/ui/button";

export default function HeaderClient({ session }: { session: SessionCookies | null }) {
    // Get the current pathname
    const pathname = usePathname();

    const HeaderLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
        // If current page and href are the same, add font-semibold class
        const currentPage = pathname === href ? " font-bold" : "";

        return (
            <Button
                type="link"
                variant="transparent"
                buttonSize="lg"
                fontSize="md"
                ring="none"
                href={href}
                className={`${currentPage} text-nowrap py-1`}
            >
                {children}
            </Button>
        );
    };

    const linkList = (
        <>
            <HeaderLink href="/">Home</HeaderLink>
            <HeaderLink href="/zustand-set">Zustand Set</HeaderLink>
            <HeaderLink href="/zustand-get">Zustand Get</HeaderLink>
            <HeaderLink href="/fruits">Display Fruits</HeaderLink>
            <HeaderLink href="/random-fruit">Server Fruits</HeaderLink>
            <HeaderLink href="/shortcut">Nans&apos;s Shortcuts</HeaderLink>
            {session ? (
                <>
                    <HeaderLink href="/dashboard">Dashboard</HeaderLink>
                    <HeaderLink href="/profile">Profile</HeaderLink>
                </>
            ) : (
                <>
                    <HeaderLink href="/register">Register</HeaderLink>
                    <HeaderLink href="/login">Login</HeaderLink>
                </>
            )}
        </>
    );

    return (
        <header className="h-12">
            {/* Mobile */}
            <nav className="flex justify-start overflow-x-auto bg-gray-100 py-2 md:hidden">{linkList}</nav>

            {/* Desktop */}
            <nav className="flex justify-center max-md:hidden">
                <SlidingHoverClient
                    className="flex justify-center py-2"
                    color="bg-gray-200"
                    rounded="rounded-md"
                    duration="duration-300"
                >
                    {linkList}
                </SlidingHoverClient>
            </nav>
        </header>
    );
}
