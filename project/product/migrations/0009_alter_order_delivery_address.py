# Generated by Django 4.2.5 on 2024-05-21 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0008_remove_order_order_state_order_delievered_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='delivery_address',
            field=models.CharField(max_length=2000),
        ),
    ]