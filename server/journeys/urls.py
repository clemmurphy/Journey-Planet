from django.urls import path
from .views import AllJourneysView, JourneyByOwnerView, SingleJourneyView

urlpatterns = [
    path('', AllJourneysView.as_view()),
    path('owner/', JourneyByOwnerView.as_view()),
    path('<int:pk>/', SingleJourneyView.as_view())
]
