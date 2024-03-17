FROM mcr.microsoft.com/playwright:v1.42.1-jammy
COPY . /app
WORKDIR /app
RUN apt-get update && \
    apt-get -y install locales fonts-ipafont fonts-ipaexfont && \
    echo "ja_JP UTF-8" > /etc/locale.gen && locale-gen
CMD ["/bin/bash"]