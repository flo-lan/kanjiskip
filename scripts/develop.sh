SERVICE=kanjiskip.node
COMPOSE=docker-compose.yml

# build
docker-compose -f ${COMPOSE} build ${SERVICE}

docker-compose -f ${COMPOSE} up -d ${SERVICE_DB}
docker-compose -f ${COMPOSE} run --rm ${SERVICE} yarn install


docker-compose -f ${COMPOSE} run --rm ${SERVICE} yarn typeorm migration:run

# start
docker-compose -f ${COMPOSE} up