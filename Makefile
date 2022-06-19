export UID := $(shell id -u)

build:
	docker-compose build app

run-dev:
	docker-compose up app

shell:
	docker-compose exec app bash