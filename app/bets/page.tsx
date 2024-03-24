import { Game, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Game[]> {

  const apiKey="73636e21684e64f828ece0848249f09f"
  const baseURL = "https://api.the-odds-api.com/v4"
  const response = await fetch(`${baseURL}/sports/basketball_nba/odds/?apiKey=${apiKey}&regions=us&oddsFormat=american`, { 
    method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
})

  const data = await response.json()

  var dataArray = []

//   for (var outcome in data.map(d => d.bookmakers[0].markets[0].outcomes)) {
    
//   }

  const parsedData = data.map(d => d.bookmakers[0].markets[0].outcomes[0])

  console.log(parsedData)

  return parsedData
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
