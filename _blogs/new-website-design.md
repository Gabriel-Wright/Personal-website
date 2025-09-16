---
layout: standard-blog
title: What's needed for a website?
date: 2025-09-16
topics: Personal, Software Development
description: Explanation of the design decisions made for this website, and the overall philosophy employed when designing this website.
---

# What's needed for a website?

The [previous site]({{site.baseurl}}/projects/springboot-vaadin-site) I developed was bulky - every update felt like surgery. The site relied on SpringBoot's embedded tomcat server and communicated with a Database Layer to represent articles. From when I first deployed the site, it was a hassle to update, costly to run and full on unnecessary complexity. Great for getting better at development, but not great for a personal blog. 

I knew at some point my personal site needed to change and this week I got the opportunity to lock in and make that change. 
I've been cat-sitting my friend's cat Simba!! And together we tag teamed creating this site.

![TestImage]({{site.baseurl}}/assets/images/blogs/simba.JPG){:.small-image}

## Simba's Advice

On a cool Sunday afternoon I sat down in my cheap faux-wicker chair - ready to carve out a small
space for myself on the big world wide web!!

I turned to Simba: "What should I change from my first website?". He paused, 
pushed up his glasses and listed three issues:

 - Storing articles in a DB is overkill for a personal site.
 - Using an API to add and access articles adds unnecessary overhead.
 - Articles are read in with a clunky custom parser instead of markdown.

I was shocked, this was the first time I had heard Simba speak. His voice was nasally, but I still liked it.

Simba was right! A DB/API setup was cool for learning full stack, but it slowed me down during production use. 
I kept adding features that might make adding content easier, instead of actually adding content.

## Design Choices

From the outset, I knew I didn't want to host a server or pay for any upkeep beyond a domain name. I also wanted to keep the tech stack minimal. This site is just **HTML, CSS and JS**, stitched together with **Jekyll**, and deployed on **github pages**.

I split content into two main types: **blog pages** and **project pages**.

### Blog Pages

Blog pages are simple articles, like the one you are reading right now!! The data for these blog pages is written in markdown files `.md.` At the top of each `.md` there is a `YAML` front matter which Jekyll uses as metadata.

E.g. 

  ```
    ---
    layout: standard-blog
    title: Fake article
    date: 2025-09-10
    topics: Forgery, crime, cat worship
    description: A fake article used in a real article
    ---

  ```

Here `layout: standard-blog`, tells Jekyll to render the markdown inside `_layouts/standard-blog.html`:

  ```
    <body class="standard-blog-body"> 
        /* Include Header through Jekyll */

        <main class="standard-blog-content">
            /* read in blog content from .md file */
        </main>

        <footer class="footer">
           /* Include footer through Jekyll */
        </footer>
    </body>
  ```

This way, every blog post follows the same layout without needing a DB or custom parser.

The metadata from all of the blogs can be also be grouped as a collection. This allows all of the blogs to be listed in date sorted order under the `/blogs/` collection.

  ```
  collections:
  blogs:
    output: true
    permalink: /blogs/:name/
  ```

### Project Pages

My project pages are different - they don't just show an article but also links and context about each project. Since there are fewer projects, I have opted to write each page in custom HTML. I think this is reasonable, since giving each project page a unique HTML page makes them stand out (e.g. see Chaotic Cats' project page), and I'll create a new project page much less often than blog posts.

Project metadata lives in `_data/projects.yml`. 

  ```
  - name: "Chaotic Cats"
  url: "/projects/chaotic-cats"
  date: 2025-02-01
  description: "Released a Multiplayer Party Game on Steam with friends"
  topic: "Game Development, Unity, C#"
  image: "/assets/images/projects/chaotic-cats/chaotic-cats-preview.jpg"
  ```


This data has to be manually appended and then all projects are displayed in a list:

  ```
    <h1 id="projects-title">Projects</h1>
    <div id="project-list-container">
        /* Jekyll Sorts and displays containers that show a project article */
    </div>

  ```

## Only building what's necessary

[Diffblue](https://www.diffblue.com/), the company where I used to work, got me thinking about tech minimalism. Their product, Cover, generates unit tests for Java Code without using LLMS - instead using reinforcement learning to create unit tests by optimising coverage. The ideology I appreciated with Diffblue's "Cover" product, is that LLMs are everything products - they can statistically generate reasonable results for the a vast range of tasks - whereas Diffblue's Cover is optimised for one specific purpose... generating unit tests. 

The everything product approach of LLMs is impressive, but do we always need that? Smartphones are everything products too, at some point an "everything tool" risks serving itself more than its user, and over consuming.

My previous website was by no means an everything product, but it was bloated. I over-engineered features instead of keeping it simple. With this new site, I want to build only what's necessary now, keeping it lightweight enough to expand later if needed.

Future considerations might include:
- Storage: if the repo grows too large with images and posts.
- Filtering: right now blogs and projects are just ordered by date. What about filtering by date? Pagination? Can Jekyll handle that?
- Accessibility: is my CSS design friendly for colorblind users? Is it accessible? Does it work across devices?

For now, this site does exactly what I need - and nothing more.

When I asked Simba if my site was ready to live, he stoically replied: 
*"For apple pickers the question is not, 'when is this tree ready to bear fruit?' It is instead, 'have you tried these apples yet?'".*

I didn't really understand what he meant, so I decided to take it as a compliment.

As a test to see how well I've designed this site, **I will try to add blog posts weekly** (at least at the start).
Let's see how that goes!
