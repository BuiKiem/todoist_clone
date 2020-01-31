from rest_framework import routers

from . import views

router = routers.SimpleRouter()
router.register("projects", views.ProjectViewSet)
router.register("tasks", views.TaskViewSet)

urlpatterns = router.urls
