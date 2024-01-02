from django.db import models

# Create your models here.

class Members(models.Model):
    member_id = models.IntegerField(primary_key=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    linkedin = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    gpa_year = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    # Add other fields as needed

    def __str__(self):
        return self.name

class Projects(models.Model):
    project_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    start_year = models.IntegerField()
    # Add other fields as needed

    def __str__(self):
        return self.name