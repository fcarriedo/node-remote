== Remote Control based on Node.js and Socket.IO

This is a very initial POC.

==== Server

To run the server:

    cd server
    node remote-control-server.js

==== Client

To test the client, put all the files under the client directory under
apache (or your favorite web server) and then point
your browser (mobile or other computer) to the root of the folder.

Since this is a very early proof of concept, you'll need to edit the
client pages to point to the ip address where node server is running.
