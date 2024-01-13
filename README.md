A fork of ircd.js that fixes crashes on Microsoft Comic Chat 2.5, and I added some non-standard stuff for myself.

```js
const irc = require('./ircd.js');

irc.Server.boot({
	network: 'ircn',
	hostname: '127.0.0.1',
	serverDescription: 'A Node IRC daemon',
	serverName: 'server1',
	motd: 'Message of the day',
	port: 6667,
	whoWasLimit: 10000,
	maxNickLength: 999,
	opers: {
	},
});
```

<span>&nbsp;</span>

<span>&nbsp;</span>

<span>-</span><span>-</span><span>-</span><span>-</span><span>-</span><span>-</span> Original Readme <span>-</span><span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>

<pre>
 ::::::::::..     .,-::::::::::::-.         ....:::::: .::::::. 
 ;;;;;;;``;;;;  ,;;;'````' ;;,   `';,    ;;;;;;;;;````;;;`    ` 
 [[[ [[[,/[[['  [[[        `[[     [[    ''`  `[[.    '[==/[[[[,
 $$$ $$$$$$c    $$$         $$,    $$   ,,,    `$$      '''    $
 888 888b "88bo,`88bo,__,o, 888_,o8P'd8b888boood88     88b    dP
 MMM MMMM   "W"   "YUMMMMMP"MMMMP"`  YMP"MMMMMMMM"      "YMmMY" 

                                            A Node.JS IRC Server
 ircd.js
</pre>

### About

I'm implementing "RFC 1459":https://tools.ietf.org/html/rfc1459 / "RFC 2812":https://tools.ietf.org/html/rfc2812 for "Node.js":http://nodejs.org/.

The server will allow clients to connect, join channels, change topics; basic stuff.

Done:

* PASS (connection password)
* PING/PONG
* PRIVMSG
* MODE
* JOIN
* TOPIC
* NAMES
* LIST
* INVITE
* WHOWAS
* TIME
* VERSION
* AWAY
* WHO
* OPER
* KICK
* WALLOP
* CONNECT
* Connection garbage like MOTD
* Basic data validation
* Simple JSON config file
* Channel modes: o, p, s, t, n, m, i, l, b, v, k
* User modes: i, w, o

Planned:

* Services
* Bring back server links
* Server-to-server NICK messages when nicks are changed or new clients join
* Server-to-server messages for JOIN, NJOIN, MODE, PRIVSG and NOTICE
* SQUIT and QUIT for links
* Server to server communication
* More basic commands: NOTICE, LINKS, TRACE, ADMIN, INFO
* Log files and logging options
* Local ops (+O)
* Stats command

### Documentation

Install with <code>npm install ircdjs</code>.

Set up configuration in <code>/etc/ircdjs/config.json</code>.

### Contributions

* overra
* jazzychad (Chad Etzel)
* sespindola (Sebastian A. Espindola)
* niklasf
* treeform
* guybrush (Patrick Pfeiffer)
* eirikb (Eirik Brandtzæg)
* andrew12 (Andrew Herbig)
* jrasanen (Jussi Räsänen)

### License (GPL)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see "http://www.gnu.org/licenses/":http://www.gnu.org/licenses/.
