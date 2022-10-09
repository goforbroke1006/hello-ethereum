all:
	bash setup.sh
.PHONY: all

image:
	docker login docker.io
	docker build \
		-f ./.docker/Dockerfile \
		-t docker.io/goforbroke1006/ethereum:latest \
		./.docker/
	docker push docker.io/goforbroke1006/ethereum:latest
.PHONY: image
