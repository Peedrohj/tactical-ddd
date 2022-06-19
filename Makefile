export UID := $(shell id -u)


run-dev:
	docker-compose up app

shell:
	docker-compose exec app bash