import { GetSession } from "@cookies/session";
import Button from "@comps/ui/button";

export default async function Home() {
    const session = await GetSession();

    return (
        <main className="flex flex-1 flex-col items-center gap-2 justify-center">
            <h1 className="text-4xl font-bold">G4cuisiner</h1>
            <div className="flex gap-2">
                {session ? (
                    <>
                        <Button type="link" href="/logout" variant="outline">
                            Logout
                        </Button>
                    </>
                ) : (
                    <>
                        <Button type="link" href="/register" variant="outline">
                            Register
                        </Button>
                        <Button type="link" href="/login">
                            Login
                        </Button>
                    </>
                )}
            </div>
            <h2 className="text-4xl font-bold">Shift + Alt + Arrow = OMG</h2>
            {/* <Button type="button" variant="default" animation={true} ring="none" className="h-12 w-24 text-xl">Wave</Button> */}
        </main>
    );
}
