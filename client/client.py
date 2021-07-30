import sys
import argparse
import requests
import json
from urllib.parse import urlencode, quote_plus

parser = argparse.ArgumentParser()
parser.add_argument('--input', help='input file', required=True)
parser.add_argument('--token', help='authentication token', required=True)
parser.add_argument('--slot',  help='slot of CODE', type=int, required=True)
parser.add_argument('--name',  help='name of CODE', required=True)
args = parser.parse_args()

with open (args.input, "r") as out:
    code = out.read()
    url = 'https://adventure.land/api/save_code'
    headers = {
        'Cookie': 'auth='+args.token
    }
    body = {
        'method': 'save_code',
        'arguments': json.dumps({
            'code': code,
            'slot': args.slot,
            'name': args.name,
            'log': 1
        })
    }
    requests.post(url, data = urlencode(body, quote_via=quote_plus), headers = headers)
