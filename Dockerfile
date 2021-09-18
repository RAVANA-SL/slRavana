FROM SL_RAVANA_TEAM/slRavana:latest

RUN git clone https://github.com/RAVANA-SL/slRavana /root/slRavana
WORKDIR /root/slRavana/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
