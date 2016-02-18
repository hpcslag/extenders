# extenders
Minimalist plug-loader for Node.js Application.

## What is this?
Your main program can be assembled feature you need through kit use `Extenders`, 
mean if today you want a web server have a file folder view plugin, you just need use `Extenders` to install `web-server4extenders` and `folder-viewer4extenders`, then `folder-view4extenders` can be use on `web-server4extenders`, these plugin don't know who can support (like `web-server4extenders`), but plugin can be declare in program, first these plugin need to match the target program has support api variable.

 `web-server4extenders` need declare to config file it is Main program, then other plugin can be use for `web-server4extenders`.

If you want create new Project use`Extenders`, important things is if you want use other extenders-plugin (ex-plug), you need reference these plugin document, see that  what api you need to create for these plugin use.

Extenders Project Folder Architecture:

 - core: the Extenders Core, to handle your extenders plugin program and exchange api.

 - lib: library for `Extenders`.

 - ex-plugin: this folder will create to your path, inside put all plugin you need.

 - ex-config: this folder will create to your path, inside put all plugin config.

 - ex-conf.json: this file will create to your path, written all important config include have main program name, these parameters can auto create by you use `Extenders` command line tool.
 - 

##Install

##Design patterns

##To get started create simple project

##Config files

##Plugin list:
 - `web-server4extenders` @MacTaylor, This is main program plugin. (just a server)
 - `folders-viewer4web-server` @MacTaylor, This plugin is support for `web-server4extenders` use.
 - `mime-type4web-server` @MacTaylor, This plugin support for `web-server4extenders` use.
 - `SimpleWebSite` @MacTaylor, This project is running under main program(`web-server4extenders`), and it will use `folder-viewer4web-server`plugin to get folder information, and use `mime-type4web-server` to handle show 200 more file type in website render.

