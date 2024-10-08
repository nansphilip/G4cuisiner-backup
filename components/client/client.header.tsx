"use client";

import { usePathname } from "next/navigation";
import { SessionCookies } from "@lib/types";
import Button from "@comps/ui/button";
import { cn } from "@comps/lib/utils";
import { useState } from "react";
import SlidingHoverClient from "@client/client.sliding-motion";
import { ChevronDown } from "lucide-react";

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
        <header className="mt-2">
            <nav className="flex justify-center">
                <SlidingHoverClient
                    className="flex items-start justify-center gap-1"
                    color="bg-gray-200"
                    rounded="rounded-md"
                    duration="duration-200"
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
            <div className="flex flex-col gap-2" onMouseLeave={() => setIsOpen(false)}>
                <Button
                    type="button"
                    variant="transparent"
                    buttonSize="lg"
                    fontSize="md"
                    roundedSize="md"
                    ring="none"
                    key={key}
                    className={cn("text-nowrap flex gap-1 py-1")}
                    onMouseEnter={() => setIsOpen(true)}
                >
                    <span>{label}</span>
                    <ChevronDown className={cn("transition-transform duration-300",
                        isOpen && "-rotate-180"
                    )} />
                </Button>
                <div
                    className={cn(
                        "p-2 border relative opacity-100 transition-opacity duration-200 flex flex-col gap-1 rounded-md",
                        !isOpen && "opacity-0 pointer-events-none"
                    )}
                >
                    {group.map((groupLink, index) => (
                        <HeaderLink key={index} link={groupLink} session={session} />
                    ))}
                </div>
            </div>
        );
    } else if ("label" in linkOrGroup) {
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
