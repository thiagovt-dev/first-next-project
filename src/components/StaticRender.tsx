async function fetchData() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/data`, {
    next: { revalidate: 60 },
  });
  const json = await data.json();
  return json;
}

interface ApiResponse {
  name: string;
  timestamp: Date;
}

export default async function StaticRender() {
  const time: ApiResponse = await fetchData();

  return (
    <div>
      <>
        <h3>Gerado Estaticamente durante o build: </h3>
        <h2>{time.timestamp.toString()}</h2>
      </>
    </div>
  );
}
