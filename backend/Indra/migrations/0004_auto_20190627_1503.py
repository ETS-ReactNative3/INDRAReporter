# Generated by Django 2.2.2 on 2019-06-27 15:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Indra', '0003_auto_20190626_1854'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reports',
            name='timestamp',
            field=models.TextField(),
        ),
    ]