<div align="center"><img src="assets/icons/visplay_icon.png" alt="Visplay" height="180"/></div>

# What is Visplay?

This project's goal is to make the TVs in many of Mines' buildings display useful content, although it is a general purpose digital signage solution and can also be used outside of Mines. This will eventually include general announcements, videos/images, weather, and "slideshow-like" content. Basically, this project aims to replace the current (closed-source and paid) software currently utilized by Mines to serve this purpose.

# Architecture

```
Config Panel <--> [ Server ] <--> Database
                   /   |   \
                  /    |    \
                 v     v     v
           Renderer Renderer Renderer
```

Although previous versions of the project have utilizied a peer-to-peer network, this new revision instead relies on a single server to serve content to renderer nodes, as this greatly simplifies the design. 

## Backend

The backend is responsible for serving content to the renderers, as well as for serving a config panel that can be used to configure the renderers to show different content.

Communication between the Server and Renderers is done using HTTP, using JSON to send data about different layouts, slides, etc.

The current backend uses NodeJS (Typescript).

## Renderers
The renderers will be thin clients (like Raspberry Pis) attached directly to the TVs and communicating with the server to fetch information about what to show on the displays.

Each renderer is identified by its MAC address, which makes it easier to configure even across OS resets. It will register itself with the server upon first boot.

Renderers render content using Flutter, as it is especially well suited for use across many different platforms.

Renderers can also store slides/content locally for later retrieval. This is useful both if the server is unavailable and to limit bandwidth.

## Config Panel
The config panel is a web app and is used to configure renderers. 

Please see issue [#3](https://github.com/ColoradoSchoolOfMines/visplay-v2/issues/3) for more information on the structure and layout of this aspect.

## Database
Visplay is using MongoDB to store configuration settings and user information.

# Setting up the environment
Coming soon...
