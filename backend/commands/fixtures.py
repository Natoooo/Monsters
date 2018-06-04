from flask_script import Command
from monsters import db, app
from monsters.models import *
from dateutil.parser import parse

data = [
    User(
        name='Natooshka',
        email='natooshka@gmail.com',
        password='zizizizi',
        joined_at=parse('2018-06-05'),
        race="witch/wizard",
        posts=[
        Post(
            title='A good Luck Ritual',
            content="Let's try this luck ritual : kiss a dog 3 times on the head and repeat the word luck 3 times",
            image="https://media.glamour.com/photos/56967e7193ef4b0952112c49/master/w_1280,c_limit/sex-love-life-blogs-smitten-1231_new%2520yrs%2520day.jpg",
            posted_at=parse('2018-06-06')
        )
    ])
]

class FixturesCommand(Command):
    def run(self):
        with app.app_context():

            for user in data:
                db.session.add(user)

            db.session.commit()
