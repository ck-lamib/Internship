from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def getRoutes(response):
    routes = [
        {
            'Endpoint': '/items',
            'method': 'GET',
            'body': None,
            'description':'Returns array of items'
        },
        {
            'Endpoint': '/items/id',
            'method': 'GET',
            'body': None,
            'description':'Returns a items'
        },
        {
            'Endpoint': '/items/create',
            'method': 'POST',
            'body': {'body': ""},
            'description':'create an items'
        },
        {
            'Endpoint': '/items/id/update',
            'method': 'PUT',
            'body': {'body': ""},
            'description':'update an items'
        },
    ]
    return Response(routes)
