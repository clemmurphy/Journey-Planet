from .common import JourneySerializer
from jwt_auth.serializers.common import UserSerializer

class PopulatedJourneySerializer(JourneySerializer):
    owner = UserSerializer()