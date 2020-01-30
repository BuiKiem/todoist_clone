from rest_framework import serializers

from . import models


class ProjectRetrieveSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Project
        fields = ("id", "name", "color", "status")


class ProjectCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Project
        fields = ("name", "color")