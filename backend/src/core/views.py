from rest_framework import viewsets, status
from rest_framework.request import Request
from rest_framework.response import Response

from . import models
from . import serializers


class ProjectViewSet(viewsets.ModelViewSet):

    queryset = models.Project.objects.all()
    serializer_classes = {
        "list": serializers.ProjectRetrieveSerializer,
        "create": serializers.ProjectCreateSerializer,
        "retrieve": serializers.ProjectRetrieveSerializer,
        "update": serializers.ProjectUpdateSerializer,
        "partial_update": serializers.ProjectUpdateSerializer,
        # TODO: Remove later
        "metadata": serializers.ProjectRetrieveSerializer
    }

    def create(self, request: Request, *args, **kwargs) -> Response:
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        instance = self.perform_create(serializer)
        response_serializer = self.serializer_classes.get("retrieve")(instance=instance)
        headers = self.get_success_headers(serializer.data)
        return Response(
            response_serializer.data, status=status.HTTP_201_CREATED, headers=headers
        )

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop("partial", False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        response_instance = self.perform_update(serializer)
        response_serializer = self.serializer_classes.get("retrieve")(response_instance)

        if getattr(instance, "_prefetched_objects_cache", None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(response_serializer.data)

    def perform_create(self, serializer):
        return serializer.save()

    def perform_update(self, serializer):
        return serializer.save()

    def get_serializer_class(self):
        return self.serializer_classes[self.action]


