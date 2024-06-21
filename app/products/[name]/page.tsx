export default async function Page({
  params: { name },
}: {
  params: { name: string }
}) {
  return <div>{`Product: ${name}`}</div>
}
