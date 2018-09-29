from flask_script import Command
from monsters import db, app
from monsters.models import *
from dateutil.parser import parse

users = [
    User(
        name='Natooshka',
        email='natooshka@gmail.com',
        age=108,
        password='zizizizi',
        image="http://www.ambiance-sticker.com/images/Image/sticker-portrait-sorciere-ambiance-sticker-KC3988.png",
        joined_at=parse('2018-06-05'),
        race="WITCH_WIZARD"
    ),

    User(
        name='Adelita',
        email='adelita@gmail.com',
        age=90,
        password='proutprout',
        image="https://image.freepik.com/vecteurs-libre/dessin-anime-mignon-fille-portant-le-costume-de-sorciere_43633-502.jpg",
        joined_at=parse('2018-09-01'),
        race="WITCH_WIZARD"
    ),

    User(
        name='Berengero',
        email='berengero@gmail.com',
        age=509,
        password='pipipipi',
        image="https://img00.deviantart.net/334c/i/2017/180/e/6/demon_portrait__by_forgetray-dbegkfu.jpg",
        joined_at=parse('2018-09-05'),
        race="DEMON"
    ),

    User(
        name='Arnotto',
        email='arnotto@gmail.com',
        age=810,
        password='cacacaca',
        image="http://fc01.deviantart.net/fs71/f/2012/020/a/5/bg2_npc_bodhi_w_blood_by_enkida-d4mh9d8.jpg",
        joined_at=parse('2018-08-07'),
        race='VAMPIRE'
    ),

    User(
        name='Eddinou',
        email='eddinou@gmail.com',
        age=69,
        password='mario',
        image="http://www.jeuxactu.com/datas/jeux/w/e/werewolves-within/vn/werewolves-within-56e92c95daf69.jpg",
        joined_at=parse('2018-09-17'),
        race="WEREWOLF"
    ),

    User(
        name='Rachou',
        email='rachou@gmail.com',
        age=276,
        password='fleurfleur',
        image="http://www.wassupmate.com/wp-content/uploads/2016/07/dark-angel-halloween-makeup.jpg",
        joined_at=parse('2018-08-10'),
        race="ANGEL"
    ),

    User(
        name='Armanda',
        email='armanda@gmail.com',
        age=299,
        password='petitlutin',
        image="https://www.direct2artist.com/system/artworks/preview_images/000/002/147/medium/Catrina_.jpg?1426844712",
        joined_at=parse('2018-09-12'),
        race="WITCH_WIZARD"
    ),

    User(
        name='Timi',
        email='timi@gmail.com',
        age=919,
        password='petitcheval',
        image="https://img00.deviantart.net/b011/i/2012/360/3/5/wise_old_wizard_by_xxtokenxx-d5pah0w.jpg",
        joined_at=parse('2018-09-13'),
        race="WITCH_WIZARD"
    ),

    User(
        name='Larry',
        email='larry@gmail.com',
        age=58,
        password='petitefleur',
        image="https://13daysofhalloween.files.wordpress.com/2015/08/devil.jpg",
        joined_at=parse('2018-09-14'),
        race="DEMON"
    ),

    User(
        name='Marge',
        email='marge@gmail.com',
        age=158,
        password='petitcoeur',
        image="https://vignette.wikia.nocookie.net/darkskies/images/0/01/Vampire_diana_blood_by_darkest_b4_dawn-d6dfhrv.jpg/revision/latest?cb=20140320044031",
        joined_at=parse('2018-09-15'),
        race="VAMPIRE"
    ),

    User(
        name='Crikette',
        email='crikette@gmail.com',
        age=35,
        password='petitlard',
        image="https://i.pinimg.com/originals/5a/33/e2/5a33e2cde3b1515672378583b8eb5a77.png",
        joined_at=parse('2018-09-16'),
        race="WEREWOLF"
    ),

    User(
        name='Benoist',
        email='benoist@gmail.com',
        age=700,
        password='petitcroc',
        image="http://galeriegothik.g.a.pic.centerblog.net/f0a919d0.jpg",
        joined_at=parse('2018-09-17'),
        race="VAMPIRE"
    ),

    User(
        name='Georges',
        email='georges@gmail.com',
        age=30,
        password='petitprout',
        image="https://vignette.wikia.nocookie.net/teenwolf/images/e/e7/News5189_1.jpg/revision/latest?cb=20120711003217&path-prefix=fr",
        joined_at=parse('2018-09-18'),
        race="WEREWOLF"
    ),

    User(
        name='Kyle',
        email='kyle@gmail.com',
        age=309,
        password='petitcaca',
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5ITz-2cE1J5SRqEx6Udyg-BCrekmgTS2zFPrEByidZMx4ZUp",
        joined_at=parse('2018-09-19'),
        race="VAMPIRE"
    ),

    User(
        name='Kim',
        email='kim@gmail.com',
        age=509,
        password='petitzizi',
        image="https://staticdelivery.nexusmods.com/images/110/6537199-1385130326.jpg",
        joined_at=parse('2018-09-20'),
        race="WITCH_WIZARD"
    )
]

