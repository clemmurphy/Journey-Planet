from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, PermissionDenied
from .serializers.common import UserSerializer
from datetime import datetime, timedelta
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt

User = get_user_model()

# ALL USERS
class AllUsersView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    # GET all users
    def get(self, _request):
        users = User.objects.all()
        serialized_users = UserSerializer(users, many=True)
        return Response({ 'message': '👋 Registration successful!' }, status=status.HTTP_200_OK)

# SINGLE USER
class SingleUserView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    # Database search function with exception
    def get_user(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise NotFound(detail="❔ User not found")

    # GET single user
    def get(self, _request, pk):
        user_to_get = self.get_user(pk=pk)
        serialized_user = UserSerializer(user_to_get)
        return Response(serialized_user.data, status=status.HTTP_200_OK)

    # PUT update user
    def put(self, request, pk):
        user_to_update = self.get_user(pk=pk)
        updated_user = UserSerializer(user_to_update, data=request.data)
        if updated_user.is_valid():
            updated_user.save()
            return Response(updated_user.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_user.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    # DELETE delete user
    def delete(self, _request, pk):
        user_to_delete = self.get_user(pk=pk)
        user_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# REGISTER
class RegisterView(APIView):
    # POST new user
    def post(self, request):
        user_to_create = UserSerializer(data=request.data)
        if user_to_create.is_valid():
            user_to_create.save()
            return Response(user_to_create.data, status=status.HTTP_201_CREATED)
        return Response(user_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

# LOGIN
class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        # Find user from db by email, raise error if not found
        try:
            user_to_login = User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied(detail="🤷‍♂️ User not found!")

        # Check password, raise error if not a match
        if not user_to_login.check_password(password):
            raise PermissionDenied(detail="🚫 Invalid credentials")

        # Set a token expiry time in a week
        expiry = datetime.now() + timedelta(days=7)

        # Encode login token
        token = jwt.encode(
            {
                'sub': user_to_login.id,
                'exp': int(expiry.timestamp())
            },
            settings.SECRET_KEY,
            algorithm='HS256'
        )

        # Return token
        return Response({ 'token': token, 'message': "👋 Welcome back!" })