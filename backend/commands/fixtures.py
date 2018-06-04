from flask_script import Command
from pytodo import db, app
from pytodo.models import *
from dateutil.parser import parse

data = [
    User(name='Natooshka', email='natooshka@gmail.com'password='zizizizi', joined_at=parse('2018-06-05')), race="witch/wizard"lists=[
        List(name='Natoo Cooking', items=[
            Item(content='Banana Cake', status='DONE', created_at=parse('2018-05-24'))
        ]),
        List(name="Caca", items=[
            Item(content='magazine', status='NOTDONE', created_at=parse('2018-05-25')),
            Item(content='paper', status='NOTDONE', created_at=parse('2018-05-26'))

]

class FixturesCommand(Command):
    def run(self):
        with app.app_context():

            for user in data:
                db.session.add(user)

            db.session.commit()
