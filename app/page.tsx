import Wrapper from "@/components/Wrapper";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams
  const to = params.to || null
  const toKey = Array.isArray(to) ? to[0] : to
  return <Wrapper to={to} key={toKey || "default"} />;
}
