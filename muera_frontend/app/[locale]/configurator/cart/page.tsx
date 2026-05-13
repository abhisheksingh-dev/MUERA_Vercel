import { redirect } from "next/navigation";

export default async function ConfiguratorCartPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const userSessionId = params.userSessionId;

  if (userSessionId && typeof userSessionId === "string") {
    redirect(`/cart?userSessionId=${userSessionId}`);
  } else {
    redirect("/cart");
  }
}
