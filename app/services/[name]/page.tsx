export default async function Page({
  params: { name },
}: {
  params: { name: string }
}) {
  return <div>{`Service: ${name}`}</div>
}
