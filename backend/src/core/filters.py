from datetime import timedelta

from django_filters import rest_framework
from django.utils.timezone import now

from . import models


class CustomDateRangeFilter(rest_framework.DateRangeFilter):
    """
    Custom date range filter with 2 options:
     - today
     - week: Next 7 days (including today)
    """

    choices = [
        ("today", "Today"),
        ("week", "Next 7 days"),
    ]

    filters = {
        "today": lambda qs, name: qs.filter(
            **{
                "%s__year" % name: now().year,
                "%s__month" % name: now().month,
                "%s__day" % name: now().day,
            }
        ),
        "week": lambda qs, name: qs.filter(
            **{
                "%s__gte" % name: now().date(),
                "%s__lt" % name: now().date() + timedelta(days=7),
            }
        ),
    }


class TaskFilter(rest_framework.FilterSet):
    due_day = CustomDateRangeFilter(field_name="due_time")

    class Meta:
        model = models.Task
        fields = ("project", "due_day")
