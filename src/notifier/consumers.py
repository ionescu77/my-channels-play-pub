import asyncio
import json
from channels.consumer import AsyncConsumer

class EchoConsumer(AsyncConsumer):
    async def websocket_connect(self, event):
        print ("connect incomming", event)
        await self.send({
            "type": "websocket.accept"
        })
        await self.send({
            "type":"websocket.send",
            "text": "Got your connection"
        })
        await asyncio.sleep(5)

    async def websocket_receive(self, event):
        print ("receive", event)
        front_text = event.get('text', None)
        print ("text: ", front_text)
            # Echo the received payload
        await self.send({
            "type":"websocket.send",
            "text": "SERVER: " + front_text
        })

    async def websocket_disconnect(self, event):
        print ("disconnected", event)
        await self.send({
            "type": "websocket.close"
        })
