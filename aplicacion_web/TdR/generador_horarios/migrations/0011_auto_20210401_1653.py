# Generated by Django 3.1.5 on 2021-04-01 19:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('generador_horarios', '0010_asignatura_real_importancia'),
    ]

    operations = [
        migrations.AlterField(
            model_name='nodo_seccion',
            name='ss',
            field=models.IntegerField(default=1),
        ),
    ]