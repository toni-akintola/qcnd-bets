import requests
import pprint
import os
import json
from upstash_redis import Redis
from dotenv import load_dotenv

load_dotenv()

url = os.getenv('UPSTASH_REDIS_REST_URL')
pw = os.getenv('UPSTASH_REDIS_PW')

redis = Redis.from_env()


baseURL, apiKey = os.getenv("ODDS_URL"), os.getenv("ODDS_API_KEY")

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


def upload_events():

    response = requests.get(
        f"{baseURL}/sports/basketball_nba/events/?apiKey={apiKey}&regions=us&oddsFormat=american&markets=player_points")

    data = response.json()

    for event in data:
        redis.rpush("events", event)

    pprint.pprint(data)


upload_events()

events = redis.lrange("events", 0, -1)
print(events)
