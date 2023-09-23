from rest_framework import serializers
from .models import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# class UserSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True)

#     class Meta:
#         model = User
#         fields = '__all__'

#     def create(self, validated_data):
#         user = User.objects.create_user(**validated_data)
#         return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        # user = User.objects.create(email=validated_data['email'])
        # user.set_password(validated_data['password'])
        # user.save()
        # return user
        user = User.objects.create(
        email=validated_data['email'],
        first_name=validated_data.get('first_name', ''),
        last_name=validated_data.get('last_name', ''),
        role=validated_data.get('role', ''),
        age=validated_data.get('age', 0),
        gender=validated_data.get('gender', ''),
        phone_number=validated_data.get('phone_number', ''),
        address=validated_data.get('address', ''),
        district=validated_data.get('district', ''),
        craft=validated_data.get('craft', ''),
        description=validated_data.get('description', ''),
        profile_image=validated_data.get('profile_image', None),
        gstin=validated_data.get('gstin', '')
    )
        user.set_password(validated_data['password'])
        user.save()
        return user

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        data['user'] = UserSerializer(self.user).data
        return data