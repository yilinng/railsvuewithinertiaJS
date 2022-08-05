# Use ruby image to build our own image
FROM ruby:2.7.3

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  apt-get update -qq && \
  apt-get install -y vim nodejs postgresql-client yarn && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN mkdir /app
WORKDIR /app

COPY Gemfile* package.json yarn.lock /app/

RUN gem install bundler -v 2.1.4 && \
  bundle install --jobs 20

COPY . /app
