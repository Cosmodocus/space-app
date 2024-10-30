import os
from dotenv import load_dotenv
import requests
from django.http import JsonResponse

load_dotenv()


def fetch_nasa_data(request):
    query = request.GET.get('query', '')
    nasa_api_endpoint = os.getenv('NASA_API_ENDPOINT')

    response = requests.get(f"{nasa_api_endpoint}?q={query}")

    if not response.ok:
        return JsonResponse({'error': 'Failed to fetch data from NASA API'}, status=response.status_code)

    data = response.json()
    return JsonResponse(data['collection']['items'], safe=False)