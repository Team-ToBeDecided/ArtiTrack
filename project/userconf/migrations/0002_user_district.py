# Generated by Django 4.2.5 on 2023-09-23 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userconf', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='district',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]