posts = [
    Post(
        user_id=1,
        title='A good Luck Ritual',
        content="You just have to boil an entire four-leaf clover with hot water and drink it on St Patrick's Day",
        image="https://www.laurakent.fr/magazine/wp-content/uploads/2017/01/Ein-vierbl%C3%A4ttriges-Kleeblatt-ist-schwer-zu-finden-bringt-aber-Gl%C3%BCck..jpg",
        posted_at=parse('2018-06-06')
    ),

    Post(
        user_id=2,
        title='A Love Ritual',
        content="Let's try this love ritual : smashed 3 marguerite and strawberries together and repeat the word love 3 times",
        image="https://i.ytimg.com/vi/TIdRsXofybM/maxresdefault.jpg",
        posted_at=parse('2018-09-09')
    ),

    Post(
        user_id=3,
        title='How to take possession of a human ?',
        content="Need a lot of power but it's not that hard. You just have to scare him during 3 nights to make him weak. But don't be silly, when I mean scared it's really scared !! Then, when He has no energy left, enter in his mind",
        image="https://www.affairesdegars.com/webroot/usr_img/2014_avril/asem5/Possession.jpg",
        posted_at=parse('2018-09-06')
    ),

    Post(
        user_id=4,
        title='The better blood',
        content="If you want to taste the better blood of the world, you just have to suck a 24 years old human female, born in August, 21st",
        image="https://fr.cdn.v5.futura-sciences.com/buildsv6/images/wide1920/7/4/7/74795ed1ee_88046_vampire-sang.jpg",
        posted_at=parse('2018-08-08')
    ),

    Post(
        user_id=5,
        title='Me as a wolf with the moon',
        content="What do ya think ?",
        image="https://defigrandesecoles.lexpress.fr/bordeaux-2017/wp-content/blogs.dir/45/files/2018/02/MagicCorporation.jpg",
        posted_at=parse('2018-09-18')
    ),

    Post(
        user_id=6,
        title='How to meditate to calm your anger?',
        content="Find a place very quiet, take a strong and deep breathe. Then you have to concentrate yourself only on positive thoughts. So easy !",
        image="https://sain-et-naturel.com/wp-content/uploads/2017/07/ange-gardien.jpg",
        posted_at=parse('2018-09-02')
    )
]

likes = [
    Like(
        user_id=1,
        post_id=4,
        posted_at=parse('2018-08-10')
    ),

    Like(
        user_id=3,
        post_id=4,
        posted_at=parse('2018-08-10')
    ),

    Like(
        user_id=3,
        post_id=2,
        posted_at=parse('2018-09-10')
    ),

    Like(
        user_id=4,
        post_id=3,
        posted_at=parse('2018-09-06')
    ),

    Like(
        user_id=11,
        post_id=5,
        posted_at=parse('2018-09-18')
    )
]

comments = [
    Comment(
        user_id=1,
        post_id=4,
        content='I know someone who was born that exact day if you like !',
        posted_at=parse('2018-08-10')
    ),

    Comment(
        user_id=3,
        post_id=2,
        content='Don t need a love filter with me sweetie !!!',
        posted_at=parse('2018-09-10')
    ),

    Comment(
        user_id=4,
        post_id=3,
        content='Hey man, I like your style',
        posted_at=parse('2018-09-06')
    ),

    Comment(
        user_id=11,
        post_id=5,
        content='really like your werewolf like, come see my profile',
        posted_at=parse('2018-09-18')
    )
]
#authToken = "beefc01c-eb4b-43eb-b320-7e4f4393d5bb"
authToken = "5d7cb6bf-58ea-440b-9509-b359869c9b95"

class FixturesCommand(Command):
    def run(self):
        with app.app_context():
            for instances in [users, posts, likes, comments]:
                for item in instances:
                    db.session.add(item)

                db.session.commit()

            db.session.add(AuthToken(user=users[0], token=authToken))
            db.session.commit()
