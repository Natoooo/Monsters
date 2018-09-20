from flask_script import Command
from monsters import db, app
from monsters.models import *
from dateutil.parser import parse

data = [
    User(
        name='Natooshka',
        email='natooshka@gmail.com',
        password='zizizizi',
        image="http://www.ambiance-sticker.com/images/Image/sticker-portrait-sorciere-ambiance-sticker-KC3988.png",
        joined_at=parse('2018-06-05'),
        race="WITCH_WIZARD",
        posts=[
        Post(
            title='A good Luck Ritual',
            content="You just have to boil an entire four-leaf clover with hot water and drink it on St Patrick's Day",
            image="https://www.laurakent.fr/magazine/wp-content/uploads/2017/01/Ein-vierbl%C3%A4ttriges-Kleeblatt-ist-schwer-zu-finden-bringt-aber-Gl%C3%BCck..jpg",
            posted_at=parse('2018-06-06')
        )
    ]),

    User(
        name='Adelita',
        email='adelita@gmail.com',
        password='proutprout',
        image="https://image.freepik.com/vecteurs-libre/dessin-anime-mignon-fille-portant-le-costume-de-sorciere_43633-502.jpg",
        joined_at=parse('2018-09-01'),
        race="WITCH_WIZARD",
        posts=[
        Post(
            title='A Love Ritual',
            content="Let's try this love ritual : smashed 3 marguerite and strawberries together and repeat the word love 3 times",
            image="https://i.ytimg.com/vi/TIdRsXofybM/maxresdefault.jpg",
            posted_at=parse('2018-09-09')
        )
    ]),

    User(
        name='Berengero',
        email='berengero@gmail.com',
        password='pipipipi',
        image="https://img00.deviantart.net/334c/i/2017/180/e/6/demon_portrait__by_forgetray-dbegkfu.jpg",
        joined_at=parse('2018-09-05'),
        race="DEMON",
        posts=[
        Post(
            title='How to take possession of a human ?',
            content="Need a lot of power but it's not that hard. You just have to scare him during 3 nights to make him weak. But don't be silly, when I mean scared it's really scared !! Then, when He has no energy left, enter in his mind",
            image="https://www.affairesdegars.com/webroot/usr_img/2014_avril/asem5/Possession.jpg",
            posted_at=parse('2018-09-06')
        )
    ]),

    User(
        name='Arnotto',
        email='arnotto@gmail.com',
        password='cacacaca',
        image="http://fc01.deviantart.net/fs71/f/2012/020/a/5/bg2_npc_bodhi_w_blood_by_enkida-d4mh9d8.jpg",
        joined_at=parse('2018-08-07'),
        race='VAMPIRE',
        posts=[
        Post(
            title='The better blood',
            content="If you want to taste the better blood of the world, you just have to suck a 24 years old human female, born in August, 21st",
            image="https://fr.cdn.v5.futura-sciences.com/buildsv6/images/wide1920/7/4/7/74795ed1ee_88046_vampire-sang.jpg",
            posted_at=parse('2018-08-08')
        )
    ]),

    User(
        name='Eddinou',
        email='eddinou@gmail.com',
        password='mario',
        image="http://www.jeuxactu.com/datas/jeux/w/e/werewolves-within/vn/werewolves-within-56e92c95daf69.jpg",
        joined_at=parse('2018-09-17'),
        race="WEREWOLF",
        posts=[
        Post(
            title='Me as a wolf with the moon',
            content="What do ya think ?",
            image="https://defigrandesecoles.lexpress.fr/bordeaux-2017/wp-content/blogs.dir/45/files/2018/02/MagicCorporation.jpg",
            posted_at=parse('2018-09-18')
        )
    ]),

    User(
        name='Rachou',
        email='rachou@gmail.com',
        password='fleurfleur',
        image="http://www.fondsecran.eu/a/get_photo/365819/2560/1600",
        joined_at=parse('2018-08-10'),
        race="ANGEL",
        posts=[
        Post(
            title='How to meditate to calm your anger?',
            content="Find a place very quiet, take a strong and deep breathe. Then you have to concentrate yourself only on positive thoughts. So easy !",
            image="https://sain-et-naturel.com/wp-content/uploads/2017/07/ange-gardien.jpg",
            posted_at=parse('2018-09-02')
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
