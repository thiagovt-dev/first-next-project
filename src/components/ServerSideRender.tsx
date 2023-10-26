async function fetchData() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/data`, {
    cache: "no-store",
  });
  const json = await data.json();
  return json;
}

interface ApiResponse {
  name: string;
  timestamp: Date;
}

export default async function ServerSideRender() {
  const time: ApiResponse = await fetchData();

  return (
    <div>
      <>
        <h3>Gerado no servidor: </h3>
        <h2>{time.timestamp.toString()}</h2>
      </>
    </div>
  );
}

