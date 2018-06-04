from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from pytodo import app, db
from pytodo.models import *
#from pytodo.api import *
from commands import FixturesCommand
from datetime import datetime

migrate = Migrate(app, db)
manager = Manager(app)
manager.add_command('db', MigrateCommand)
manager.add_command('fixtures', FixturesCommand)

if __name__ == '__main__':
    manager.run()
