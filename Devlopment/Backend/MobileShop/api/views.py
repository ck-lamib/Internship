from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import ItemSerilizer
from .models import Items

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
        {
            'Endpoint': '/items/id/delete',
            'method': 'DELETE',
            'body': None,
            'description':'delete an items'
        },
    ]
    return Response(routes)

@api_view(['GET'])
def getItems(response):
    items = Items.objects.all()
    serializer = ItemSerilizer(items, many= True)
    return Response(serializer.data)
    

@api_view(['GET'])
def getItem(response, pk):
    item = Items.objects.get(id = pk)
    serializer = ItemSerilizer(item, many= False)
    return Response(serializer.data)

@api_view(['POST'])
def createItem(response):
    data = response.data
    item = Items.objects.create(
        body = data['body']
    )
    serializer = ItemSerilizer(item, many= False)
    return Response(serializer.data)
    
@api_view(['PUT'])
def updateItem(response, pk):
    data = response.data
    item = Items.objects.get(id = pk)

    serializer = ItemSerilizer(item, data= data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
    
@api_view(['DELETE'])
def deleteItem(response, pk):
    item = Items.objects.get(id = pk)
    item.delete()
    return Response("Item was deleted")
    

