default: build push promote

build:
	ember build --environment=production
push:
	git push
	divshot push
promote:
	divshot promote development production