# ShServer
A little web server, where paths and exec-commands can be configured with env variables

## Usage
This server written to be used as a docker container.
The image can be found [here](https://hub.docker.com/r/freiit/shserver/).

You can set the paths the server responds to in environment variables that start with `SHSERVER_`. The rest of the variable is used as root path. Server handles only GET-requests.
The content of the env variables is executed with [nodejs child_process.exec](https://nodejs.org/dist/latest-v4.x/docs/api/child_process.html#child_process_child_process_exec_command_options_callback)

Example:

    docker run -d -p 3000:3000 -e SHSERVER_ls='ls -lh /somefile' -e SHSERVER_uptime='w' freiit/shserver
  
The output is a JSON-string with the elements `stdout`, `stderr` and `error`, if the execution call itself failed.

Example:

    curl http://localhost:3000/uptime

Result:

    {"error":null,
     "stdout":" 20:00:37 up 21 days,  5:28,  0 users,  load average: 0.00, 0.01, 0.05\nUSER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT\n",
     "stderr":""}
