# Generated by Django 4.2.5 on 2024-05-21 13:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('product', '0007_order'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='order_state',
        ),
        migrations.AddField(
            model_name='order',
            name='delievered',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='order',
            name='delivery_address',
            field=models.CharField(blank=True, max_length=2000, null=True),
        ),
        migrations.AddField(
            model_name='order',
            name='supplier',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='orders_supplied', to=settings.AUTH_USER_MODEL),
        ),
    ]
