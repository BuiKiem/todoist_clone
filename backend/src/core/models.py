import datetime

from django.db import models


def get_tomorrow_date():
    return datetime.datetime.now() + datetime.timedelta(days=1)


class Project(models.Model):
    class Color(models.TextChoices):
        RED = "#f44336", "red"
        PINK = "#e91e63", "pink"
        PURPLE = "#9c27b0", "purple"
        DEEP_PURPLE = "#673ab7", "deep purple"
        INDIGO = "#3f51b5", "indigo"
        BLUE = "#2196f3", "blue"

    class Status(models.TextChoices):
        OPENED = "opened", "opened"
        ARCHIVED = "archived", "archived"

    name = models.CharField(max_length=255, blank=False, null=False, default="")
    color = models.CharField(
        max_length=10, blank=False, null=False, choices=Color.choices, default=Color.RED
    )
    status = models.CharField(
        max_length=10,
        blank=False,
        null=False,
        choices=Status.choices,
        default=Status.OPENED,
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name


class Task(models.Model):
    class Status(models.TextChoices):
        ON_GOING = "ongoing", "Ongoing"
        OVERDUE = "overdue", "Overdue"
        COMPLETED = "completed", "Completed"

    name = models.CharField(max_length=255, blank=False, null=False, default="")
    due_time = models.DateTimeField(blank=False, null=False, default=get_tomorrow_date)
    status = models.CharField(
        max_length=10,
        blank=False,
        null=False,
        choices=Status.choices,
        default=Status.ON_GOING,
    )
    created_at = models.DateTimeField(auto_now_add=True)

    project = models.ForeignKey(
        "Project", on_delete=models.CASCADE, related_name="tasks", null=True
    )

    def __str__(self) -> str:
        return f"{self.name} | {self.project.name}"
