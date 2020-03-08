# Channels 2 & WebSocket
---
https://img.shields.io/github/v/tag/ionescu77/my-channels-play-pub?color=green
https://img.shields.io/badge/Python-3.7-blue
https://img.shields.io/badge/Channels-2.4-blue
https://img.shields.io/badge/Django-2.2.11-blue
---

Using Django Channels 2 & pure Javascript HTML5 Websocket Playground base


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
- terminal output:
![runserver terminal output](https://github.com/ionescu77/my-channels-play-pub/images/Screenshot 2020-03-08 at 16.14.37.png)

- open http://127.0.0.1:8000 in web-browser
- this will open a socket connection to the backend
- you can send more messages from console:
```js
document.ws.send("Send via socket!")
```
- use developer tools (console) to see the socket messages
![runserver terminal output](https://github.com/ionescu77/my-channels-play-pub/images/Screenshot 2020-03-08 at 15.58.39.png)

- read more about debugging sockets: <https://mtyiu.github.io/csci4140-spring15/tutorials/9/ws-debug/>



---
## Notes
Based on the [youtube video of Arun](https://youtu.be/G_EM5WM_08Q), however had to handle the soccket with the default WebSocket implementation in HTML5 as `websocketbridge.js` was not included anymore in channels >2.4.
Also used the first 35 mins of [CodingForEntrepreneurs youtube video on Channels 2](https://youtu.be/RVH05S1qab8)
