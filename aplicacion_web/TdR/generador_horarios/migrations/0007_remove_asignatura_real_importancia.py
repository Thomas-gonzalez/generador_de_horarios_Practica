# Generated by Django 3.1.5 on 2021-02-23 19:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('generador_horarios', '0006_auto_20210223_1641'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='asignatura_real',
            name='importancia',
        ),
    ]