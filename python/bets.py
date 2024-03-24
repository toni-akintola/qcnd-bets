import requests
import pprint
apiKey="73636e21684e64f828ece0848249f09f"
baseURL = "https://api.the-odds-api.com/v4"

response = requests.get(f"{baseURL}/sports/?apiKey={apiKey}")

data = response.json()

sports = [sport["key"] for sport in data]

response = requests.get(
    f"{baseURL}/sports/basketball_nba/events/0bef0c17516e00a260d74771bf62df44/odds/?apiKey={apiKey}&regions=us&oddsFormat=american&markets=player_points")

data = response.json()

pprint.pprint(data)
