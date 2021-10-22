from rest_framework import serializers
from django.contrib.auth import get_user_model, password_validation
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    # When user is serialized, add password and confirmation fields
    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    # Validate the password and confirmation on serialization
    def validate(self, data):
        # Get data from data object
        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        # If password does not match confirmation, raise error
        if password != password_confirmation:
            raise ValidationError({ 'password_confirmation': 'Does not match password field!' })

        # Try to validate password, if not valid raise error
        try:
            password_validation.validate_password(password=password)
        except ValidationError as err:
            raise ValidationError({ 'password': err })

        # Append validated password to the data and return
        data['password'] = make_password(password)

        return data

    class Meta:
        model = User
        fields = '__all__'