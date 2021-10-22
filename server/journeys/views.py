from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Journey
from .serializers.common import JourneySerializer
from .serializers.populated import PopulatedJourneySerializer

# ALL JOURNEYS
class AllJourneysView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    # GET all journeys
    def get(self, _request):
        journeys = Journey.objects.all()
        serialized_journeys = PopulatedJourneySerializer(journeys, many=True)
        return Response(serialized_journeys.data, status=status.HTTP_200_OK)

    # POST a new journey
    def post(self, request):
        request.data['owner'] = request.user.id
        journey_to_post = JourneySerializer(data=request.data)
        if journey_to_post.is_valid():
            journey_to_post.save()
            return Response(journey_to_post.data, status=status.HTTP_201_CREATED)
        return Response(journey_to_post.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

# SINGLE JOURNEY
class SingleJourneyView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    
    # Database search function with exception
    def get_journey(self, pk):
        try:
            return Journey.objects.get(pk=pk)
        except Journey.DoesNotExist:
            raise NotFound(detail="🤷‍♂️ No journey found!")

    # GET single journey
    def get(self, _request, pk):
        journey_to_get = self.get_journey(pk=pk)
        serialized_journey = PopulatedJourneySerializer(journey_to_get)
        return Response(serialized_journey.data, status=status.HTTP_200_OK)

    # PUT update journey
    def put(self, request, pk):
        journey_to_update = self.get_journey(pk=pk)
        if journey_to_update.data['owner'] != request.user.id:
            return Response(journey_to_update.errors, status=status.HTTP_401_UNAUTHORIZED)
        updated_journey = PopulatedJourneySerializer(journey_to_update, data=request.data)
        if updated_journey.is_valid():
            updated_journey.save()
            return Response(updated_journey.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_journey.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # DELETE single journey
    def delete(self, request, pk):
        journey = self.get_journey(pk=pk)
        if journey.data['owner'] != request.user.id:
            return Response(journey.errors, status=status.HTTP_401_UNAUTHORIZED)
        journey.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)