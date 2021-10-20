from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from .models import Journey
from .serializers.common import JourneySerializer

# ALL JOURNEYS
class AllJourneysView(APIView):
    # GET all journeys
    def get(self, _request):
        journeys = Journey.objects.all()
        serialized_journeys = JourneySerializer(journeys, many=True)
        return Response(serialized_journeys.data, status=status.HTTP_200_OK)

    # POST a new journey
    def post(self, request):
        journey_to_post = JourneySerializer(data=request.data)
        if journey_to_post.is_valid():
            journey_to_post.save()
            return Response(journey_to_post.data, status=status.HTTP_201_CREATED)
        return Response(journey_to_post.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

# SINGLE JOURNEY
class SingleJourneyView(APIView):

    # Database search function with exception
    def get_journey(self, pk):
        try:
            return Journey.objects.get(pk=pk)
        except Journey.DoesNotExist:
            raise NotFound(detail="🤷‍♂️ No journey found!")

    # GET single journey
    def get(self, _request, pk):
        journey_to_get = self.get_journey(pk=pk)
        serialized_journey = JourneySerializer(journey_to_get)
        return Response(serialized_journey.data, status=status.HTTP_200_OK)

    # PUT update journey
    def put(self, request, pk):
        journey_to_update = self.get_journey(pk=pk)
        updated_journey = JourneySerializer(journey_to_update, data=request.data)
        if updated_journey.is_valid():
            updated_journey.save()
            return Response(updated_journey.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_journey.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # DELETE single journey
    def delete(self, _request, pk):
        journey = self.get_journey(pk=pk)
        journey.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)