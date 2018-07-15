# Automatically update nodejs app on Git push

## Stack

`nodemon` - restart nodejs app on code changes
`webhook` - execute scripts on received webhooks
`relay` - route public webhooks to localhost


1. Start `webhook`

```bash
$ webhook -hooks hooks.json -verbose
[webhook] 2018/07/15 22:38:47 version 2.6.8 starting
[webhook] 2018/07/15 22:38:47 setting up os signal watcher
[webhook] 2018/07/15 22:38:47 attempting to load hooks from hooks.json
[webhook] 2018/07/15 22:38:47 os signal watcher ready
[webhook] 2018/07/15 22:38:47 found 1 hook(s) in file
[webhook] 2018/07/15 22:38:47 	loaded: webhook
[webhook] 2018/07/15 22:38:47 serving hooks on http://0.0.0.0:9000/hooks/{id}

```

2. Start `relay`

```bash
$ relay forward -b exec http://localhost:9000/webhook       
Forwarding: 
https://my.webhookrelay.com/v1/webhooks/cde35b07-4f59-4bc7-8c0d-0846bf1e1800 -> http://localhost:9000/webhook
Starting webhook relay agent... 
1.5316908625848284e+09	info	webhook relay ready...	{"host": "my.webhookrelay.com:8080"}

```

Copy your public (`https://my.webhookrelay.com/v1/webhooks/cde35b07-4f59-4bc7-8c0d-0846bf1e1800`) webhooks endpoint to your github repository's webhook settings.


3. Initialise dependencies and start `nodemon`:

```bash
$ npm install 
$ npm run nodemon
```