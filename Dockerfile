FROM 5pi/ghost
ENV URL "https://5pi.de"

COPY add_5pi_showdown_extension.patch /tmp
COPY fivepi.js node_modules/showdown-ghost/src/extensions/
RUN  patch -p1 < /tmp/add_5pi_showdown_extension.patch
