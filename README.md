<div id="responsive-meta-container" data-pjax-replace>
       <div class="d-block d-md-none mb-2 px-3 px-md-4 px-lg-5">
      <h1 class="f4 mb-3">
        Official Inertia.js website.
      </h1>
   <div>       
  Inertia.js lets you quickly build modern single-page React, Vue and Svelte apps using classic server-side routing and controllers. Find full documentation at <a href="https://inertiajs.com/" rel="nofollow">inertiajs.com</a>.<g-emoji class="g-emoji" alias="purple_heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f49c.png">💜</g-emoji></p>
<h2 dir="auto"><a id="user-content-contributing" class="anchor" aria-hidden="true" href="#contributing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a></h2>
</div>
    <pre><code class="hljs language-markdown">1.<span class="hljs-bullet">resources ->
</span>-> </span>2. js
<span class="hljs-bullet"> -> </span>3. Pages
<span class="hljs-bullet">  -> </span>4. Dashboard.js
</code></pre>
  </div>
    <h1>Using React Spring for animation</h1>
    </br>
    <div>A spring-physics first animation library
giving you flexible tools to confidently cast your ideas <a href="https://react-spring.io/" rel="nofollow">react-spring</a></div>

<h1> A demo application to illustrate how Inertia.js works.<h1>
 </br>

![](https://raw.githubusercontent.com/isogand/Bike-Inertia/main/public/image/project.gif)

<a id="user-content-installation" class="anchor" aria-hidden="true" href="#installation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>
Installation</h2>
<p dir="auto">Clone the repo locally:</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="git clone https://github.com/inertiajs/pingcrm.git pingcrm
cd pingcrm"><pre>git clone https://github.com/isogand/Bike-Inertia.git
<span class="pl-c1">cd</span></pre></div>
<p dir="auto">Install PHP dependencies:</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="composer install"><pre>composer install</pre></div>
<p dir="auto">Install NPM dependencies:</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="npm ci"><pre>npm ci</pre></div>
<p dir="auto">Build assets:</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="npm run dev"><pre>npm run dev</pre></div>
<p dir="auto">Setup configuration:</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="cp .env.example .env"><pre>cp .env.example .env</pre></div>
<p dir="auto">Generate application key:</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="php artisan key:generate"><pre>php artisan key:generate</pre></div>
<p dir="auto">Create an SQLite database. You can also use another database (MySQL, Postgres), simply update your configuration accordingly.</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="touch database/database.sqlite"><pre>touch database/database.sqlite</pre></div>
<p dir="auto">Run database migrations:</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="php artisan migrate"><pre>php artisan migrate</pre></div>
<p dir="auto">Run database seeder:</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="php artisan db:seed"><pre>php artisan db:seed</pre></div>
<p dir="auto">Run the dev server (the output will give the address):</p>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="php artisan serve"><pre>php artisan serve</pre></div>
<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="php artisan serve"><pre>npm run watch</pre></div>
