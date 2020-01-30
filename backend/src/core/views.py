from rest_framework import viewsets

from . import serializers
from . import models


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):

    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectRetrieveSerializer
