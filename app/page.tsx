import { GetSession } from "@cookies/session";
import Button from "@comps/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";

export default async function Home() {
  const session = await GetSession();

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-2">
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
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>This is the content</CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="button">Deploy</Button>
        </CardFooter>
      </Card>
      {/* <Button type="button" variant="default" animation={true} ring="none" className="h-12 w-24 text-xl">Wave</Button> */}
    </main>
  );
}
