yarn
yarn build:lib
yarn build:${DEPLOYMENT_WEB} --mode ${DEPLOYMENT_ENV}
aws s3 sync packages/${DEPLOYMENT_WEB}/dist ${DEPLOYMENT_BUCKET}/${DEPLOYMENT_WEB}/${DEPLOYMENT_ENV}/
aws cloudfront create-invalidation --distribution-id ${DEPLOYMENT_DISTRIBUTION} --paths "/index.html"
