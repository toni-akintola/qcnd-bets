import os

from upstash_redis import Redis
from dotenv import load_dotenv

load_dotenv()

url = os.getenv('UPSTASH_REDIS_REST_URL')
pw = os.getenv('UPSTASH_REDIS_PW')

redis = Redis.from_env()

redis.delete("foo")
