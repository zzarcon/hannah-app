default: push

build:
	ember build --environment=production

push:
	git push
	git push heroku master

promote:
	divshot promote development production

set_origin:
	heroku git:remote -a hannah-app