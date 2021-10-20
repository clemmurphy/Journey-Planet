from django.urls import path
from .views import AllJourneysView, SingleJourneyView

urlpatterns = [
    path('', AllJourneysView.as_view()),
    path('<int:pk>/', SingleJourneyView.as_view())
]
