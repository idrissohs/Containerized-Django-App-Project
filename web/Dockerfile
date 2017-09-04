FROM alpine

# Initialize
RUN mkdir -p /data/web
WORKDIR /data/web
COPY requirements.txt /data/web/
COPY .ssh/ /root/
# Setup
RUN apk update
RUN apk upgrade
RUN apk add --update python python-dev postgresql-client postgresql-dev py-pip  build-base gettext openssh
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Clean
RUN apk del -r python-dev postgresql

# Prepare
COPY . /data/web/
RUN mkdir -p walle/static/admin

