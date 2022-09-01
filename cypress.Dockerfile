FROM cypress/base:14
WORKDIR /cypress

# dependencies will be installed only if the package files change
COPY . /cypress
COPY cypress.config.js ./

# by setting CI environment variable we switch the Cypress install messages
# to small "started / finished" and avoid 1000s of lines of progress messages
# https://github.com/cypress-io/cypress/issues/1243
#install package.json package
RUN npm install
RUN npm uninstall playwright
RUN npm install cypress
# verify that Cypress has been installed correctly.
# running this command separately from "cypress run" will also cache its result
# to avoid verifying again when running the tests
RUN npx cypress verify