"use client";

import { usePathname } from "next/navigation";
import { SessionCookies } from "@lib/types";
import Button from "@comps/ui/button";
import { cn } from "@comps/lib/utils";
import { useState } from "react";
import SlidingHoverClient from "@client/client.sliding-motion";

type LinkProps = {
    label: string;
    href: string;
    sessionActive?: boolean | undefined;
};
type LinkGroup = {
    label: string;
    group: LinkProps[];
};
type LinkPropsList = (LinkProps | LinkGroup)[];
type HeaderProps = {
    session: SessionCookies | null;
};

export default function HeaderClient(props: HeaderProps) {
    const { session } = props;

    const linkList: LinkPropsList = [
        { label: "Home", href: "/" },
        {
            label: "Zustand Examples",
            group: [
                { label: "Zustand Set", href: "/zustand-set" },
                { label: "Zustand Get", href: "/zustand-get" },
            ],
        },
        {
            label: "Fruits Exemples",
            group: [
                { label: "Display Fruits", href: "/fruits" },
                { label: "Server Fruits", href: "/random-fruit" },
            ],
        },
        { label: "Nans's Shortcuts", href: "/shortcut" },
        {
            label: "My Account",
            group: [
                { label: "Dashboard", href: "/dashboard", sessionActive: true },
                { label: "Profile", href: "/profile", sessionActive: true },
            ],
        },
        {
            label: "Authentication",
            group: [
                { label: "Login", href: "/login", sessionActive: false },
                { label: "Register", href: "/register", sessionActive: false },
            ],
        },
    ];

    return (
        <header className="mt-2 h-12">
            <nav className="flex justify-center gap-1">
                <SlidingHoverClient
                    className="flex justify-center gap-1"
                    color="bg-gray-100"
                    rounded="rounded-md"
                    duration="duration-300"
                >
                {linkList.map((linkOrGroup, index) => (
                    <HeaderDisplay key={index} linkOrGroup={linkOrGroup} session={session} />
                ))}
                </SlidingHoverClient>
            </nav>
        </header>
    );
}

type HeaderDisplayProps = {
    key: number;
    linkOrGroup: LinkProps | LinkGroup;
    session: SessionCookies | null;
};

const HeaderDisplay = (props: HeaderDisplayProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { key, linkOrGroup, session } = props;

    if ("group" in linkOrGroup) {
        const { label, group } = linkOrGroup;

        const sessionActive = group.map((link) => link.sessionActive).includes(true);
        const displayButton = (session && sessionActive) || (!session && !sessionActive) || sessionActive === undefined;

        if (!displayButton) return <></>;

        return (
            <div>
                <Button
                    type="button"
                    variant="ghost"
                    buttonSize="lg"
                    fontSize="md"
                    roundedSize="md"
                    ring="none"
                    key={key}
                    className={cn("text-nowrap py-1")}
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    {label}
                </Button>
                <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className={cn("relative flex flex-col gap-1 rounded-md",
                    !isOpen && "hidden pointer-events-none"
                )}>
                    {group.map((groupLink, index) => (
                        <HeaderLink key={index} link={groupLink} session={session} />
                    ))}
                </div>
            </div>
        );
    }

    if ("label" in linkOrGroup) {
        const link: LinkProps = linkOrGroup;
        return <HeaderLink key={key} link={link} session={session} />;
    }
};

type HeaderLinkProps = {
    key: number;
    link: LinkProps;
    session: SessionCookies | null;
};

const HeaderLink = (props: HeaderLinkProps) => {
    const { key, link, session } = props;
    const { label, href, sessionActive } = link;

    // Get the current pathname
    const pathname = usePathname();

    // If current page and href are the same, add font-semibold class
    const currentPage = pathname === href ? " font-bold" : "";

    // Display the button only if the session is active or not
    const displayButton = (session && sessionActive) || (!session && !sessionActive) || sessionActive === undefined;
    if (!displayButton) return <></>;

    return (
        <Button
            key={key}
            type="link"
            variant="transparent"
            buttonSize="lg"
            fontSize="md"
            roundedSize="md"
            ring="none"
            href={href}
            className={cn("text-nowrap py-1", currentPage)}
        >
            {label}
        </Button>
    );
};
