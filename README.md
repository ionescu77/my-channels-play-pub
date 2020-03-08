# Django Channels 2 & pure Javascript HTML5 Websocket Play

- clone repository (this will clone it into `my-channels-play-pub` directory)
```bash
git clone https://github.com/ionescu77/my-channels-play-pub.git
cd my-channels-play-pub
```
- make sure you have python >3.5:
```bash
# I am using python3, because I keep python for Py2
python3 --version
```
- create virtualenvironment
```bash
python3 -m venv .
```
- activate the virtualenvironment
```bash
source bin/activate
# Following should return hopefully python >3.5
python --version
```
- install django, channels, channels-redis
```bash
# Might want to upgrade pip
pip install --upgrade pip
pip install -r requirements.txt
```
- run server
```bash
cd src
python ./manage.py runserver
```

- open http://127.0.0.1:8000 in web-browser

- open developper tools console to see the socket messages
