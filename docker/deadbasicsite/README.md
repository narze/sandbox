Docker / Dead basic site
========================

Trying basic nginx container.
[src](https://docs.docker.com/engine/installation/mac/)

1. Create default docker VM `docker-machine create`
2. Connect shell to docker machine `eval "$(docker-machine env default)"`
3. Run nginx container `docker run -d -P -v $PWD:/usr/share/nginx/html --name
   deadbasicsite nginx`
   `-d` is detach mode (background), `-P` exposes randomized ports
   `-v` mounts volume
4. See if it works `docker ps`
5. See exposed ports from nginx `docker port deadbasicsite`
6. See VM's ip address `docker-machine ip default`
7. Open ip with port on the browser

