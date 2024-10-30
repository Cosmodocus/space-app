import requests
from django.http import JsonResponse

def fetch_nasa_data(request):
    query = request.GET.get('query', '')
    response = requests.get(f"https://images-api.nasa.gov/search?q={query}")

    if not response.ok:
        return JsonResponse({'error': 'Failed to fetch data from NASA API'}, status=response.status_code)

    data = response.json()
    return JsonResponse(data['collection']['items'], safe=False)