"use client";

import SlidingHoverClient from "@client/client.sliding-motion";
import { usePathname } from "next/navigation";
import { SessionCookies } from "@lib/types";
import Button from "@comps/ui/button";

export default function HeaderClient({
    session,
}: {
    session: SessionCookies | null;
}) {
    // Get the current pathname
    const pathname = usePathname();

    const HeaderLink = ({ href, children }: {
        href: string;
        children: React.ReactNode;
    }) => {
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

    const linkList = <>
        <HeaderLink href="/">Home</HeaderLink>
        <HeaderLink href="/fruits">Display Fruit List</HeaderLink>
        <HeaderLink href="/random-fruit">Import Fruit Server</HeaderLink>
        <HeaderLink href="/shortcut">Nans's Shortcuts</HeaderLink>
        {
            session ? (
                <>
                    <HeaderLink href="/dashboard">Dashboard</HeaderLink>
                    <HeaderLink href="/profile">Profile</HeaderLink>
                </>
            ) : (
                <>
                    <HeaderLink href="/register">Register</HeaderLink>
                    <HeaderLink href="/login">Login</HeaderLink>
                </>
            )
        }
    </>

    return (
        <header className="h-12">
            {/* Mobile */}
            <nav className="flex overflow-x-auto py-2 bg-gray-100 justify-start md:hidden">{linkList}</nav>

            {/* Desktop */}
            <nav className="flex justify-center max-md:hidden">
                <SlidingHoverClient
                className="py-2 flex justify-center"
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
