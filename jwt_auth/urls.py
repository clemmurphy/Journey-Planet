from django.urls import path
from .views import AllUsersView, LoginView, RegisterView, SingleUserView

urlpatterns = [
    path('', AllUsersView.as_view()),
    path('<int:pk>/', SingleUserView.as_view()),
    path('login/', LoginView.as_view()),
    path('register/', RegisterView.as_view())
]
