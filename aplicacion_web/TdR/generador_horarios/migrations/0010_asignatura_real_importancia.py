# Generated by Django 3.1.5 on 2021-02-23 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('generador_horarios', '0009_remove_asignatura_real_importancia'),
    ]

    operations = [
        migrations.AddField(
            model_name='asignatura_real',
            name='importancia',
            field=models.IntegerField(default=3),
        ),
    ]
