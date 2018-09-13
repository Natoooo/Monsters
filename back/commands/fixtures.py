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
        race="WITCH_WIZARD",
        posts=[
        Post(
            title='A good Luck Ritual',
            content="Let's try this luck ritual : kiss a dog 3 times on the head and repeat the word luck 3 times",
            image="https://media.glamour.com/photos/56967e7193ef4b0952112c49/master/w_1280,c_limit/sex-love-life-blogs-smitten-1231_new%2520yrs%2520day.jpg",
            posted_at=parse('2018-06-06')
        )
    ]),
    User(
        name='Arnotto',
        email='arnotto@gmail.com',
        password='cacacaca',
        joined_at=parse('2018-06-07'),
        race='VAMPIRE',
        posts=[
        Post(
            title='The better blood',
            content="If you want to taste the better blood of the world, you just have to suck a 24 year old human female, born in August, 21st",
            image="https://fr.cdn.v5.futura-sciences.com/buildsv6/images/wide1920/7/4/7/74795ed1ee_88046_vampire-sang.jpg",
            posted_at=parse('2018-06-08')
        ),
        Post(
            title='The mystery cape',
            content="I really want to buy THIS cape. So, If you know where to find it, please answer to my post",
            image="https://www.struts.co.uk/party-fancy-dress-shop/images/long-red-velvet-cape-3765_01.jpg",
            posted_at=parse('2018-06-09')
        )
    ])
]
#authToken = "beefc01c-eb4b-43eb-b320-7e4f4393d5bb"
authToken = "5d7cb6bf-58ea-440b-9509-b359869c9b95"

class FixturesCommand(Command):
    def run(self):
        with app.app_context():
            for user in data:
                db.session.add(user)

            db.session.add(AuthToken(user=data[0], token=authToken))

            db.session.commit()
