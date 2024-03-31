import requests
import pprint
apiKey="73636e21684e64f828ece0848249f09f"
baseURL = "https://api.the-odds-api.com/v4"


def get_props(event_id):

    response = requests.get(
        f"{baseURL}/sports/basketball_nba/events/{event_id}/odds?apiKey={apiKey}&regions=us&oddsFormat=american&markets=player_points")

    data = response.json()

    pprint.pprint(data)
    return data


def payout(amount, odds):
    if odds < 0:
        factor = 100 / abs(odds)
    else:
        factor = abs(odds) / 100

    return round(amount + (amount * factor), 2)


print(payout(50, -170))
