default: push

build:
	ember build --environment=production
push:
	git push
	git push heroku master
promote:
	divshot promote development production